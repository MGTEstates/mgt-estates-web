import React from 'react';
import { FieldError } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  placeholder?: string;
  options: Array<Option>;
  error?: FieldError;
  required?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, placeholder, options, error, required, disabled, ...props }, ref) => {
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
        <select
          ref={ref}
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
            cursor: disabled ? 'not-allowed' : 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23162434' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            backgroundSize: '20px',
            paddingRight: '40px',
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
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

FormSelect.displayName = 'FormSelect';

export default FormSelect;
