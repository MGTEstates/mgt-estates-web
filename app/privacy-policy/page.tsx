import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how MGT Estates collects, uses, and protects personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <section className="legal-container">
        <p className="section-label">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: October 25, 2026</p>

        <p>
          MGT Estates is the consumer-facing brand of MGT Advisory Group LLC
          (&quot;MGT Advisory Group LLC,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy
          explains what information we collect, how we use it, and what choices
          you have when using this website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information you provide directly, including:</p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Preferred location, budget range, and transaction timeline</li>
          <li>Any details you submit through forms or consultation requests</li>
          <li>Messages or communication history with our team</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Respond to consultation requests and client inquiries</li>
          <li>Deliver real estate advisory services</li>
          <li>Send transactional communications, including appointment
              confirmations and reminders</li>
          <li>Improve website performance, security, and usability</li>
          <li>Maintain records related to client communications</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2>SMS/Text Messaging Privacy</h2>
        <p>
          Providing a phone number or booking a consultation does not, by
          itself, give consent to receive text messages. If you choose to opt in
          to text messages from MGT Estates (operated by MGT Advisory Group
          LLC), you may receive messages about consultation scheduling,
          appointment confirmations and reminders, and responses to your
          inquiries.
        </p>
        <p>
          Message frequency varies based on your scheduling activity and
          inquiries. Message and data rates may apply.
        </p>
        <p>
          <strong>To opt out:</strong> Reply <strong>STOP</strong> to any
          text message at any time. You will receive one confirmation message
          and no further messages will be sent.
        </p>
        <p>
          <strong>For help:</strong> Reply <strong>HELP</strong> to any text
          message or contact us at{' '}
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>.
        </p>
        <p>
          Consent to receive text messages is voluntary and is not a condition
          of purchasing any services or of any consultation engagement.
        </p>
        <p>
          Text messaging services are provided through GoHighLevel, a
          third-party CRM and communications platform. Message delivery is
          subject to carrier terms and conditions. We are not responsible for
          delays or failures caused by carrier networks.
        </p>

        <h3>Mobile Information Sharing</h3>
        <p>
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors
          in support services, such as customer service, is permitted. All other
          use case categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </p>
        <p>
          We may use trusted service providers, including CRM providers,
          messaging delivery providers, and operational service providers, to
          process information solely to support services performed on behalf of
          MGT Estates. These providers are not permitted to use SMS opt-in
          information for their own marketing or promotional purposes.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          This website may use cookies and similar technologies to support site
          functionality, understand usage patterns, and improve performance. You
          can control cookies through your browser settings.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use analytics tools to understand aggregate site activity,
          including page views, traffic sources, and on-site behavior. Analytics
          data is used to improve the website and service experience.
        </p>

        <h2>Contact Forms and Communications</h2>
        <p>
          Information submitted through contact or consultation forms is used to
          respond to your request and provide related services. Submitting a
          form does not create a brokerage relationship.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use trusted third-party providers for hosting, analytics,
          communication, and operational support. These providers process data
          only for authorized business purposes and under applicable legal
          standards.
        </p>

        <h2>Data Security</h2>
        <p>
          We use commercially reasonable administrative, technical, and
          organizational safeguards to protect personal information. No online
          transmission or storage system is guaranteed to be fully secure.
        </p>

        <h2>Your Privacy Rights</h2>
        <p>Depending on applicable law, you may request to:</p>
        <ul>
          <li>Access, update, or correct your personal information</li>
          <li>Request deletion of information no longer needed</li>
          <li>Limit or object to certain processing activities</li>
          <li>Withdraw consent where processing is consent-based</li>
        </ul>
        <p>
          To make a request, contact us at{' '}
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          This website is not directed to children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2>Jurisdiction</h2>
        <p>
          This Privacy Policy is governed by the laws of the State of Texas,
          without regard to conflict-of-law principles.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any material
          updates will be posted on this page with a revised &quot;Last updated&quot;
          date.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact:
          <br />
          MGT Estates (operated by MGT Advisory Group LLC)
          <br />
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          <br />
          <a href="tel:+18324034664">(832) 403-4664</a>
        </p>
      </section>
    </main>
  );
}