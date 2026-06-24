export default function Home() {
  return (
    <>
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
            Strategic real estate advisory for buyers, sellers, investors, and relocating professionals throughout The Woodlands and Montgomery County.
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
        src="/images/michael-thomson.jpg"
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
        Helping clients make high-conviction real estate decisions through preparation, analysis, and disciplined execution.
      </p>

      <a href="#" className="btn-primary">
        Learn More
      </a>

    </div>

  </div>
</section>
<div className="section-divider"></div>
<section className="process-section">

  <div className="process-container">

    <p className="section-label">
      HOW I WORK
    </p>

    <h2 className="process-heading">
      A Structured Approach To Real Estate Advisory
    </h2>

    <p className="process-intro">
      Consultation → Strategy → Execution → Close
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
<div className="section-divider"></div>
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
        <h3>Strategic Buyers</h3>
      </div>

      <div className="fit-card">
        <h3>Strategic Sellers</h3>
      </div>

      <div className="fit-card">
        <h3>Relocation Clients</h3>
      </div>

      <div className="fit-card">
        <h3>Investors</h3>
      </div>

      <div className="fit-card">
        <h3>Private Clients</h3>
      </div>

    </div>

  </div>

</section>
<div className="section-divider"></div>
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
    </>
  );
}