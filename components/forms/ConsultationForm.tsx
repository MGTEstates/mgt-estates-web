'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { submitConsultationForm } from '@/lib/actions/consultation';

import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

type ConsultationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  howCanIHelp: string;
  timeline: string;
  preferredArea: string;
  estimatedBudget: string;
  goals: string;
};

type ValidationErrors = Partial<Record<keyof ConsultationFormData, string>>;

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
  const [errors, setErrors] = useState<ValidationErrors>({});

  const optionSets = useMemo(
    () => ({
      howCanIHelp: new Set(howCanIHelpOptions.map((option) => option.value)),
      timeline: new Set(timelineOptions.map((option) => option.value)),
    }),
    []
  );

  const validate = (data: ConsultationFormData): ValidationErrors => {
    const nextErrors: ValidationErrors = {};

    if (!data.firstName || data.firstName.length < 2 || data.firstName.length > 50) {
      nextErrors.firstName = 'First name must be between 2 and 50 characters';
    }

    if (!data.lastName || data.lastName.length < 2 || data.lastName.length > 50) {
      nextErrors.lastName = 'Last name must be between 2 and 50 characters';
    }

    if (!data.email) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (!data.phone) {
      nextErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-+()]+$/.test(data.phone)) {
      nextErrors.phone = 'Please enter a valid phone number';
    }

    if (!optionSets.howCanIHelp.has(data.howCanIHelp)) {
      nextErrors.howCanIHelp = 'Please select an option';
    }

    if (!optionSets.timeline.has(data.timeline)) {
      nextErrors.timeline = 'Please select a timeline';
    }

    if (data.preferredArea.length > 100) {
      nextErrors.preferredArea = 'Preferred area must be less than 100 characters';
    }

    if (data.estimatedBudget.length > 100) {
      nextErrors.estimatedBudget = 'Estimated budget must be less than 100 characters';
    }

    if (!data.goals || data.goals.length < 10 || data.goals.length > 1000) {
      nextErrors.goals = 'Goals must be between 10 and 1000 characters';
    }

    return nextErrors;
  };

  const clearError = (fieldName: keyof ConsultationFormData) => {
    setErrors((prev) => {
      if (!prev[fieldName]) {
        return prev;
      }

      return {
        ...prev,
        [fieldName]: undefined,
      };
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const data: ConsultationFormData = {
      firstName: String(formData.get('firstName') || '').trim(),
      lastName: String(formData.get('lastName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      howCanIHelp: String(formData.get('howCanIHelp') || ''),
      timeline: String(formData.get('timeline') || ''),
      preferredArea: String(formData.get('preferredArea') || '').trim(),
      estimatedBudget: String(formData.get('estimatedBudget') || '').trim(),
      goals: String(formData.get('goals') || '').trim(),
    };

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setErrors({});

    try {
      const result = await submitConsultationForm(data);

      if (result.success) {
        formElement.reset();
        router.push('/consultation/success');
      } else {
        setSubmitError(result.error || 'An error occurred. Please try again.');
      }
    } catch {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: '100%' }} noValidate>
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
            name="firstName"
            maxLength={50}
            onInput={() => clearError('firstName')}
          />
        </div>

        <div>
          <FormInput
            id="lastName"
            label="Last Name"
            placeholder="Smith"
            required
            error={errors.lastName}
            name="lastName"
            maxLength={50}
            onInput={() => clearError('lastName')}
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
            name="email"
            onInput={() => clearError('email')}
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
            name="phone"
            onInput={() => clearError('phone')}
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
            name="howCanIHelp"
            defaultValue=""
            onChange={() => clearError('howCanIHelp')}
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
            name="timeline"
            defaultValue=""
            onChange={() => clearError('timeline')}
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
            name="preferredArea"
            maxLength={100}
            onInput={() => clearError('preferredArea')}
          />
        </div>

        <div>
          <FormInput
            id="estimatedBudget"
            label="Estimated Budget or Property Value"
            placeholder="e.g., $500,000 - $750,000"
            error={errors.estimatedBudget}
            name="estimatedBudget"
            maxLength={100}
            onInput={() => clearError('estimatedBudget')}
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
        name="goals"
        minLength={10}
        maxLength={1000}
        onInput={() => clearError('goals')}
      />

      <FormButton
        type="submit"
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        Submit Consultation Request
      </FormButton>

      <p
        style={{
          fontSize: '0.85rem',
          color: '#5f5f5f',
          marginTop: '16px',
          textAlign: 'center',
        }}
      >
        Your information is secure and will only be used to respond to your consultation request.
      </p>
    </form>
  );
}
