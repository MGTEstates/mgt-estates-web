'use server';

import { Resend } from 'resend';
import { ConsultationEmailTemplate } from '@/lib/email/consultation-template';
import { consultationSchema, ConsultationFormData } from '@/lib/validations/consultation';

/**
 * Server action to handle consultation form submission.
 * 
 * This function validates the form data and sends an email to the configured
 * consultation email address.
 * 
 * FUTURE INTEGRATION: Replace Resend email sending below with GoHighLevel CRM
 * integration. The validation and frontend remain unchanged—only this server
 * action needs modification. Update the section marked "// RESEND EMAIL SENDING"
 * to call GoHighLevel API instead.
 */
export async function submitConsultationForm(formData: unknown) {
  try {
    // Validate form data
    const validatedData = consultationSchema.parse(formData);

    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        error: 'Email service is not configured. Please contact support.',
      };
    }

    const resend = new Resend(apiKey);

    // RESEND EMAIL SENDING
    // FUTURE: Replace this entire block with GoHighLevel CRM API call
    // The validated data structure remains the same, only the API integration changes
    const { error, data } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@mgtestates.com',
      to: process.env.CONSULTATION_EMAIL || 'michael@mgtestates.com',
      subject: `New Consultation Request — ${validatedData.firstName} ${validatedData.lastName}`,
      react: ConsultationEmailTemplate({ data: validatedData }) as React.ReactElement,
    });

    if (error) {
      console.error('Email sending error:', JSON.stringify(error, null, 2));
      console.error('Error type:', typeof error);
      console.error('Error keys:', Object.keys(error));
      console.error('Full error object:', error);
      return {
        success: false,
        error: 'Failed to send consultation request. Please try again later.',
      };
    }

    // Email sent successfully
    console.log('Consultation email sent successfully:', data);
    return {
      success: true,
      message: 'Consultation request submitted successfully.',
    };
  } catch (error) {
    console.error('Consultation submission error:', error);
    
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      return {
        success: false,
        error: error.message || 'An error occurred. Please try again.',
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
