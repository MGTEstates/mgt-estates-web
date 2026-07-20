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
        </div>
      </section>
    </main>
  );
}