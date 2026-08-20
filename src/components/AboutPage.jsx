export default function AboutPage({ setPage }) {
  return (
    <div className="about-shell">
      {/* Hero */}
      <div className="about-hero">
        <p className="t-eyebrow light" style={{ marginBottom: 20 }}>ABOUT 3DOTCREATIVES</p>
        <h1>
          We exist to make<br />
          <em>brands and institutions</em><br />
          impossible to ignore.
        </h1>
        <p style={{ marginTop: 24 }}>
          We are not a social media agency. We are a creative, production and digital studio — 
          built for brands and institutions that believe their story deserves to be told properly.
        </p>
      </div>

      {/* Philosophy */}
      <div className="manifesto-block">
        <p className="t-eyebrow" style={{ marginBottom: 28 }}>OUR MANIFESTO</p>
        <blockquote className="manifesto-quote">
          "The internet doesn't need more content. It needs better ideas, 
          produced beautifully, distributed purposefully. That's the only kind of work we do."
        </blockquote>
      </div>

      {/* What we believe */}
      <section style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--canvas)' }}>
        <p className="t-eyebrow" style={{ marginBottom: 24 }}>WHAT WE BELIEVE</p>
        <h2 className="t-h2" style={{ maxWidth: 560, marginBottom: 56 }}>
          Six things we know<br />to be true.
        </h2>

        <div className="beliefs-grid">
          {[
            { title: 'Strategy before execution.',          body: 'A camera without a brief is a waste of a day. We think before we shoot, plan before we post, and position before we produce.' },
            { title: 'Production quality is a brand signal.', body: 'How something looks communicates what you think of your audience. Cheap production signals a cheap brand. We don\'t do cheap.' },
            { title: 'Education deserves better storytelling.', body: 'Schools and colleges have more genuine human stories than almost any other sector. Most of them are invisible online. That\'s the problem we solve.' },
            { title: 'Events are content machines.',         body: 'One annual function. One sports day. One college fest. Done right, it generates months of content. Done wrong, it\'s just a video nobody watches.' },
            { title: 'Results matter more than reach.',      body: 'We don\'t optimise for impressions. We optimise for enquiries, campus visits, admissions, leads and brand recall — outcomes that actually matter.' },
            { title: 'We only take work we can do well.',    body: 'We don\'t take every client. We take the ones we can genuinely grow. If we\'re not the right fit for your brief, we\'ll tell you honestly.' },
          ].map((item) => (
            <div key={item.title} className="belief-item">
              <div style={{ width: 28, height: 2, background: 'var(--olive)', marginBottom: 18 }} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating model */}
      <section style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <p className="t-eyebrow" style={{ marginBottom: 24 }}>HOW WE WORK</p>
        <h2 className="t-h2" style={{ maxWidth: 560, marginBottom: 16 }}>
          From strategy to screen —<br />one partner.
        </h2>
        <p className="t-body" style={{ maxWidth: 540, marginBottom: 56 }}>
          We don't do handoffs. You work with one team, one point of contact, one cohesive creative vision — 
          from the initial strategy session to the final social post.
        </p>

        <div className="model-steps">
          {[
            { n: '01', title: 'Discover',    body: 'Brand audit, competitive research, audience mapping, digital presence review.' },
            { n: '02', title: 'Strategise',  body: 'Positioning, content strategy, creative direction, campaign planning.' },
            { n: '03', title: 'Create',      body: 'Production, filming, photography, editing, design, copywriting.' },
            { n: '04', title: 'Distribute',  body: 'Social media, ads, SEO, website, digital infrastructure.' },
            { n: '05', title: 'Grow',        body: 'Analytics, reporting, campaign refinement, ongoing optimisation.' },
          ].map((step) => (
            <div key={step.n} className="model-step">
              <div className="model-step-num">PHASE {step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--canvas)', borderTop: '1px solid var(--border)' }}>
        <p className="t-eyebrow" style={{ marginBottom: 24 }}>WHO WE WORK WITH</p>
        <h2 className="t-h2" style={{ maxWidth: 560, marginBottom: 48 }}>
          Institutions and brands<br />that want to grow.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
          {[
            'K–12 Schools', 'Degree Colleges', 'Universities', 'Engineering Institutes',
            'Management Institutes', 'Boarding Schools', 'International Schools', 'Coaching Institutes',
            'Hotels & Resorts', 'Lifestyle Brands', 'Real Estate Developers', 'Founders & Leaders',
          ].map((type) => (
            <div key={type} style={{ padding: '16px 18px', border: '1px solid var(--border)', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-mid)', fontWeight: 500 }}>
              <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--olive)', flexShrink: 0 }} />
              {type}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 28 }}>START A PARTNERSHIP</p>
          <h2>
            If you think your brand<br />
            deserves <em>better</em> — let's talk.
          </h2>
          <p>
            A 30-minute conversation. No pitch decks. Just honest talk about your brand and what we can build together.
          </p>
          <div className="final-cta-btns">
            <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
              START A CONVERSATION →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              FIRST, SEE THE WORK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
