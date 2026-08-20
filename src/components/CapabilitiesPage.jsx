const CAPABILITIES = [
  {
    n: '01',
    world: 'STRATEGY',
    title: 'Strategy',
    problem: 'Most brands produce content without knowing what they\'re trying to say or who they\'re trying to reach. The result is noise — not brand equity.',
    desc: 'We begin every engagement with strategy. Brand positioning, audience mapping, content strategy, digital presence audits — the thinking that makes everything else work.',
    services: [
      'Brand Positioning',
      'Institutional Identity Strategy',
      'Content Strategy',
      'Digital Presence Strategy',
      'Competitor Analysis',
      'Admission Growth Strategy',
      'Audience Research',
      'Campaign Planning',
    ],
    cta: 'PLAN OUR STRATEGY →',
  },
  {
    n: '02',
    world: 'CREATIVE',
    title: 'Creative',
    problem: 'The internet doesn\'t need more content. It needs better ideas. Execution without a creative idea produces content that is ignored.',
    desc: 'Creative direction turns a brief into a concept. A concept into a story. A story into something people actually remember. Every project we take starts with a creative idea — not a template.',
    services: [
      'Creative Direction',
      'Campaign Concept Development',
      'Brand Storytelling',
      'Social Content Concepting',
      'Visual Identity Direction',
      'Script & Narrative Writing',
      'Art Direction',
      'Storyboarding',
    ],
    cta: 'DISCUSS A CREATIVE BRIEF →',
  },
  {
    n: '03',
    world: 'PRODUCTION',
    title: 'Production',
    problem: 'A brief without production is just a document. The camera is how ideas become experiences that move people.',
    desc: 'We operate as a production partner — not just a content vendor. Cinematography, photography, editing, colour grading, sound design — built to a production standard that makes your brand look exceptional.',
    services: [
      'Brand Films & Institutional Films',
      'Commercial Videos',
      'Campus Films & Student Stories',
      'Event Coverage & Aftermovies',
      'Sports Films',
      'Leadership & Interview Films',
      'Social Reels & Short-Form',
      'Editorial Photography',
    ],
    cta: 'PLAN A PRODUCTION →',
  },
  {
    n: '04',
    world: 'DIGITAL',
    title: 'Digital',
    problem: 'Great content that reaches no one is wasted production. The digital layer ensures your work finds the right people at the right time.',
    desc: 'From website design to Meta Ads, from Google presence to social media management — we build the digital infrastructure that turns creative work into measurable outcomes.',
    services: [
      'Website Design & Development',
      'Social Media Management',
      'Meta Ads (Facebook + Instagram)',
      'Google Search & Display Ads',
      'Performance Creative',
      'Google Business Profile',
      'SEO for Brand & Education',
      'WhatsApp Lead Funnels',
    ],
    cta: 'BUILD OUR DIGITAL PRESENCE →',
  },
];

export default function CapabilitiesPage({ setPage }) {
  return (
    <div className="cap-page-shell">
      {/* Hero */}
      <div className="cap-page-hero">
        <p className="t-eyebrow light" style={{ marginBottom: 20 }}>CAPABILITIES</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 7vw, 88px)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.04,
          letterSpacing: '-.025em',
          marginBottom: 24,
          maxWidth: 800,
        }}>
          Four worlds.<br />
          <span style={{ fontStyle: 'italic', color: 'var(--olive-warm)' }}>One partner.</span>
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.4)', maxWidth: 540, lineHeight: 1.75 }}>
          We don't sell individual services. We build complete creative ecosystems — 
          across strategy, creative, production and digital.
        </p>
      </div>

      {/* Capability worlds */}
      {CAPABILITIES.map((cap, i) => (
        <div key={cap.n} className="capability-world" style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--canvas)' }}>
          <div className="cap-layout">
            {/* Sidebar */}
            <div className="cap-sidebar">
              <div className="cap-num">{cap.n}</div>
              <div className="cap-world-label">{cap.world}</div>
            </div>

            {/* Body */}
            <div className="cap-body">
              <h2>{cap.title}</h2>
              <p className="cap-problem">{cap.problem}</p>
              <p className="cap-desc">{cap.desc}</p>
              <div className="cap-services">
                {cap.services.map((s) => (
                  <div key={s} className="cap-service">
                    <span className="cap-service-dot" />
                    {s}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <button
                  className={`btn ${i < 2 ? 'btn-primary' : 'btn-olive'}`}
                  onClick={() => setPage('contact')}
                >
                  {cap.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 28 }}>START A PROJECT</p>
          <h2>
            Not sure where<br />
            <em>to begin?</em>
          </h2>
          <p>Book a free 30-minute strategy session. We'll identify where to start and what's possible.</p>
          <div className="final-cta-btns">
            <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
              BOOK A CONSULTATION →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              VIEW THE WORK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
