export default function ConsultationPage() {
  return (
    <>
      <section className="consultation-hero">
        <div className="section-label">
          PRIVATE CONSULTATION
        </div>

        <h1 className="hero-title">
          Strategic Real Estate Guidance.
        </h1>

        <p>
          Whether you are purchasing a primary residence,
          evaluating an investment opportunity, or preparing
          a property for sale, every engagement begins with
          a focused consultation.
        </p>

        <a href="#" className="btn-primary">
          Schedule Consultation
        </a>
      </section>

      <section className="consultation-expect">
        <h2 className="process-heading">
          What To Expect
        </h2>

        <div className="three-column-grid">

          <div>
            <h3>Discovery</h3>
            <p>
              We discuss your goals, timeline, priorities,
              and any challenges that may affect the process.
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              I provide recommendations based on market
              conditions, property characteristics, and
              your specific objectives.
            </p>
          </div>

          <div>
            <h3>Execution Plan</h3>
            <p>
              You leave with a clear understanding of next
              steps and whether working together is the
              right fit.
            </p>
          </div>

        </div>
      </section>

      <section className="consultation-clients">
        <h2 className="process-heading">
          Who This Is For
        </h2>

        <ul>
          <li>Luxury Home Buyers</li>
          <li>Home Sellers</li>
          <li>Relocation Clients</li>
          <li>Investors</li>
          <li>First-Time Luxury Buyers</li>
        </ul>
      </section>

      <section className="consultation-cta">
        <div className="consultation-contact">
          <h3>Schedule a Consultation</h3>
          <p>
            If you prefer to speak directly, call: <a href="tel:+18324034664">(832) 403-4664</a>
            or complete the inquiry form below.
          </p>
        </div>

        <h2 className="cta-heading">
          Begin The Conversation.
        </h2>

        <p>
          Schedule a private consultation and receive
          strategic guidance tailored to your goals.
        </p>

        <a href="#" className="btn-primary">
          Book Consultation
        </a>
      </section>
    </>
  );
}