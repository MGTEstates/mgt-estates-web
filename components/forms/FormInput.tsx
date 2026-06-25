import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, placeholder, type = 'text', error, required, disabled, ...props }, ref) => {
    return (
      <div style={{ marginBottom: '28px' }}>
        <label
          htmlFor={props.id}
          style={{
            display: 'block',
            fontSize: '0.95rem',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#171717',
          }}
        >
          {label}
          {required && <span style={{ color: '#d32f2f' }}> *</span>}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '1rem',
            border: error ? '1px solid #d32f2f' : '1px solid #d7d7d7',
            borderRadius: '6px',
            backgroundColor: disabled ? '#f5f5f5' : '#ffffff',
            color: '#171717',
            transition: 'border-color 0.2s ease',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            if (!error) {
              e.currentTarget.style.borderColor = '#162434';
            }
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? '#d32f2f' : '#d7d7d7';
          }}
          {...props}
        />
        {error && (
          <p
            style={{
              fontSize: '0.875rem',
              color: '#d32f2f',
              marginTop: '6px',
            }}
          >
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
