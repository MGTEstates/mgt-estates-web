import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>MGT Estates</h3>
          <p>
            Strategic real estate advisory for buyers and sellers who value
            discretion, preparation, and disciplined execution.
          </p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/consultation?service=buying">Buying</Link>
          <Link href="/consultation?service=selling">Selling</Link>
          <Link href="/consultation">Contact</Link>
        </nav>

        <nav className="footer-column" aria-label="Footer resources">
          <h4>Resources</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </nav>

        <div className="footer-column footer-contact-column">
          <h4>Contact</h4>
          <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <span>YouTube (coming soon)</span>
          <a href="tel:+18324034664">(832) 403-4664</a>
        </div>
      </div>

      <div className="footer-disclosures" aria-label="Real estate disclosures">
        <p>
          Real estate services are subject to Texas law and brokerage
          regulations. Information on this website is for general informational
          purposes and is not a guarantee of future market performance.
        </p>
        <p>
          Texas disclosures required for production launch:
          <span> [TREC Consumer Protection Notice URL Placeholder]</span>
          <span> [IABS Form URL Placeholder]</span>
          <span> [Brokerage License Number Placeholder]</span>
        </p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <span>© 2026 MGT Estates. All Rights Reserved.</span>
        <span>Designed and developed by MGT Estates.</span>
      </div>
    </footer>
  );
}