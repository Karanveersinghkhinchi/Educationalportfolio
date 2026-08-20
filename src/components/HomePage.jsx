import { useEffect, useRef } from 'react';
import ReelWall from './ReelWall';
import { FEATURED_FILM, cldPoster } from '../data/cloudinary';
import { gsap, ScrollTrigger } from '../utils/scroll';
import { magneticEffect } from '../utils/animations';

const SERVICES = [
  { n: '01', world: 'STRATEGY',   title: 'Strategy',   desc: 'Brand positioning, content strategy, admission growth, digital strategy.' },
  { n: '02', world: 'CREATIVE',   title: 'Creative',   desc: 'Creative direction, campaign concepts, storytelling, identity.' },
  { n: '03', world: 'PRODUCTION', title: 'Production', desc: 'Films, commercials, photography, events, reels, documentaries.' },
  { n: '04', world: 'DIGITAL',    title: 'Digital',    desc: 'Websites, social media, performance ads, digital experiences.' },
];

const MODEL_STEPS = [
  { n: '01', title: 'Discover',   body: 'Audit your brand, audience, competition and digital presence.' },
  { n: '02', title: 'Strategise', body: 'Define positioning, content strategy and creative direction.' },
  { n: '03', title: 'Create',     body: 'Produce films, content, campaigns and brand experiences.' },
  { n: '04', title: 'Distribute', body: 'Social, digital, ads and targeted distribution systems.' },
  { n: '05', title: 'Grow',       body: 'Measure outcomes, refine systems, scale what works.' },
];

const WHY = [
  { n: '01', title: 'Production-led thinking.', body: 'Every brief starts with the question: what story are we telling? Strategy informs the camera — never the other way around.' },
  { n: '02', title: 'One partner. Complete ecosystem.', body: 'From brand strategy to campus films to performance ads — one team holds the whole picture. No briefing five agencies.' },
  { n: '03', title: 'Events become content machines.', body: 'One annual function. Months of social content. We build the system that makes every institutional moment earn its keep digitally.' },
  { n: '04', title: 'Education-first understanding.', body: 'We understand the parent journey, the admission cycle, the faculty story and the campus culture — because education is our primary vertical.' },
  { n: '05', title: 'Real work. Verified outcomes.', body: 'We don\'t show stock footage or fake case studies. Every project is real. Every claim is verifiable.' },
];

const MARQUEE_ITEMS = [
  'BRAND FILMS', 'CAMPUS STORIES', 'ANNUAL FUNCTIONS', 'SPORTS EVENTS',
  'STUDENT LIFE', 'LEADERSHIP FILMS', 'SOCIAL CONTENT', 'EVENT AFTERMOVIES',
  'PHOTOGRAPHY', 'DIGITAL CAMPAIGNS', 'ADMISSION GROWTH', 'PARENT TESTIMONIALS',
];

/* ─── Split text into animated word spans ─── */
function splitWords(text) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="split-line" style={{ display: 'inline-block', overflow: 'hidden', marginRight: '.25em' }}>
      <span className="word">{w}</span>
    </span>
  ));
}

/* ─── Checkmark SVG ─── */
const CheckIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.4" />
    <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage({ setPage, onPlay }) {
  const heroTitleRef = useRef(null);
  const heroSubRef   = useRef(null);
  const ctaRef       = useRef(null);

  useEffect(() => {
    // Hero word reveal
    const words = heroTitleRef.current?.querySelectorAll('.word');
    if (words?.length) {
      gsap.fromTo(words,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: .9, ease: 'power4.out', stagger: .065, delay: .3 }
      );
    }

    // Hero sub + actions fade
    gsap.fromTo([heroSubRef.current, ctaRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: .7, ease: 'power3.out', stagger: .12, delay: .9 }
    );

    // ScrollTrigger reveals
    const revealEls = document.querySelectorAll('.js-reveal');
    revealEls.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: .75, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true }
        }
      );
    });

    // Magnetic CTAs
    const magnetics = document.querySelectorAll('.js-magnetic');
    const cleanups = [...magnetics].map(magneticEffect);

    return () => {
      cleanups.forEach((fn) => fn && fn());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleReelWallPlay = (arg) => {
    if (typeof arg === 'object' && arg?.id) {
      onPlay(arg);
    } else if (arg === 'work') {
      setPage('work');
    }
  };

  return (
    <>
      {/* ─── 01 HERO ─── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-video-wrap">
          <img
            src={cldPoster('Sss_Final', 1600)}
            alt="Campus life — cinematic campus film still"
          />
        </div>
        <div className="hero-gradient" />

        <div className="hero-body">
          <p className="t-eyebrow light" style={{ marginBottom: 24 }}>
            STRATEGY · CREATIVE · PRODUCTION · DIGITAL
          </p>

          <h1 className="hero-title" ref={heroTitleRef}>
            {splitWords('We Build How')}
            <br />
            <em>
              {splitWords('Brands and Institutions')}
            </em>
            <br />
            {splitWords('Are Perceived.')}
          </h1>

          <p className="hero-sub" ref={heroSubRef}>
            Campus films, annual functions, brand campaigns, social content
            — one complete creative partner for institutions and brands.
          </p>

          <div className="hero-actions" ref={ctaRef}>
            <button className="btn btn-olive btn-lg js-magnetic" onClick={() => setPage('contact')}>
              START A PROJECT →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              VIEW THE WORK
            </button>
          </div>

          {/* ─── Credibility stats — qualitative differentiators ─── */}
          <div className="stat-bar">
            <div className="stat-item">
              <div className="stat-number">K–12</div>
              <div className="stat-label">Education Specialist</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Stock Footage, Ever</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Full</div>
              <div className="stat-label">Strategy to Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">One</div>
              <div className="stat-label">Complete Creative Partner</div>
            </div>
          </div>
        </div>

        <p className="hero-scroll-hint" aria-hidden="true">SCROLL</p>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item} &nbsp;&nbsp;·&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* ─── 02 STATEMENT — WHITE CANVAS ─── */}
      <section className="statement-section js-reveal">
        <p className="t-eyebrow" style={{ marginBottom: 32 }}>WHO WE ARE</p>
        <p className="statement-text">
          Most agencies create content. We create{' '}
          <em>content ecosystems</em> — built around a strategic idea,
          expressed through cinematic production, and designed to move
          people from discovery to decision.
        </p>
        <div className="statement-meta">
          {['Strategy-First Approach', 'Production-Led Thinking', 'Outcomes Over Vanity'].map((pill) => (
            <span key={pill} className="statement-pill">{pill}</span>
          ))}
        </div>
      </section>

      {/* ─── 03 REEL WALL — DARK STAGE ─── */}
      <ReelWall onPlay={handleReelWallPlay} />

      {/* ─── 04 WHAT WE CREATE — WHITE ─── */}
      <section className="section section-white" id="services-overview">
        <div className="section-head js-reveal">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>WHAT WE CREATE</p>
          <h2 className="t-h2" style={{ maxWidth: 600 }}>
            Four capabilities.<br />One creative partner.
          </h2>
        </div>

        <div className="services-grid js-reveal">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="service-item"
              onClick={() => setPage('capabilities')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setPage('capabilities')}
            >
              <div className="service-item-num">{s.n}</div>
              <div className="service-item-world">{s.world}</div>
              <h3 className="service-item">{s.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 52, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setPage('capabilities')}>EXPLORE CAPABILITIES →</button>
          <button className="btn btn-outline" onClick={() => setPage('production')}>VIEW PRODUCTION WORK</button>
        </div>
      </section>

      {/* ─── 05 FEATURED PROJECT — DARK ─── */}
      <section className="featured-project">
        <div className="featured-video-bg">
          <img src={FEATURED_FILM.poster} alt="" aria-hidden="true" />
          <div className="featured-video-bg-overlay" />
        </div>

        <div className="featured-project-body">
          <div className="featured-grid">
            {/* Left — Info */}
            <div>
              <div className="featured-label">
                <p className="t-eyebrow light">FEATURED CASE STUDY</p>
              </div>
              <h2 className="featured-title js-reveal">
                <em>A Day</em> at a<br />K–12 Institution.
              </h2>
              <p className="featured-desc js-reveal">
                A cinematic portrait of campus life. Shot inside a real campus.
                No actors. No scripts. Real students, real teachers, real moments.
              </p>

              <div className="featured-steps">
                {[
                  { n: 'CHALLENGE',   h: 'Strong campus. Invisible online.', p: 'A well-established residential school with genuine strengths — but no content that made parents feel what it was like to actually be there.' },
                  { n: 'THINKING',    h: 'Go inside.', p: 'Parents don\'t choose schools from brochures. They need to feel the campus before they visit. We made that feeling possible through film.' },
                  { n: 'PRODUCTION',  h: 'Real campus. Real people.', p: 'Multi-day campus shoot. Students in class, on the sports field, in the corridors. Teachers in their element. Unscripted.' },
                  { n: 'OUTPUT',      h: 'One film. Multiple assets.', p: 'Institutional brand film + student reels + sports content + social library. One shoot. Months of content.' },
                ].map((step) => (
                  <div key={step.n} className="featured-step">
                    <div className="featured-step-num">{step.n}</div>
                    <div>
                      <h4>{step.h}</h4>
                      <p>{step.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Video */}
            <div>
              <div className="featured-thumb-wrap js-reveal" onClick={() => onPlay(FEATURED_FILM)}>
                <img src={FEATURED_FILM.poster} alt={FEATURED_FILM.title} />
                <div className="featured-thumb-overlay">
                  <div className="featured-play-btn">
                    <div className="featured-play-icon" />
                  </div>
                </div>
              </div>

              <div className="featured-deliverables">
                {FEATURED_FILM.deliverables.map((d) => (
                  <span key={d} className="deliverable-tag">{d}</span>
                ))}
              </div>

              <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button className="btn btn-olive" onClick={() => onPlay(FEATURED_FILM)}>
                  WATCH THE FILM
                </button>
                <button className="btn btn-ghost" onClick={() => setPage('education')}>
                  EDUCATION WORK →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06 EDUCATION VERTICAL — WHITE ─── */}
      <section className="section section-white">
        <div className="section-head js-reveal">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>THE EDUCATION VERTICAL</p>
          <h2 className="t-h2" style={{ maxWidth: 700 }}>
            We understand institutions.<br />All of them.
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 560 }}>
            From new school launches to established university campuses — we understand the audiences,
            the admission cycles, the events, and the content that builds trust at each level.
          </p>
        </div>

        <div className="edu-sectors js-reveal">
          {[
            { n: '01', title: 'Schools',      items: ['K–12 · CBSE · ICSE', 'International Schools', 'Boarding Schools', 'New School Launches'] },
            { n: '02', title: 'Colleges',     items: ['Degree Colleges', 'Professional Colleges', 'Autonomous Institutions', 'Undergraduate Institutions'] },
            { n: '03', title: 'Universities', items: ['Private Universities', 'University Departments', 'Research Campuses', 'Multi-campus Institutions'] },
            { n: '04', title: 'Institutes',   items: ['Engineering', 'Management & MBA', 'Medical', 'Design & Law'] },
          ].map((s) => (
            <div key={s.n} className="edu-sector">
              <div className="edu-sector-num">{s.n}</div>
              <h3>{s.title}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <button className="btn btn-primary" onClick={() => setPage('education')}>
            EXPLORE EDUCATION CAPABILITIES →
          </button>
        </div>
      </section>

      {/* ─── 07 EVENT ECOSYSTEM — DARK ─── */}
      <section className="ecosystem-section">
        <div className="js-reveal">
          <p className="t-eyebrow light" style={{ marginBottom: 24 }}>EVENT → CONTENT ECOSYSTEM</p>
          <h2 className="ecosystem-title">
            One event.<br /><em>Months of content.</em>
          </h2>
          <p className="ecosystem-sub">
            We don't just cover events. We turn institutional moments into brand assets that work all year.
          </p>
        </div>

        <div className="ecosystem-phases js-reveal">
          {[
            {
              tag: 'BEFORE THE EVENT',
              title: 'Build Anticipation',
              items: ['Event Concept & Theme', 'Teaser Content', 'Countdown Reels', 'Student Preparation Stories', 'Announcement Designs', 'Social Build-up Campaign'],
            },
            {
              tag: 'DURING THE EVENT',
              title: 'Capture Everything',
              items: ['Multi-Camera Production', 'Editorial Photography', 'Stage & Performance Coverage', 'Backstage & BTS Content', 'Audience & Reaction Moments', 'Real-time Social Content'],
            },
            {
              tag: 'AFTER THE EVENT',
              title: 'Amplify All Year',
              items: ['Cinematic Aftermovie', 'Full Photo Library', '15–20 Social Reels', 'Student Highlights Series', 'Post-Event Campaign (3 Weeks)', 'Year-long Content Archive'],
            },
          ].map((phase) => (
            <div key={phase.tag} className="eco-phase">
              <div className="eco-phase-tag">{phase.tag}</div>
              <h3>{phase.title}</h3>
              <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 52, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button className="btn btn-olive" onClick={() => setPage('education')}>
            PLAN AN EVENT →
          </button>
          <button className="btn btn-ghost" onClick={() => setPage('production')}>
            VIEW PRODUCTION WORK
          </button>
        </div>
      </section>

      {/* ─── 08 OPERATING MODEL — SURFACE ─── */}
      <section className="model-section">
        <div className="section-head js-reveal">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>OUR OPERATING MODEL</p>
          <h2 className="t-h2">From strategy<br />to screen.</h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 520 }}>
            We don't sell isolated services. We operate as a single creative partner across your entire communication ecosystem.
          </p>
        </div>

        <div className="model-steps js-reveal">
          {MODEL_STEPS.map((step) => (
            <div key={step.n} className="model-step">
              <div className="model-step-num">PHASE {step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <button className="btn btn-primary" onClick={() => setPage('capabilities')}>
            HOW WE WORK →
          </button>
        </div>
      </section>

      {/* ─── 09 WHY US — WHITE ─── */}
      <section className="section section-white">
        <div className="section-head js-reveal">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>WHY 3DOTCREATIVES</p>
          <h2 className="t-h2">
            Why serious institutions<br />choose us.
          </h2>
        </div>

        <div className="why-items">
          {WHY.map((item) => (
            <div key={item.n} className="why-item js-reveal">
              <div className="why-num">{item.n}</div>
              <div className="why-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 52, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button className="btn btn-primary js-magnetic" onClick={() => setPage('contact')}>
            START A CONVERSATION →
          </button>
          <button className="btn btn-outline" onClick={() => setPage('about')}>
            ABOUT 3DOTCREATIVES
          </button>
        </div>
      </section>

      {/* ─── 10 TESTIMONIALS — SURFACE (warm, not dark) ─── */}
      <section className="testimonials-section">
        <div className="section-head js-reveal">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>WHAT CLIENTS SAY</p>
          <h2 className="t-h2">
            Trusted by institutions<br />that value their reputation.
          </h2>
        </div>

        <div className="testimonials-grid js-reveal">
          {/* Real testimonial — Tilkesh Bhatia */}
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">
              3dotcreatives understood exactly what we needed. The campus film they produced became the
              cornerstone of our admission outreach — parents connected with it immediately. The quality
              of work was exceptional and the team genuinely cared about getting it right.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">TB</div>
              <div>
                <div className="testimonial-name">Tilkesh Bhatia</div>
                <div className="testimonial-role">Director · Educational Institution</div>
              </div>
            </div>
          </div>

          {/* Verification block — replaces "getting started" card */}
          <div className="verification-block">
            <div className="verification-block-icon" style={{ color: 'var(--olive)' }}>
              <CheckIcon />
            </div>
            <h4>Every institution is a real client.<br />Every deliverable is verified work.</h4>
            <p>
              We don't show stock footage, fabricated case studies, or invented metrics.
              Every project in our portfolio was produced by us, for a real institution,
              with a real brief and real outcomes.
            </p>
            <button
              className="btn btn-outline btn-sm"
              style={{ marginTop: 24 }}
              onClick={() => setPage('work')}
            >
              VIEW ALL WORK →
            </button>
          </div>
        </div>
      </section>

      {/* ─── 11 FINAL CTA — DARK ─── */}
      <section className="final-cta">
        <div className="final-cta-bg">
          <img src={cldPoster('Sss_Final', 1200)} alt="" aria-hidden="true" />
        </div>
        <div className="final-cta-content">
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 28 }}>
            START A CREATIVE PARTNERSHIP
          </p>
          <h2>
            Let's build something<br />
            <em>worth remembering.</em>
          </h2>
          <p>
            A 30-minute conversation. No pressure. Just clarity on what's possible for your brand or institution.
          </p>
          <div className="final-cta-btns">
            <button className="btn btn-olive btn-lg js-magnetic" onClick={() => setPage('contact')}>
              START A PROJECT →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
