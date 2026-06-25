import { z } from 'zod';

export const consultationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number'),
  
  howCanIHelp: z
    .string()
    .min(1, 'Please select an option'),
  
  timeline: z
    .string()
    .min(1, 'Please select a timeline'),
  
  preferredArea: z
    .string()
    .max(100, 'Preferred area must be less than 100 characters')
    .optional()
    .nullable()
    .transform(val => val || ''),
  
  estimatedBudget: z
    .string()
    .max(100, 'Estimated budget must be less than 100 characters')
    .optional()
    .nullable()
    .transform(val => val || ''),
  
  goals: z
    .string()
    .min(1, 'Please tell us about your goals')
    .min(10, 'Goals must be at least 10 characters')
    .max(1000, 'Goals must be less than 1000 characters'),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
