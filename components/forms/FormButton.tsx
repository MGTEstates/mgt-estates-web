import React from 'react';

interface FormButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ children, isLoading, disabled, type = 'submit', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        style={{
          width: '100%',
          padding: '16px 24px',
          fontSize: '1rem',
          fontWeight: '600',
          backgroundColor: disabled || isLoading ? '#ccc' : '#162434',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          transition: 'opacity 0.2s ease, background-color 0.2s ease',
          opacity: disabled || isLoading ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (!disabled && !isLoading) {
            (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isLoading) {
            (e.currentTarget as HTMLButtonElement).style.opacity = '1';
          }
        }}
        {...props}
      >
        {isLoading ? 'Submitting...' : children}
      </button>
    );
  }
);

FormButton.displayName = 'FormButton';

export default FormButton;
