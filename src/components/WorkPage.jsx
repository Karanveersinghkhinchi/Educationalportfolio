import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { ALL_PORTFOLIO, FILTER_CATEGORIES, PORTFOLIO_BY_CATEGORY, FEATURED_FILM, cldPoster } from '../data/cloudinary';

export default function WorkPage({ setPage, onPlay }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const items = PORTFOLIO_BY_CATEGORY[activeFilter] || ALL_PORTFOLIO;

  return (
    <div className="work-page-shell">

      {/* ─── Hero — Dark ─── */}
      <div className="work-page-hero">
        <p className="t-eyebrow light" style={{ marginBottom: 20 }}>PORTFOLIO</p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.04,
          letterSpacing: '-.025em',
          marginBottom: 20,
        }}>
          The Work.
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.4)', maxWidth: 520, lineHeight: 1.75 }}>
          Campus films, sports content, event productions, leadership films and social storytelling —
          built inside real institutions across India.
        </p>
      </div>

      {/* ─── Content — White Canvas ─── */}
      <div style={{ padding: 'var(--pad-v) var(--pad-h)', background: 'var(--canvas)' }}>

        {/* Signature featured piece */}
        <div style={{ marginBottom: 72 }}>
          <p className="t-eyebrow" style={{ marginBottom: 24 }}>SIGNATURE PROJECT</p>
          <div
            style={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              cursor: 'pointer',
              aspectRatio: '16/9',
              maxHeight: 600,
              background: 'var(--ink)',
            }}
            onClick={() => onPlay(FEATURED_FILM)}
            role="button"
            tabIndex={0}
            aria-label={`Play: ${FEATURED_FILM.title}`}
            onKeyDown={(e) => { if (e.key === 'Enter') onPlay(FEATURED_FILM); }}
          >
            <img
              src={cldPoster(FEATURED_FILM.id, 1400)}
              alt={FEATURED_FILM.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .7 }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.1) 50%)',
              display: 'flex', alignItems: 'flex-end',
              padding: 'clamp(24px, 4vw, 52px)',
            }}>
              <div>
                <p className="t-eyebrow light" style={{ marginBottom: 12 }}>{FEATURED_FILM.label}</p>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 3.5vw, 48px)',
                  fontWeight: 800,
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  letterSpacing: '-.02em',
                  marginBottom: 12,
                }}>
                  {FEATURED_FILM.title}
                </h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', maxWidth: 480, lineHeight: 1.7 }}>
                  {FEATURED_FILM.desc}
                </p>
              </div>
              {/* Play button */}
              <div style={{
                position: 'absolute', top: '50%', right: 'clamp(24px, 6vw, 80px)',
                transform: 'translateY(-50%)',
                width: 72, height: 72, borderRadius: 999,
                background: 'rgba(255,255,255,.92)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }} aria-hidden="true">
                <div style={{
                  width: 0, height: 0, marginLeft: 5,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '20px solid var(--text)',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter + Portfolio Grid */}
        <p className="t-eyebrow" style={{ marginBottom: 24 }}>ALL WORK</p>
        <div className="filter-row">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {items.map((video) => (
            <PortfolioCard key={video.id} video={video} onPlay={onPlay} />
          ))}
        </div>

        {/* End CTA — dark card, not charcoal variable */}
        <div style={{
          marginTop: 100,
          padding: 'clamp(48px, 6vw, 80px)',
          background: 'var(--ink)',
          textAlign: 'center',
        }}>
          <p className="t-eyebrow light" style={{ justifyContent: 'center', marginBottom: 20 }}>
            WORK WITH US
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--white)',
            lineHeight: 1.1,
            letterSpacing: '-.02em',
            marginBottom: 16,
          }}>
            Want work like this<br />for your institution?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.35)', marginBottom: 36 }}>
            Tell us about your institution. We'll show you what's possible.
          </p>
          <button className="btn btn-olive btn-lg" onClick={() => setPage('contact')}>
            START A PROJECT →
          </button>
        </div>
      </div>
    </div>
  );
}
