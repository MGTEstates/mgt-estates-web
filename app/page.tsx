export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MGT ESTATES</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">How I Work</a>
          <a href="#">Homes</a>
        </div>

        <a href="#" className="btn-primary">
          Book Consultation
        </a>
      </nav>

      <main className="hero">
        <div className="hero-container">
          <p className="hero-eyebrow">
            Montgomery County Luxury Real Estate
          </p>

          <h1 className="hero-title">
            Luxury Representation
            <br />
            Without Compromise.
          </h1>

          <p className="hero-subtitle">
            Strategic real estate advisory for buyers,
            sellers, and investors throughout The
            Woodlands and Montgomery County.
          </p>

          <a href="#" className="btn-primary">
            Book A Consultation
          </a>
        </div>
      </main>
      <section className="about-section">
  <div className="about-grid">

    <div className="about-image">
      <img
        src="/michael-thomson.jpg"
        alt="Michael Thomson"
      />
    </div>

    <div className="about-content">

      <p className="section-label">
        ABOUT
      </p>

      <h2>
        Michael Thomson
      </h2>

      <h3>
        Founder, MGT Estates
      </h3>

      <p>
        Luxury representation is not about selling homes.
      </p>

      <p>
        It is about protecting leverage, reducing friction,
        and helping clients make high-conviction decisions.
      </p>

      <p>
        MGT Estates was built around a disciplined advisory
        process focused on strategy, execution, and long-term
        client outcomes.
      </p>

      <a href="#" className="btn-primary">
        Learn More
      </a>

    </div>

  </div>
</section>
<section className="process-section">

  <div className="process-container">

    <p className="section-label">
      HOW I WORK
    </p>

    <h2 className="process-heading">
      A Structured Approach To Real Estate Advisory
    </h2>

    <p className="process-intro">
      Every engagement begins with clarity, strategy,
      and disciplined execution designed around the
      client's specific objectives.
    </p>

    <div className="process-grid">

      <div className="process-card">
        <span className="process-number">01</span>

        <h3>Consultation</h3>

        <p>
          Every relationship begins with a focused
          consultation to understand goals, timing,
          and market priorities.
        </p>
      </div>

      <div className="process-card">
        <span className="process-number">02</span>

        <h3>Strategy</h3>

        <p>
          A tailored acquisition or listing strategy
          is developed using market analysis and
          execution planning.
        </p>
      </div>

      <div className="process-card">
        <span className="process-number">03</span>

        <h3>Execution</h3>

        <p>
          From negotiations to coordination and
          communication, every phase is managed
          with precision.
        </p>
      </div>

      <div className="process-card">
        <span className="process-number">04</span>

        <h3>Close</h3>

        <p>
          The process concludes with structured
          oversight through closing while ensuring
          expectations remain aligned.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="fit-section">

  <div className="fit-container">

    <p className="section-label">
      CLIENT FIT
    </p>

    <h2 className="fit-heading">
      Who MGT Estates Works Best With
    </h2>

    <div className="fit-grid">

      <div className="fit-card">

        <h3>
          Clients Seeking Representation,
          Not Pressure
        </h3>

        <p>
          MGT Estates is designed for clients who
          value informed guidance, clear communication,
          and disciplined execution over transactional
          sales tactics.
        </p>

      </div>

      <div className="fit-card">

        <h3>
          Buyers & Sellers Who Prioritize Strategy
        </h3>

        <p>
          The advisory process is best suited for
          clients who appreciate preparation,
          market positioning, and long-term
          decision quality.
        </p>

      </div>

    </div>

  </div>

</section>
<section className="cta-section">

  <div className="cta-container">

    <p className="section-label">
      CONSULTATION
    </p>

    <h2 className="cta-heading">
      Schedule A Private Consultation
    </h2>

    <p className="cta-copy">
      Whether buying, selling, or planning a future move,
      the first step is a focused conversation centered
      around your objectives, timeline, and market position.
    </p>

    <a href="#" className="btn-primary">
      Book A Consultation
    </a>

  </div>

</section>
<footer className="footer">

  <div className="footer-container">

    <div className="footer-brand">

      <h3>MGT Estates</h3>

      <p>
        Luxury Representation Without Compromise.
      </p>

    </div>

    <div className="footer-links">

      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">How I Work</a>
      <a href="#">Homes</a>
      <a href="#">Consultation</a>

    </div>

  </div>

  <div className="footer-divider"></div>

  <div className="footer-bottom">

    <div>
      Michael Thomson | Real Broker, LLC
    </div>

    <div>
      Serving The Woodlands, Conroe, Kingwood & Montgomery County
    </div>

    <div>
      © 2026 MGT Estates. All Rights Reserved.
    </div>

  </div>

</footer>
    </>
  );
}