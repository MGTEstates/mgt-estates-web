import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How I Work",
  description:
    "See the structured advisory process MGT Estates uses to guide buyers, sellers, investors, and relocation clients.",
  path: "/how-i-work",
});

export default function HowIWorkPage() {
  return (
    <main className="how-i-work-page">
      <section className="hiw-hero">
        <div className="hiw-hero-copy">
          <p className="section-label">METHODOLOGY</p>
          <h1>Every Decision Begins With Strategy.</h1>
          <p>
            Every engagement begins by understanding objectives, financial
            considerations, market timing, and long-term outcomes before any
            property is discussed. This is advisory work built on preparation,
            cautious insight, and disciplined execution.
          </p>
        </div>
      </section>

      <section className="hiw-philosophy">
        <div className="hiw-philosophy-grid">
          <article className="hiw-philosophy-block">
            <h2>Preparation</h2>
            <p>
              Research before recommendations, so every path is shaped by what is
              known, not what is hoped for.
            </p>
          </article>

          <article className="hiw-philosophy-block">
            <h2>Strategy</h2>
            <p>
              Objectives before properties, aligning the process to long-term
              outcomes instead of immediate activity.
            </p>
          </article>

          <article className="hiw-philosophy-block">
            <h2>Execution</h2>
            <p>
              Precision over pressure, carrying each decision from insight to
              conclusion with careful communication and rigorous follow-through.
            </p>
          </article>
        </div>
      </section>

      <section className="hiw-process">
        <div className="hiw-section-intro">
          <p className="section-label">PROCESS</p>
          <h2>The Advisory Process</h2>
          <p>
            The process is designed to remove uncertainty and ensure a deliberate,
            strategic path from first conversation to a confident conclusion.
          </p>
        </div>

        <div className="hiw-process-steps">
          <article className="hiw-process-step">
            <span className="hiw-step-number">01</span>
            <div>
              <h3>Understand</h3>
              <p>
                We listen. Goals, timing, financial considerations, priorities,
                and long-term objectives are weighed before a single option is
                considered.
              </p>
            </div>
          </article>

          <article className="hiw-process-step">
            <span className="hiw-step-number">02</span>
            <div>
              <h3>Develop Strategy</h3>
              <p>
                Strategy is crafted from market analysis, pricing posture,
                negotiation preparation, financing coordination, and an
                acquisition or listing plan aligned with the client’s horizon.
              </p>
            </div>
          </article>

          <article className="hiw-process-step">
            <span className="hiw-step-number">03</span>
            <div>
              <h3>Execute</h3>
              <p>
                The execution phase is managed with care: search, marketing,
                negotiations, inspections, contracts, and consistent
                communication throughout the transaction.
              </p>
            </div>
          </article>

          <article className="hiw-process-step">
            <span className="hiw-step-number">04</span>
            <div>
              <h3>Protect</h3>
              <p>
                Closing coordination, post-closing guidance, trusted vendor
                referrals, and future planning ensure the value of the decision
                is preserved over time.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="hiw-expectations">
        <div className="hiw-section-intro">
          <p className="section-label">EXPECTATIONS</p>
          <h2>What Clients Can Expect</h2>
        </div>

        <div className="hiw-expectations-grid">
          <div className="hiw-expectation-item">
            <h3>Clear Communication</h3>
          </div>
          <div className="hiw-expectation-item">
            <h3>Honest Advice</h3>
          </div>
          <div className="hiw-expectation-item">
            <h3>Professional Discretion</h3>
          </div>
          <div className="hiw-expectation-item">
            <h3>Strategic Thinking</h3>
          </div>
          <div className="hiw-expectation-item">
            <h3>Organized Execution</h3>
          </div>
          <div className="hiw-expectation-item">
            <h3>Long-Term Perspective</h3>
          </div>
        </div>
      </section>

      <section className="hiw-why">
        <div className="hiw-why-copy">
          <p className="section-label">PHILOSOPHY</p>
          <h2>Why This Process Works</h2>
          <p>
            The best real estate outcomes rarely happen by accident. They come
            from preparation, informed decisions, disciplined execution, and
            clear communication.
          </p>
        </div>
      </section>

      <section className="hiw-final-cta">
        <div className="hiw-final-copy">
          <h2>Start With Strategy.</h2>
          <p>
            Buyers, sellers, investors, and relocation clients begin with a
            private consultation focused on objectives rather than transactions.
          </p>
          <a href="/consultation" className="btn-primary">Schedule A Strategy Consultation</a>
        </div>
      </section>
    </main>
  );
}
