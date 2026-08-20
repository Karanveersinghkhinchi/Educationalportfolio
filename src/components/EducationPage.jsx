import PortfolioCard from './PortfolioCard';
import { CAMPUS_FILMS, EVENT_FILMS, LEADERSHIP_FILMS, SPORTS_FILMS, FEATURED_FILM, cldPoster } from '../data/cloudinary';

/* ─── Pillar number labels (replace emoji) ─── */
const CONTENT_PILLARS = [
  { n: '01', title: 'Student Stories',     items: ['Day-in-the-Life Films', 'Achievement Stories', 'Alumni Testimonials', 'Student-Led Content'] },
  { n: '02', title: 'Faculty Stories',     items: ['Teacher Introductions', 'Subject Expertise Films', 'Teaching Philosophy', 'Faculty Achievements'] },
  { n: '03', title: 'Campus Discovery',    items: ['Campus Tour Films', 'Facility Showcases', 'Labs & Technology', 'Sports Infrastructure'] },
  { n: '04', title: 'Achievements',        items: ['Academic Results', 'Sports Championships', 'Competition Wins', 'Institutional Milestones'] },
  { n: '05', title: 'Parent Testimonials', items: ['Video Testimonials', 'Parent Story Series', 'Community Stories', 'Admission Journey'] },
  { n: '06', title: 'Events & Culture',    items: ['Annual Day', 'Sports Day', 'Cultural Events', 'College Fests'] },
  { n: '07', title: 'Admission Content',   items: ['Why Choose Us Films', 'Campus Visit Reels', 'Program Introductions', 'FAQs & Information'] },
  { n: '08', title: 'Institutional Brand', items: ['Vision & Mission Films', 'Leadership Stories', 'Institution Heritage', 'Future Direction'] },
];

/* ─── Decision-maker personas ─── */
const PERSONAS = [
  {
    title: 'School Marketing Head',
    desc: 'You need content that fills open days, impresses parents at visits, and builds a digital presence that the competition can\'t ignore.',
  },
  {
    title: 'University Communications',
    desc: 'You manage a complex institution with multiple campuses, departments and stakeholders. We help you tell the story with the weight it deserves.',
  },
  {
    title: 'Event Coordinator',
    desc: 'Your annual function is months of preparation. We make sure that effort generates content that your institution uses all year long.',
  },
  {
    title: 'Admissions Team',
    desc: 'You need enquiries. We create the parent-facing content — campus films, social reels, testimonials — that converts interest into applications.',
  },
  {
    title: 'Institutional Brand Team',
    desc: 'You protect the institution\'s identity and reputation. We create content that reflects the quality and values you\'ve spent years building.',
  },
];

/* ─── SVG icons (replace emoji) ─── */
const PersonIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="6" r="3" />
    <path d="M2 16c0-3.9 3.1-7 7-7s7 3.1 7 7" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="14" height="12" />
    <path d="M7 16V10h4v6" />
    <path d="M6 4V2h6v2" />
  </svg>
);

export default function EducationPage({ setPage, onPlay }) {
  return (
    <div className="edu-shell">

      {/* ─── HERO — DARK (unified with other pages) ─── */}
      <div className="edu-hero">
        <p className="t-eyebrow light" style={{ marginBottom: 20 }}>EDUCATION VERTICAL</p>
        <h1>
          Education deserves<br />
          <em>better storytelling.</em>
        </h1>
        <p style={{ marginTop: 24, fontSize: 17, color: 'rgba(255,255,255,.45)', maxWidth: 540, lineHeight: 1.75 }}>
          We are an education-specialist creative studio. We understand the parent journey,
          the admission cycle, the faculty story and the campus culture — because we've built
          our methodology around institutional growth.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
          <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
            DISCUSS YOUR PRODUCTION →
          </button>
          <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
            VIEW EDUCATION WORK
          </button>
        </div>
      </div>

      {/* ─── FEATURED CASE STUDY — WHITE CANVAS ─── */}
      <section className="edu-case">
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>FEATURED EDUCATION WORK</p>
          <h2 className="t-h2" style={{ maxWidth: 640 }}>
            What institutional<br />production looks like.
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 520 }}>
            A cinematic portrait of campus life. Shot inside a real campus.
            No actors. No scripts. Real students, real teachers, real moments.
          </p>
        </div>

        <div className="edu-case-grid">
          {/* Left — Video */}
          <div>
            <div className="edu-case-visual" onClick={() => onPlay(FEATURED_FILM)}>
              <img src={FEATURED_FILM.poster} alt={FEATURED_FILM.title} />
              <div className="edu-case-play-wrap">
                <div className="edu-case-play">
                  <div className="edu-case-play-icon" />
                </div>
              </div>
            </div>

            <div className="edu-case-deliverables">
              {FEATURED_FILM.deliverables.map((d) => (
                <span key={d} className="edu-case-tag">{d}</span>
              ))}
            </div>
          </div>

          {/* Right — Case Study Breakdown */}
          <div className="edu-case-meta">
            <div className="edu-case-step">
              <div className="edu-case-step-label">CLIENT</div>
              <div>
                <h4>K–12 Residential School</h4>
                <p>A well-established boarding school in Rajasthan with strong academics and campus culture but minimal digital presence.</p>
              </div>
            </div>

            <div className="edu-case-step">
              <div className="edu-case-step-label">OBJECTIVE</div>
              <div>
                <h4>Make parents feel the campus before they visit.</h4>
                <p>Parents don't choose schools from brochures. They need to feel what it's like to actually be there. Film makes that possible.</p>
              </div>
            </div>

            <div className="edu-case-step">
              <div className="edu-case-step-label">WHAT WE HANDLED</div>
              <div>
                <h4>Complete production from concept to delivery.</h4>
                <p>Creative direction, scripting, multi-day campus shoot, editing, colour grading, social format cuts, and final delivery.</p>
              </div>
            </div>

            <div className="edu-case-step">
              <div className="edu-case-step-label">OUTPUT</div>
              <div>
                <h4>One shoot. Multiple deliverables.</h4>
                <p>Institutional film + student reels + sports coverage + social content library. Every institutional moment documented.</p>
              </div>
            </div>

            <div className="edu-case-step">
              <div className="edu-case-step-label">IMPACT</div>
              <div>
                <h4>Content that works through every admission season.</h4>
                <p>The film became the cornerstone of admission outreach. Parents connected immediately. Real work. Verified outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH — SURFACE ─── */}
      <section className="section section-surface" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>WHO WE WORK WITH</p>
          <h2 className="t-h2" style={{ maxWidth: 640 }}>
            Across the entire<br />education lifecycle.
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 540 }}>
            We understand that a K–12 school, a degree college and a university have very different audiences,
            admission cycles and content needs. We adapt our approach accordingly.
          </p>
        </div>

        <div className="edu-sectors">
          {[
            { n: '01', title: 'Schools',      items: ['K–12 · CBSE / ICSE / State Board', 'International Schools', 'Boarding & Residential Schools', 'New School Launches', 'Premium Day Schools', 'School Rebranding Projects'] },
            { n: '02', title: 'Colleges',     items: ['Degree Colleges', 'Undergraduate Colleges', 'Professional Colleges', 'Autonomous Institutions', 'Affiliated Colleges', 'Private Liberal Arts Colleges'] },
            { n: '03', title: 'Universities', items: ['Private Universities', 'University Departments', 'Research Institutions', 'Multi-campus Universities', 'Public Institutions', 'Deemed Universities'] },
            { n: '04', title: 'Institutes',   items: ['Engineering Institutions', 'Medical & Health Sciences', 'Management & MBA', 'Design Institutions', 'Law Institutions', 'Vocational & Skill Institutions'] },
          ].map((s) => (
            <div key={s.n} className="edu-sector">
              <div className="edu-sector-num">{s.n}</div>
              <h3>{s.title}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PERSONA SECTION — DARK ─── */}
      <section className="persona-section">
        <div className="section-head">
          <p className="t-eyebrow light" style={{ marginBottom: 16 }}>BUILT FOR DECISION MAKERS</p>
          <h2 className="t-h2" style={{ color: 'var(--white)', maxWidth: 700 }}>
            Built for teams that have<br /><em style={{ color: 'var(--olive-warm)' }}>something important to communicate.</em>
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 560, color: 'rgba(255,255,255,.42)' }}>
            We understand the pressure behind institutional communications. Here is who we work with most closely — and how we help.
          </p>
        </div>

        <div className="persona-grid">
          {PERSONAS.map((persona) => (
            <div key={persona.title} className="persona-card">
              <div className="persona-icon" style={{ color: 'var(--olive-warm)' }}>
                <PersonIcon />
              </div>
              <h4>{persona.title}</h4>
              <p>{persona.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTENT UNIVERSE — WHITE (emoji removed, numbered) ─── */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>CONTENT UNIVERSE</p>
          <h2 className="t-h2" style={{ maxWidth: 640 }}>
            The education content<br />ecosystem.
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 560 }}>
            An educational institution has more content potential than almost any other business.
            Real students. Real teachers. Real campus. Real events. Real results. We help you find and tell those stories.
          </p>
        </div>

        <div className="content-pillars">
          {CONTENT_PILLARS.map((pillar) => (
            <div key={pillar.title} className="content-pillar">
              <div className="pillar-num">{pillar.n}</div>
              <h3>{pillar.title}</h3>
              <ul>{pillar.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EVENT ECOSYSTEM — DARK ─── */}
      <section className="ecosystem-section">
        <p className="t-eyebrow light" style={{ marginBottom: 24 }}>EVENT → CONTENT SYSTEM</p>
        <h2 className="ecosystem-title">
          One event.<br /><em>An entire year of content.</em>
        </h2>
        <p className="ecosystem-sub">
          A school annual day happens once. The content it generates — if produced right — should work for your institution all year long.
        </p>

        <div className="ecosystem-phases">
          {[
            {
              tag: 'BEFORE',
              title: 'Build Anticipation',
              items: ['Event Announcement Content', 'Theme Reveal Teasers', 'Countdown Social Series', 'Student Preparation Reels', 'Behind-the-Scenes Rehearsal', 'Invitation Design Assets'],
            },
            {
              tag: 'DURING',
              title: 'Capture Everything',
              items: ['Multi-Camera Video Coverage', 'Editorial Event Photography', 'Performance Documentation', 'Backstage Moments', 'Audience & Emotional Reactions', 'VIP & Leadership Interactions'],
            },
            {
              tag: 'AFTER',
              title: 'Amplify All Year',
              items: ['3–5 Min Cinematic Aftermovie', 'Full Edited Photo Library', '15–20 Instagram Reels', 'Student Highlights Series', '3-Week Post-Event Campaign', 'Year-long Content Archive'],
            },
          ].map((phase) => (
            <div key={phase.tag} className="eco-phase">
              <div className="eco-phase-tag">{phase.tag}</div>
              <h3>{phase.title}</h3>
              <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTION CAPABILITY — SURFACE ─── */}
      <section className="prod-process-section">
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>PRODUCTION CAPABILITY</p>
          <h2 className="t-h2" style={{ maxWidth: 640 }}>
            From brief to delivery.<br />We handle everything.
          </h2>
          <p className="t-body" style={{ marginTop: 16, maxWidth: 560 }}>
            We are not a photography vendor. We are a complete production and content partner — from creative direction and shoot planning to final delivery and distribution.
          </p>
        </div>

        <div className="prod-process-grid">
          {[
            {
              phase: 'PRE-PRODUCTION',
              n: '01',
              title: 'Strategy & Concept',
              items: ['Creative Brief & Direction', 'Script & Storyboard', 'Shoot Planning & Scheduling', 'Location & Talent Identification', 'Equipment Planning', 'Content Calendar Design'],
            },
            {
              phase: 'PRODUCTION',
              n: '02',
              title: 'On-Ground Capture',
              items: ['Multi-Camera Cinematography', 'Editorial Photography', 'Event & Stage Coverage', 'BTS Documentation', 'Real-Moment Capture', 'Drone & Aerial Coverage'],
            },
            {
              phase: 'POST-PRODUCTION',
              n: '03',
              title: 'Edit & Delivery',
              items: ['Video Editing & Grading', 'Sound Design & Music', 'Motion Graphics & Titles', 'Photo Culling & Editing', 'Social Format Cuts', 'Final QA & Delivery'],
            },
            {
              phase: 'DISTRIBUTION',
              n: '04',
              title: 'Digital Strategy',
              items: ['Content Calendar & Posting', 'Platform Optimisation', 'Ad Creative Preparation', 'Performance Tracking', 'Amplification Strategy', 'Archive & Asset Management'],
            },
          ].map((step) => (
            <div key={step.phase} className="prod-process-step">
              <div className="prod-process-phase" data-num={step.n}>{step.phase}</div>
              <h3>{step.title}</h3>
              <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ADMISSION GROWTH — WHITE ─── */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>ADMISSION GROWTH</p>
          <h2 className="t-h2" style={{ maxWidth: 640 }}>
            From first impression<br />to enquiry.
          </h2>
        </div>

        <div className="admission-grid">
          {[
            { n: '01', title: 'Discovery',   body: 'Google, Instagram, YouTube, Maps — we ensure your institution is found when parents search.' },
            { n: '02', title: 'Trust',        body: 'Campus films, student stories, teacher content, parent testimonials — content that builds conviction.' },
            { n: '03', title: 'Explore',      body: 'Website, social presence, facility content — helping families understand what makes you different.' },
            { n: '04', title: 'Enquire',      body: 'WhatsApp funnels, landing pages, lead forms — turning interest into qualified contact.' },
            { n: '05', title: 'Visit',        body: 'Campus visit content, open day campaigns — converting digital interest into physical visits.' },
            { n: '06', title: 'Enroll',       body: 'Admission journey content, decision-support materials — helping families commit with confidence.' },
          ].map((step) => (
            <div key={step.n} className="admission-step">
              <div className="admission-step-num">STAGE {step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CAMPUS WORK SAMPLES — SURFACE ─── */}
      <section className="section section-surface" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-head">
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>CAMPUS WORK SAMPLES</p>
          <h2 className="t-h2" style={{ maxWidth: 560 }}>
            Real campus.<br />Real production.
          </h2>
        </div>

        <div className="portfolio-grid">
          {[...CAMPUS_FILMS.slice(0, 3), ...SPORTS_FILMS.slice(0, 2), ...EVENT_FILMS].map((v) => (
            <PortfolioCard key={v.id} video={v} onPlay={onPlay} />
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <button className="btn btn-primary" onClick={() => setPage('work')}>VIEW ALL EDUCATION WORK →</button>
        </div>
      </section>

      {/* ─── FINAL CTA — DARK, CONSULTATIVE ─── */}
      <section className="final-cta">
        <div className="final-cta-content">
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 28 }}>
            PLAN YOUR NEXT PRODUCTION
          </p>
          <h2>
            Planning your next school or<br />
            <em>university production?</em>
          </h2>
          <p>
            A 30-minute conversation. We'll review your institution's
            digital presence and show you exactly what's possible.
          </p>
          <div className="final-cta-btns">
            <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
              DISCUSS YOUR PRODUCTION →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              VIEW EDUCATION WORK
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
