import { createPageMetadata } from '@/lib/seo';

import SchedulingCalendarEmbed from '@/components/consultation/SchedulingCalendarEmbed';

export const metadata = createPageMetadata({
  title: 'Reserve Your Private Consultation',
  description:
    'Select a consultation time that works best for your schedule using our secure booking calendar.',
  path: '/consultation/schedule',
  noIndex: true,
});

export default function ConsultationSchedulePage() {
  return (
    <main className="consultation-schedule-page">
      <section className="consultation-schedule-intro">
        <div className="consultation-schedule-intro-copy">
          <p className="section-label">NEXT STEP</p>
          <h1 id="consultation-schedule-heading">Reserve Your Private Consultation</h1>
          <p>
            Your consultation request has been received. Select a time below that works best for
            your schedule.
          </p>
        </div>
      </section>

      <section className="consultation-schedule-calendar-section">
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
