import PortfolioCard from './PortfolioCard';
import { CAMPUS_FILMS, SPORTS_FILMS, SOCIAL_FILMS, EVENT_FILMS, LEADERSHIP_FILMS, cldPoster } from '../data/cloudinary';

const PROD_CATEGORIES = [
  {
    n: '01',
    title: 'Brand & Institutional Films',
    items: ['Brand Films', 'Institutional Identity Films', 'School & College Films', 'University Films', 'Corporate Films', 'Documentary-Style Films'],
    videos: CAMPUS_FILMS.slice(0, 3),
  },
  {
    n: '02',
    title: 'Commercial & Campaign Content',
    items: ['Advertising Films', 'Campaign Videos', 'Admission Campaign Films', 'Performance Creatives', 'Product & Service Films'],
    videos: CAMPUS_FILMS.slice(3, 5),
  },
  {
    n: '03',
    title: 'Social & Short-Form',
    items: ['Instagram Reels', 'YouTube Shorts', 'Vertical Storytelling', 'Day-in-the-Life Series', 'Trend-Led Social Content'],
    videos: SOCIAL_FILMS,
  },
  {
    n: '04',
    title: 'Events & Production',
    items: ['Annual Day Coverage', 'Sports Day Films', 'Institutional Celebrations', 'Fest & Cultural Events', 'Cinematic Aftermovies'],
    videos: [...EVENT_FILMS, ...SPORTS_FILMS.slice(0, 2)],
  },
  {
    n: '05',
    title: 'Leadership & Institutional Stories',
    items: ['Principal & Leadership Films', 'Faculty Story Series', 'Founder Films', 'Vision & Philosophy Films'],
    videos: LEADERSHIP_FILMS,
  },
];

export default function ProductionPage({ setPage, onPlay }) {
  return (
    <div className="prod-shell">

      {/* ─── Hero — Dark cinematic ─── */}
      <div className="production-hero">
        <img
          className="production-hero-img"
          src={cldPoster('Sss_Final', 1600)}
          alt="Production work — cinematic campus film still"
        />
        <div className="production-hero-overlay" />
        <div className="production-hero-body">
          <p className="t-eyebrow light" style={{ marginBottom: 20 }}>PRODUCTION HOUSE</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 96px)',
            fontWeight: 800,
            color: 'var(--white)',
            lineHeight: 1.04,
            letterSpacing: '-.03em',
            marginBottom: 24,
            maxWidth: 860,
          }}>
            We make things<br />
            <em style={{ fontStyle: 'italic', color: 'var(--olive-warm)' }}>worth watching.</em>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.42)', maxWidth: 540, lineHeight: 1.75, marginBottom: 40 }}>
            From cinematic institutional films to social reels, event aftermovies to sports content —
            we operate as a full-service production partner.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
              PLAN A PRODUCTION →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage('work')}>
              VIEW ALL WORK
            </button>
          </div>
        </div>
      </div>

      {/* ─── What we produce — white canvas ─── */}
      <div style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--canvas)' }}>
        <div style={{ marginBottom: 60 }}>
          <p className="t-eyebrow" style={{ marginBottom: 16 }}>WHAT WE PRODUCE</p>
          <h2 className="t-h2" style={{ maxWidth: 600 }}>
            Five categories of<br />production work.
          </h2>
        </div>

        <div className="production-categories">
          {PROD_CATEGORIES.map((cat) => (
            <div key={cat.n} className="prod-cat">
              <div className="prod-cat-num">{cat.n}</div>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Portfolio by category — alternating surface / canvas ─── */}
      {PROD_CATEGORIES.filter((c) => c.videos.length).map((cat, i) => (
        <div
          key={cat.n}
          style={{
            padding: 'clamp(48px, 6vw, 80px) var(--pad-h)',
            background: i % 2 === 0 ? 'var(--canvas)' : 'var(--surface)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <p className="t-eyebrow" style={{ marginBottom: 20 }}>{cat.n} — {cat.title.toUpperCase()}</p>
          <div className="portfolio-grid">
            {cat.videos.map((v) => (
              <PortfolioCard key={v.id} video={v} onPlay={onPlay} />
            ))}
          </div>
        </div>
      ))}

      {/* ─── Production process — Dark ─── */}
      <div style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,.04)' }}>
        <p className="t-eyebrow light" style={{ marginBottom: 24 }}>THE PRODUCTION PROCESS</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(30px, 4.5vw, 58px)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.1,
          letterSpacing: '-.025em',
          marginBottom: 56,
          maxWidth: 700,
        }}>
          How we make<br />
          <em style={{ fontStyle: 'italic', color: 'var(--olive-warm)' }}>things worth watching.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2 }}>
          {[
            { n: '01', label: 'PRE-PRODUCTION',  title: 'Strategy & Concept',    body: 'Brief, research, creative direction, script, storyboard, location scouting, talent identification.' },
            { n: '02', label: 'PRODUCTION',       title: 'On-Ground Capture',     body: 'Multi-camera shoots, editorial photography, BTS documentation, real-moment capture.' },
            { n: '03', label: 'POST-PRODUCTION',  title: 'Edit & Delivery',       body: 'Editing, colour grading, sound design, motion graphics, social format cuts, delivery.' },
            { n: '04', label: 'DISTRIBUTION',     title: 'Digital Distribution',  body: 'Content calendar, posting strategy, ad amplification, performance tracking.' },
          ].map((step) => (
            <div key={step.n} style={{ padding: '40px 32px', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
              <div style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.22em',
                color: 'var(--olive-warm)',
                marginBottom: 12,
              }}>
                {step.label}
              </div>
              <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 800, color: 'var(--white)', marginBottom: 12 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.35)', lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Final CTA — Dark ─── */}
      <section className="final-cta">
        <div className="final-cta-content">
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 28 }}>
            PLAN A PRODUCTION
          </p>
          <h2>
            What do you<br />
            <em>want to make?</em>
          </h2>
          <p>Brand film, campus shoot, event coverage, sports content — tell us what you're working on.</p>
          <div className="final-cta-btns">
            <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
              START A PROJECT →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
