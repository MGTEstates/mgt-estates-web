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
        <p className="legal-updated">Last updated: June 24, 2026</p>

        <p>
          MGT Estates ("MGT Estates," "we," "our," or "us") respects your
          privacy. This Privacy Policy explains what information we collect,
          how we use it, and what choices you have when using this website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information you provide directly, including:</p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Preferred location, budget range, and transaction timeline</li>
          <li>Any details you submit through forms or consultation requests</li>
          <li>Messages or communication history with our team</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Respond to consultation requests and client inquiries</li>
          <li>Deliver real estate advisory services</li>
          <li>Improve website performance, security, and usability</li>
          <li>Maintain records related to client communications</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2>Cookies and Similar Technologies</h2>
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

        <h2>Your Rights and Choices</h2>
        <p>Depending on applicable law, you may request to:</p>
        <ul>
          <li>Access, update, or correct your personal information</li>
          <li>Request deletion of information no longer needed</li>
          <li>Limit or object to certain processing activities</li>
          <li>Withdraw consent where processing is consent-based</li>
        </ul>
        <p>
          To make a request, contact us at
          <a href="mailto:michael@mgtestates.com"> michael@mgtestates.com</a>.
        </p>

        <h2>Children's Privacy</h2>
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
          updates will be posted on this page with a revised "Last updated"
          date.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact:
          <br />
          MGT Estates
          <br />
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          <br />
          <a href="tel:+18324034664">(832) 403-4664</a>
        </p>
      </section>
    </main>
  );
}