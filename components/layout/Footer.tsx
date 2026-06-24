"use client";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h3>MGT Estates</h3>
          <p>Luxury Representation Without Compromise.</p>
          <p className="footer-contact">
            <a href="tel:+18324034664">(832) 403-4664</a>
            <br />
            <a href="mailto:michael@mgtestates.com">michael@mgtestates.com</a>
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/how-i-work">How I Work</a>
          <a href="/homes">Homes</a>
          <a href="/consultation">Consultation</a>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <span>Michael Thomson | Real Broker, LLC</span>

        <span>
          Serving The Woodlands, Conroe, Kingwood & Montgomery County
        </span>

        <span>
          © 2026 MGT Estates. All Rights Reserved.
        </span>
      </div>

    </footer>
  );
}