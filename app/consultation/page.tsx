import ConsultationForm from '@/components/forms/ConsultationForm';

export const metadata = {
  title: 'Schedule A Private Consultation | MGT Estates',
  description: 'Schedule a consultation to discuss your real estate objectives and strategy.',
};

export default function ConsultationPage() {
  return (
    <main className="consultation-page">
      <section className="consultation-hero">
        <div className="consultation-hero-copy">
          <p className="section-label">CONSULTATION</p>
          <h1>Schedule A Private Consultation</h1>
          <p>
            Every engagement begins with understanding your objectives, timeline,
            and strategy before discussing specific properties.
          </p>
        </div>
      </section>

      <section className="consultation-form-section">
        <div className="consultation-form-container">
          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}