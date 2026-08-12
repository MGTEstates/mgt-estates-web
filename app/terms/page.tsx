import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the MGT Estates website and informational content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-container">
        <p className="section-label">Terms</p>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-updated">Last updated: August 11, 2026</p>

        <p>
          These Terms &amp; Conditions ("Terms") govern your use of the MGT
          Estates website. MGT Estates is the consumer-facing brand of MGT
          Solutions LLC ("MGT Solutions LLC," "we," "our," or "us"). By
          accessing or using this website, you agree to these Terms.
        </p>

        <h2>Website Use</h2>
        <p>
          You agree to use this website only for lawful purposes and in a
          manner that does not violate the rights of others, interfere with
          site functionality, or compromise security.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including copy, design, logos, images,
          graphics, and layout, is owned by or licensed to MGT Solutions LLC
          unless otherwise stated. Unauthorized copying, distribution, or
          commercial use is prohibited.
        </p>

        <h2>Communications and Text Messaging</h2>
        <p>
          By providing your phone number through our consultation booking form,
          you consent to receive transactional text messages from MGT Estates
          (operated by MGT Solutions LLC) related to your appointment, including
          booking confirmations and reminders.
        </p>
        <p>
          Message frequency varies. Message and data rates may apply.
          Reply <strong>STOP</strong> to opt out at any time.
          Reply <strong>HELP</strong> for assistance.
        </p>
        <p>
          Consent to receive text messages is not a condition of any purchase,
          service, or consultation engagement.
        </p>

        <h2>No Legal, Tax, or Financial Advice</h2>
        <p>
          Content on this website is provided for general informational purposes
          only and does not constitute legal, tax, accounting, investment, or
          financial advice. You should consult qualified professionals regarding
          your specific circumstances.
        </p>

        <h2>No Brokerage Relationship Created Online</h2>
        <p>
          Accessing this website, submitting a form, or communicating through
          the website does not by itself create an agency, representation,
          fiduciary, or brokerage relationship.
        </p>

        <h2>MLS and Property Information Disclaimer</h2>
        <p>
          Property details and market information may be sourced from third
          parties, including MLS systems. Such information is believed reliable
          but is not guaranteed, and may change without notice. Buyers and
          sellers should independently verify all information.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may include links to third-party websites. MGT Estates is
          not responsible for third-party content, privacy practices, or
          availability.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent allowed by law, MGT Solutions LLC is not liable
          for any direct, indirect, incidental, consequential, special, or
          punitive damages arising from or related to your use of this website.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless MGT Solutions LLC
          from claims, liabilities, damages, and expenses arising from your
          misuse of this website or violation of these Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to conflict-of-law principles.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may revise these Terms at any time. Continued use of this website
          after updates are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions regarding these Terms:
          <br />
          MGT Estates (operated by MGT Solutions LLC)
          <br />
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          <br />
          <a href="tel:+18324034664">(832) 403-4664</a>
        </p>
      </section>
    </main>
  );
}