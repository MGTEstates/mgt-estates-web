import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  [key: string]: any;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, placeholder, error, required, disabled, rows = 5, ...props }, ref) => {
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
        <textarea
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
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
            resize: 'vertical',
            lineHeight: '1.5',
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

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
