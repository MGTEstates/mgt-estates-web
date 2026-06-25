import Link from 'next/link';

export const metadata = {
  title: 'Consultation Request Received | MGT Estates',
  description: 'Your consultation request has been received and will be reviewed shortly.',
};

export default function ConsultationSuccessPage() {
  return (
    <main className="consultation-success-page">
      <section className="consultation-success-section">
        <div className="consultation-success-copy">
          <p className="section-label">SUCCESS</p>
          <h1>Consultation Request Received</h1>
          <p>
            Thank you for reaching out.
          </p>
          <p>
            Every consultation request is personally reviewed. You can expect
            a response within one business day.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
