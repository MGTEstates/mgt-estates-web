import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Consultation Request Received",
  description:
    "Your consultation request has been received and will be reviewed shortly.",
  path: "/consultation/success",
  noIndex: true,
});

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
