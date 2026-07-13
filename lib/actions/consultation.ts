'use server';

import { headers } from 'next/headers';
import { after } from 'next/server';
import { Resend } from 'resend';

import { syncConsultationToCRM } from '@/lib/crm';
import { ConsultationEmailTemplate } from '@/lib/email/consultation-template';
import { logError, logInfo } from '@/lib/observability/logger';
import { consultationSchema } from '@/lib/validations/consultation';

function createCorrelationId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `consultation-${Date.now()}`;
}

export async function submitConsultationForm(formData: unknown) {
  const correlationId = createCorrelationId();

  try {
    const headerStore = await headers();
    const forwardedFor = headerStore.get('x-forwarded-for');
    const requestIp = forwardedFor?.split(',')[0]?.trim() || 'unknown';

    logInfo({
      correlationId,
      event: 'consultation.submission.received',
      stage: 'submission',
      requestIp,
    });

    const validatedData = consultationSchema.parse(formData);

    logInfo({
      correlationId,
      event: 'consultation.validation.succeeded',
      stage: 'validation',
      email: validatedData.email,
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      logError({
        correlationId,
        event: 'consultation.email.configuration_error',
        stage: 'resend',
        error: 'RESEND_API_KEY is not configured',
      });

      return {
        success: false,
        error: 'Email service is not configured. Please contact support.',
      };
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@mgtestates.com',
      to: process.env.CONSULTATION_EMAIL || 'michael@mgtestates.com',
      subject: `New Consultation Request — ${validatedData.firstName} ${validatedData.lastName}`,
      react: ConsultationEmailTemplate({ data: validatedData }) as React.ReactElement,
    });

    if (error) {
      logError({
        correlationId,
        event: 'consultation.email.failed',
        stage: 'resend',
        email: validatedData.email,
        error: error.message,
      });

      return {
        success: false,
        error: 'Failed to send consultation request. Please try again later.',
      };
    }

    logInfo({
      correlationId,
      event: 'consultation.email.succeeded',
      stage: 'resend',
      email: validatedData.email,
    });

    logInfo({
      correlationId,
      event: 'analytics.consultation_submitted',
      stage: 'analytics',
      email: validatedData.email,
    });

    after(async () => {
      logInfo({
        correlationId,
        event: 'crm.sync.deferred',
        stage: 'crm',
        email: validatedData.email,
      });

      try {
        const crmResult = await syncConsultationToCRM(
          {
            ...validatedData,
            submittedAt: new Date().toISOString(),
            source: 'website-consultation',
          },
          {
            correlationId,
          },
        );

        logInfo({
          correlationId,
          event: 'crm.sync.result',
          stage: 'crm',
          skipped: crmResult.skipped,
          submissionKey: crmResult.submissionKey,
          contactId: crmResult.contactId,
          opportunityId: crmResult.opportunityId,
        });
      } catch (crmError) {
        logError({
          correlationId,
          event: 'crm.sync.failed',
          stage: 'crm',
          email: validatedData.email,
          error: crmError instanceof Error ? crmError.message : String(crmError),
        });
      }
    });

    logInfo({
      correlationId,
      event: 'consultation.submission.succeeded',
      stage: 'response',
      email: validatedData.email,
    });

    return {
      success: true,
      message: 'Consultation request submitted successfully.',
    };
  } catch (error) {
    logError({
      correlationId,
      event: 'consultation.submission.failed',
      stage: 'response',
      error: error instanceof Error ? error.message : String(error),
    });

    if (error instanceof Error) {
      return {
        success: false,
        error: 'An error occurred. Please try again.',
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
