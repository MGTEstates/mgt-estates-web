import Link from "next/link";

import SchedulingCalendarEmbed from '@/components/consultation/SchedulingCalendarEmbed';

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

      <section className="consultation-booking-section">
        <div className="consultation-transition" aria-hidden="true">
          <span />
        </div>

        <div className="consultation-schedule-calendar-container">
          <SchedulingCalendarEmbed />

          <p className="consultation-schedule-fallback">
            Having trouble scheduling online?{' '}
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/mgt-estates-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the scheduling page in a new tab
            </a>
          </p>

          <section className="consultation-sms-disclosure" aria-label="SMS program disclosure">
            <p>
              By providing your phone number through this booking form, you may receive text
              messages from MGT Estates (operated by MGT Solutions LLC) related to your
              consultation request and real estate services.
            </p>
            <ul>
              <li>
                Message types may include appointment reminders, consultation confirmations,
                property updates, and optional marketing communications.
              </li>
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>
                Reply <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for assistance.
              </li>
              <li>
                SMS consent is optional and is not a condition of purchase or service.
              </li>
            </ul>
            <p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="consultation-sms-disclosure-divider" aria-hidden="true">│</span>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}