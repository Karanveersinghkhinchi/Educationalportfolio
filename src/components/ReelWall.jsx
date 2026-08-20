import { useRef, useState, useCallback, useEffect } from 'react';
import { REEL_WALL } from '../data/cloudinary';

export default function ReelWall({ onPlay }) {
  const [playingIdx, setPlayingIdx] = useState(null);
  const videoRefs   = useRef({});
  const cellRefs    = useRef({});

  /* ─── Intersection Observer — autoplay cells in viewport ─── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.idx);
          const video = videoRefs.current[idx];
          if (!video) return;
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {});
            setPlayingIdx(idx);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    REEL_WALL.forEach((_, idx) => {
      const cell = cellRefs.current[idx];
      if (cell) observer.observe(cell);
    });

    return () => observer.disconnect();
  }, []);

  /* ─── Hover: override with hovered cell ─── */
  const handleEnter = useCallback((idx) => {
    setPlayingIdx(idx);
    const video = videoRefs.current[idx];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, []);

  const handleLeave = useCallback((idx) => {
    /* Re-scan: keep playing if still in viewport */
    const cell = cellRefs.current[idx];
    if (cell) {
      const rect = cell.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) {
        const video = videoRefs.current[idx];
        if (video) video.pause();
        setPlayingIdx(null);
      }
    }
  }, []);

  return (
    <section className="reel-wall-section" aria-label="Selected work — video reel">
      <div className="reel-wall-header">
        <div>
          <p className="t-eyebrow light">SELECTED WORK</p>
          <h2 className="reel-wall-title">The Work Speaks.</h2>
        </div>
        <button
          className="btn btn-ghost btn-sm reel-view-all"
          onClick={() => onPlay && onPlay('work')}
          aria-label="View all work"
        >
          VIEW ALL WORK →
        </button>
      </div>

      <div className="reel-wall">
        {REEL_WALL.map((video, idx) => (
          <div
            key={video.id}
            ref={(el) => { if (el) cellRefs.current[idx] = el; }}
            data-idx={idx}
            className={`reel-cell ${playingIdx === idx ? 'playing' : ''}`}
            onClick={() => onPlay && onPlay(video)}
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => handleLeave(idx)}
            tabIndex={0}
            aria-label={`Play ${video.title}`}
            onKeyDown={(e) => { if (e.key === 'Enter') onPlay && onPlay(video); }}
          >
            {/* Poster — hidden once video plays */}
            <img
              className="reel-poster"
              src={video.poster}
              alt={video.title}
              loading="lazy"
              decoding="async"
            />

            {/* Muted autoplay preview video */}
            <video
              ref={(el) => { if (el) videoRefs.current[idx] = el; }}
              className="reel-hover-video"
              src={`https://res.cloudinary.com/uereox6s/video/upload/q_auto,w_800/${video.id}.mp4`}
              muted
              playsInline
              loop
              preload="none"
              aria-hidden="true"
            />

            <div className="reel-overlay" aria-hidden="true" />

            <div className="reel-info">
              <div className="reel-label">{video.label}</div>
              <div className="reel-title-text">{video.title}</div>
            </div>

            <div className="reel-play" aria-hidden="true">
              <div className="reel-play-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
