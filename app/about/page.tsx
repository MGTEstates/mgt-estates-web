import Image from "next/image";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Michael Thomson",
  description:
    "Learn how MGT Estates supports buyers, sellers, and investors with preparation, discretion, and disciplined execution.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">

        <div className="about-hero-container">

          <p className="section-label">
            ABOUT
          </p>

          <h1 className="about-hero-title">
            Representation
            <br />
            Built On
            <br />
            Preparation.
          </h1>

          <p className="about-hero-copy">
            Every client deserves disciplined guidance,
            thoughtful communication, and representation
            focused on long-term outcomes rather than
            short-term transactions.
          </p>

        </div>

      </section>
      <section className="about-story">

  <div className="about-story-grid">

    <div className="about-story-image">

      <Image
        src="/images/michael-thomson.jpg"
        alt="Michael Thomson"
        width={2048}
        height={1638}
        sizes="(max-width: 768px) 100vw, 520px"
      />

    </div>

    <div className="about-story-content">

      <p className="section-label">
        WHO I AM
      </p>

      <h2>
        Michael Thomson
      </h2>

      <p>
        I founded MGT Estates with a simple belief:
        buying or selling real estate deserves more
        than a transaction—it deserves thoughtful
        representation.
      </p>

      <p>
        My background in luxury sales taught me that
        exceptional service is defined by preparation,
        clarity, and disciplined execution—not by
        pressure or persuasion.
      </p>

      <p>
        Today, I bring that approach to buyers,
        sellers, and investors throughout Montgomery
        County and Greater Houston.
      </p>

    </div>

  </div>

</section>

<section className="about-purpose">
  <div className="about-purpose-copy">
    <p className="section-label">PHILOSOPHY</p>
    <h2>Why MGT Estates Exists</h2>
    <p>
      Real estate deserves disciplined preparation,
      objective advice, and long-term thinking—not
      sales tactics. MGT Estates was founded to make
      advisory work feel more like private wealth counsel
      than a marketing exercise.
    </p>
    <p>
      Every recommendation begins with a horizon of
      five, ten, or fifteen years. That perspective shapes
      the questions we ask, the properties we consider,
      and the outcomes we aim to deliver.
    </p>
  </div>
</section>

<section className="about-strategy">
  <div className="about-strategy-grid">

    <div>
      <p className="section-label">STRATEGY</p>
      <h2>Real Estate Is Strategy,
      <br />
      Not Sales.</h2>
    </div>

    <div>
      <p>
        Every property decision carries financial, legal, and personal consequences.
      </p>

      <p>
        My role is not to persuade clients into transactions. It is to help clients make informed decisions with clarity, confidence, and long-term perspective.
      </p>

      <p>
        Whether purchasing a first home, selling an established property, relocating to Montgomery County, or evaluating an investment opportunity, every recommendation begins with understanding objectives before discussing properties.
      </p>
    </div>

  </div>
</section>

<section className="about-standards">
  <div className="about-standards-grid">

    <div className="standard-block">
      <h3>Precision Over Volume</h3>
      <p>I intentionally work with a limited number of clients at any given time so every search, negotiation, and recommendation receives the attention it deserves.</p>
      <p>Every decision is deliberate. Every detail matters.</p>
    </div>

    <div className="standard-block">
      <h3>Discretion & Trust</h3>
      <p>Real estate often involves private financial decisions and important life transitions.</p>
      <p>Every client relationship is handled with professionalism, discretion, and complete confidentiality.</p>
    </div>

    <div className="standard-block">
      <h3>Long-Term Perspective</h3>
      <p>A successful transaction should create value long after closing.</p>
      <p>Every recommendation considers leverage, timing, negotiation, and future flexibility.</p>
    </div>

  </div>
</section>

<section className="about-process">
  <div className="about-process-copy">
    <p className="section-label">PROCESS</p>
    <h2>The Advisory Process</h2>
  </div>

  <div className="process-timeline">

    <article className="process-step">
      <div className="process-step-number">01</div>
      <div>
        <h3>Understand</h3>
        <p>We begin by clarifying what matters most: objectives, timing, and non-negotiables. A precise understanding of priorities forms the foundation for every recommendation.</p>
      </div>
    </article>

    <article className="process-step">
      <div className="process-step-number">02</div>
      <div>
        <h3>Develop Strategy</h3>
        <p>We translate goals into a bespoke plan that balances market insight with personal context, negotiating posture, and long-term value.</p>
      </div>
    </article>

    <article className="process-step">
      <div className="process-step-number">03</div>
      <div>
        <h3>Execute</h3>
        <p>Every step is guided by rigorous preparation and thoughtful communication, from search and marketing through offers, negotiation, and closing.</p>
      </div>
    </article>

    <article className="process-step">
      <div className="process-step-number">04</div>
      <div>
        <h3>Support Beyond Closing</h3>
        <p>Advisory work does not end at closing. We remain available to help clients settle confidently, protect value, and prepare for what comes next.</p>
      </div>
    </article>

  </div>
</section>

<section className="about-fit">
  <div className="about-fit-header">
    <p className="section-label">CLIENTS</p>
    <h2>Who I Work Best With</h2>
  </div>

  <div className="about-fit-grid">
    <article className="about-fit-card">
      <h3>Clients who value counsel</h3>
      <p>Individuals who want recommendations rooted in clarity, discipline, and a long-term view.</p>
    </article>

    <article className="about-fit-card">
      <h3>Owners focused on positioning</h3>
      <p>Those who understand that a strong outcome begins with thoughtful timing and negotiation.</p>
    </article>

    <article className="about-fit-card">
      <h3>Relocation clients</h3>
      <p>Professionals moving to Montgomery County who appreciate local perspective and a steady process.</p>
    </article>

    <article className="about-fit-card">
      <h3>Long-term investors</h3>
      <p>Clients evaluating property through the lens of sustained financial value rather than immediate activity.</p>
    </article>

    <article className="about-fit-card">
      <h3>Discerning households</h3>
      <p>People seeking privacy, discretion, and an elevated advisory experience.</p>
    </article>
  </div>
</section>

<section className="about-final">
  <div className="about-final-copy">
    <h2>Begin with clarity.</h2>
    <p>Every strong real estate decision starts with a private conversation, disciplined thinking, and an intentional process.</p>
    <p>Let’s discuss the path forward and build an approach that feels purposeful, thoughtful, and enduring.</p>
    <a href="/consultation" className="btn-primary">Start the conversation</a>
  </div>
</section>
    </>
  );
}