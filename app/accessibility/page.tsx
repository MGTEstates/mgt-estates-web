import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | MGT Estates",
  description:
    "Accessibility commitment and support information for the MGT Estates website.",
};

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <section className="legal-container">
        <p className="section-label">Accessibility</p>
        <h1>Accessibility Statement</h1>
        <p className="legal-updated">Last updated: June 24, 2026</p>

        <p>
          MGT Estates is committed to providing a website experience that is
          accessible to the widest possible audience, regardless of technology
          or ability.
        </p>

        <h2>Accessibility Commitment</h2>
        <p>
          We aim to conform to WCAG 2.1 Level AA standards and continuously
          improve usability across desktop, tablet, and mobile devices.
        </p>

        <h2>What We Are Doing</h2>
        <ul>
          <li>Using semantic HTML and clear heading hierarchy</li>
          <li>Maintaining keyboard-navigable interfaces</li>
          <li>Providing visible focus indicators</li>
          <li>Supporting sufficient contrast for readable text</li>
          <li>Reviewing pages for screen reader compatibility</li>
        </ul>

        <h2>Ongoing Improvements</h2>
        <p>
          Accessibility is an ongoing effort. We regularly review content,
          components, and interactions to identify and remediate accessibility
          issues as standards and technologies evolve.
        </p>

        <h2>Feedback and Assistance</h2>
        <p>
          If you experience an accessibility barrier while using this website,
          contact us and we will make reasonable efforts to provide the
          information you need in an accessible format.
        </p>
        <p>
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          <br />
          <a href="tel:+18324034664">(832) 403-4664</a>
        </p>
      </section>
    </main>
  );
}
