import { useEffect, useState } from 'react';
import { cldEmbed } from '../data/cloudinary';

export default function CloudinaryModal({ video, onClose }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false); // reset loading state when video changes
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, video]);

  if (!video) return null;

  const embedUrl = cldEmbed(video.id, { autoplay: true, controls: true });

  return (
    <div
      className="cld-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${video.title}`}
    >
      <div className="cld-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cld-close" onClick={onClose} aria-label="Close video">✕</button>

        <div className="cld-frame-wrap">
          {/* Loading spinner — shows until iframe fires onLoad */}
          {!loaded && (
            <div className="cld-loading" aria-hidden="true">
              <div className="cld-spinner" />
            </div>
          )}
          <iframe
            className="cld-frame"
            src={embedUrl}
            title={video.title}
            allow="autoplay; fullscreen"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity .3s' }}
          />
        </div>

        <div className="cld-meta">
          <div>
            <h3>{video.title}</h3>
            {video.institution && <p>{video.institution}</p>}
          </div>
          {video.label && <span className="cld-badge">{video.label}</span>}
        </div>
      </div>
    </div>
  );
}
