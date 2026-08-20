import { cldPoster } from '../data/cloudinary';

/**
 * PortfolioCard — Editorial, image-dominant.
 * No card chrome. Thumbnail fills the frame.
 * Overlay text always visible at bottom.
 * Play button reveals on hover.
 */
export default function PortfolioCard({ video, onPlay }) {
  return (
    <article
      className="port-card"
      onClick={() => onPlay(video)}
      tabIndex={0}
      role="button"
      aria-label={`Play ${video.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPlay(video); } }}
    >
      <div className={`port-thumb ${video.aspect === '9:16' ? 'vertical' : ''}`}>
        <img
          className="port-img"
          src={video.poster || cldPoster(video.id)}
          alt={video.title}
          loading="lazy"
          decoding="async"
        />
        {/* Gradient overlay — always present for readability */}
        <div className="port-thumb-overlay" />

        {/* Play button — reveals on hover via CSS */}
        <div className="port-play" aria-hidden="true">
          <div className="port-play-icon" />
        </div>

        {/* Text — always visible at bottom */}
        <div className="port-info">
          {video.label && (
            <div className="port-label">{video.label}</div>
          )}
          <h4>{video.title}</h4>
          {video.institution && (
            <div className="port-institution">{video.institution}</div>
          )}
        </div>
      </div>
    </article>
  );
}
