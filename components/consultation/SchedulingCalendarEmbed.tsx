'use client';

import Script from 'next/script';

const GHL_BOOKING_IFRAME_URL =
  'https://api.leadconnectorhq.com/widget/booking/Z5dVSfYTbDhJeQ3bNUkC';

export default function SchedulingCalendarEmbed() {
  return (
    <>
      <div className="consultation-schedule-calendar-shell" aria-labelledby="consultation-schedule-heading">
        <iframe
          src={GHL_BOOKING_IFRAME_URL}
          title="Schedule an MGT Estates real estate consultation"
          className="consultation-schedule-calendar-iframe"
          scrolling="no"
          id="Z5dVSfYTbDhJeQ3bNUkC_1783904562187"
          loading="lazy"
        />
      </div>

      <Script
        id="ghl-scheduling-embed-script"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
