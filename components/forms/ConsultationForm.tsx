'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitConsultationForm } from '@/lib/actions/consultation';
import { consultationSchema, ConsultationFormData } from '@/lib/validations/consultation';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

const howCanIHelpOptions = [
  { value: 'buying', label: 'Buying' },
  { value: 'selling', label: 'Selling' },
  { value: 'buying-selling', label: 'Buying & Selling' },
  { value: 'relocation', label: 'Relocation' },
  { value: 'investment', label: 'Investment Property' },
  { value: 'general', label: 'General Consultation' },
];

const timelineOptions = [
  { value: 'immediately', label: 'Immediately' },
  { value: '1-3-months', label: '1–3 Months' },
  { value: '3-6-months', label: '3–6 Months' },
  { value: '6-12-months', label: '6–12 Months' },
  { value: 'researching', label: 'Researching' },
];

export default function ConsultationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ConsultationFormData) => {
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitConsultationForm(data);

      if (result.success) {
        reset();
        router.push('/consultation/success');
      } else {
        setSubmitError(result.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '100%' }}>
      {submitError && (
        <div
          style={{
            backgroundColor: '#ffebee',
            border: '1px solid #ef5350',
            borderRadius: '6px',
            padding: '12px 16px',
            marginBottom: '24px',
            fontSize: '0.95rem',
            color: '#c62828',
          }}
        >
          {submitError}
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '4px',
        }}
      >
        <div>
          <FormInput
            id="firstName"
            label="First Name"
            placeholder="John"
            required
            error={errors.firstName}
            {...register('firstName')}
          />
        </div>

        <div>
          <FormInput
            id="lastName"
            label="Last Name"
            placeholder="Smith"
            required
            error={errors.lastName}
            {...register('lastName')}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <div>
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
            error={errors.email}
            {...register('email')}
          />
        </div>

        <div>
          <FormInput
            id="phone"
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            required
            error={errors.phone}
            {...register('phone')}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <div>
          <FormSelect
            id="howCanIHelp"
            label="How can I help?"
            placeholder="Select an option"
            options={howCanIHelpOptions}
            required
            error={errors.howCanIHelp}
            {...register('howCanIHelp')}
          />
        </div>

        <div>
          <FormSelect
            id="timeline"
            label="Timeline"
            placeholder="Select a timeline"
            options={timelineOptions}
            required
            error={errors.timeline}
            {...register('timeline')}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <div>
          <FormInput
            id="preferredArea"
            label="Preferred Area"
            placeholder="e.g., Montgomery County"
            error={errors.preferredArea}
            {...register('preferredArea')}
          />
        </div>

        <div>
          <FormInput
            id="estimatedBudget"
            label="Estimated Budget or Property Value"
            placeholder="e.g., $500,000 - $750,000"
            error={errors.estimatedBudget}
            {...register('estimatedBudget')}
          />
        </div>
      </div>

      <FormTextarea
        id="goals"
        label="Tell me about your goals"
        placeholder="Describe your real estate objectives, priorities, and any specific considerations..."
        rows={6}
        required
        error={errors.goals}
        {...register('goals')}
      />

      <FormButton
        type="submit"
        disabled={isSubmitting || !isValid}
        isLoading={isSubmitting}
      >
        Submit Consultation Request
      </FormButton>

      <p
        style={{
          fontSize: '0.85rem',
          color: '#777',
          marginTop: '16px',
          textAlign: 'center',
        }}
      >
        Your information is secure and will only be used to respond to your consultation request.
      </p>
    </form>
  );
}
