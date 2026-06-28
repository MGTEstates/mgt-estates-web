import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Homes",
  description:
    "Strategic home buying guidance for clients who want better timing, positioning, and negotiation outcomes in Montgomery County.",
  path: "/homes",
});

export default function HomesPage() {
  return (
    <main className="homes-page">
      <section className="homes-hero">
        <div className="homes-hero-copy">
          <p className="section-label">ACQUISITION</p>
          <h1>Exceptional Homes Are Acquired, Not Found.</h1>
          <p>
            The strongest opportunities rarely come from simply browsing
            listings. Successful acquisitions begin with preparation, market
            intelligence, relationships, negotiation strategy, and disciplined
            execution.
          </p>
          <a href="/consultation" className="btn-primary">Schedule A Private Consultation</a>
        </div>
      </section>

      <section className="homes-missed-opportunities">
        <div className="homes-section-copy">
          <p className="section-label">INSIGHT</p>
          <h2>Why Most Buyers Miss Opportunities</h2>
          <p>
            Too often buyers react to what appears in the market instead of
            defining what matters first. That leaves them shopping emotionally,
            competing after demand develops, and evaluating properties before
            objectives are clear.
          </p>
        </div>
        <div className="homes-missed-list">
          <p>Many buyers:</p>
          <ul>
            <li>React to listings</li>
            <li>Shop emotionally</li>
            <li>Compete after demand develops</li>
            <li>Focus on properties before defining objectives</li>
          </ul>
        </div>
      </section>

      <section className="homes-philosophy">
        <div className="homes-section-copy">
          <p className="section-label">PHILOSOPHY</p>
          <h2>The Acquisition Philosophy</h2>
        </div>
        <div className="homes-philosophy-grid">
          <article>
            <h3>Timing</h3>
            <p>
              Buying well matters more than buying quickly. The strongest
              decisions are made from a position of readiness, not reaction.
            </p>
          </article>
          <article>
            <h3>Positioning</h3>
            <p>
              Strong acquisitions begin before offers are written. Preparation
              and context create the conditions for meaningful opportunity.
            </p>
          </article>
          <article>
            <h3>Access</h3>
            <p>
              Meaningful opportunities come through preparation, relationships,
              market awareness, and consistent monitoring—not simply refreshing
              listing websites.
            </p>
          </article>
        </div>
      </section>

      <section className="homes-comparison">
        <div className="homes-section-copy">
          <p className="section-label">APPROACH</p>
          <h2>Traditional Search vs Strategic Acquisition</h2>
        </div>
        <div className="homes-comparison-grid">
          <article>
            <h3>Traditional Home Search</h3>
            <ul>
              <li>Browse listings</li>
              <li>React to inventory</li>
              <li>Compete with everyone</li>
              <li>Limited leverage</li>
              <li>Transaction focused</li>
            </ul>
          </article>
          <article>
            <h3>Strategic Acquisition</h3>
            <ul>
              <li>Objectives first</li>
              <li>Market intelligence</li>
              <li>Timing analysis</li>
              <li>Relationship-driven opportunities</li>
              <li>Negotiation planning</li>
              <li>Long-term decision making</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="homes-receive">
        <div className="homes-section-copy">
          <p className="section-label">DELIVERABLES</p>
          <h2>What Clients Receive</h2>
        </div>
        <div className="homes-receive-grid">
          <article>
            <h3>Strategic Guidance</h3>
            <p>
              Advisory counsel that keeps objectives and timing at the center of
              every decision.
            </p>
          </article>
          <article>
            <h3>Market Intelligence</h3>
            <p>
              Ongoing insight into local activity, pricing trends, and relevant
              opportunity sets.
            </p>
          </article>
          <article>
            <h3>Negotiation Leadership</h3>
            <p>
              Prepared positioning and disciplined advocacy designed to improve
              long-term outcomes.
            </p>
          </article>
        </div>
      </section>

      <section className="homes-better">
        <div className="homes-better-copy">
          <p className="section-label">PRINCIPLE</p>
          <h2>Better Decisions Create Better Outcomes</h2>
          <p>
            Preparation creates leverage. Leverage improves negotiation. Better
            decisions create better long-term outcomes.
          </p>
        </div>
      </section>

      <section className="homes-audience">
        <div className="homes-section-copy">
          <p className="section-label">AUDIENCE</p>
          <h2>Who This Is For</h2>
        </div>
        <div className="homes-audience-grid">
          <article>
            <h3>Strategic Buyers</h3>
          </article>
          <article>
            <h3>Professionals Relocating</h3>
          </article>
          <article>
            <h3>Growing Families</h3>
          </article>
          <article>
            <h3>Long-Term Investors</h3>
          </article>
        </div>
      </section>

      <section className="homes-final-cta">
        <div className="homes-final-copy">
          <h2>Start Before The Right Property Appears.</h2>
          <p>
            The best acquisitions begin long before an offer is written.
            Schedule a private consultation to define your objectives, evaluate
            timing, and build a strategy before the right opportunity appears.
          </p>
          <a href="/consultation" className="btn-primary">Schedule A Private Consultation</a>
        </div>
      </section>
    </main>
  );
}
