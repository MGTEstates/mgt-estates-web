import ConsultationForm from "@/components/forms/ConsultationForm";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Schedule A Private Consultation",
  description:
    "Schedule a consultation to discuss your real estate objectives, timeline, and strategy.",
  path: "/consultation",
});

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