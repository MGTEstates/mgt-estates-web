"use client";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          MGT ESTATES
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/how-i-work">How I Work</a>
          <a href="/homes">Homes</a>
        </nav>

        <a href="tel:+18324034664" className="navbar-phone">
          (832) 403-4664
        </a>

        <a href="/consultation" className="nav-button">
          Book Consultation
        </a>

        <button className="navbar-toggle" aria-label="Open menu">
          ☰
        </button>

        <a href="tel:+18324034664" className="navbar-phone-mobile">
          Call Now (832) 403-4664
        </a>

      </div>
    </header>
  );
}