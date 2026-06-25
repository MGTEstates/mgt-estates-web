import React from 'react';
import { ConsultationFormData } from '@/lib/validations/consultation';

interface ConsultationEmailTemplateProps {
  data: ConsultationFormData;
}

export const ConsultationEmailTemplate: React.FC<ConsultationEmailTemplateProps> = ({ data }) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#171717',
        backgroundColor: '#f7f7f5',
        padding: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            marginBottom: '24px',
            color: '#162434',
            fontFamily: 'Georgia, serif',
          }}
        >
          New Consultation Request
        </h1>

        <p
          style={{
            fontSize: '14px',
            color: '#777',
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Submitted at {new Date().toLocaleString('en-US', { 
            dateStyle: 'long',
            timeStyle: 'short'
          })}
        </p>

        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              marginBottom: '20px',
              color: '#171717',
              borderBottom: '1px solid #e5e5e5',
              paddingBottom: '12px',
            }}
          >
            Contact Information
          </h2>
          <p style={{ marginBottom: '12px' }}>
            <strong>Name:</strong> {data.firstName} {data.lastName}
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Email:</strong> <a href={`mailto:${data.email}`} style={{ color: '#162434' }}>{data.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href={`tel:${data.phone}`} style={{ color: '#162434' }}>{data.phone}</a>
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              marginBottom: '20px',
              color: '#171717',
              borderBottom: '1px solid #e5e5e5',
              paddingBottom: '12px',
            }}
          >
            Inquiry Details
          </h2>
          <p style={{ marginBottom: '12px' }}>
            <strong>How can I help?</strong> {data.howCanIHelp}
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Timeline:</strong> {data.timeline}
          </p>
          {data.preferredArea && (
            <p style={{ marginBottom: '12px' }}>
              <strong>Preferred Area:</strong> {data.preferredArea}
            </p>
          )}
          {data.estimatedBudget && (
            <p style={{ marginBottom: '12px' }}>
              <strong>Estimated Budget or Property Value:</strong> {data.estimatedBudget}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              marginBottom: '20px',
              color: '#171717',
              borderBottom: '1px solid #e5e5e5',
              paddingBottom: '12px',
            }}
          >
            Goals
          </h2>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.8',
              color: '#555',
              fontStyle: 'italic',
            }}
          >
            {data.goals}
          </p>
        </div>

        <div
          style={{
            borderTop: '1px solid #e5e5e5',
            paddingTop: '20px',
            fontSize: '12px',
            color: '#777',
          }}
        >
          <p>This is an automated email from mgtestates.com consultation system.</p>
        </div>
      </div>
    </div>
  );
};
