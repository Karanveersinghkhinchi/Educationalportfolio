import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Work',         key: 'work' },
  { label: 'Capabilities', key: 'capabilities' },
  { label: 'Production',   key: 'production' },
  { label: 'Education',    key: 'education' },
  { label: 'About',        key: 'about' },
];

// All pages where navbar starts transparent over dark hero
const DARK_PATHS = ['/', '/production', '/work', '/about', '/education', '/contact'];

export default function Navbar({ goToPage }) {
  const location  = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const isDark   = DARK_PATHS.includes(location.pathname);
  const isActive = (key) =>
    key === 'home'
      ? location.pathname === '/'
      : location.pathname === `/${key}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (key) => {
    goToPage(key);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${isDark ? 'dark' : ''} ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <button onClick={() => go('home')} className="brand" aria-label="3dotcreatives — Home">
          <span className="brand-dots" aria-hidden="true">
            <span /><span /><span />
          </span>
          3DOTCREATIVES
        </button>

        {/* Desktop nav — use nav > ul > li for correct ARIA */}
        <nav className="nav-links" aria-label="Site sections">
          {NAV_ITEMS.map(({ label, key }) => (
            <button
              key={key}
              className={`nav-link ${isActive(key) ? 'active' : ''}`}
              onClick={() => go(key)}
              aria-current={isActive(key) ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
          <button className="btn btn-sm nav-cta" onClick={() => go('contact')}>
            START A PROJECT
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer — × close button added */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="mobile-drawer open"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Visible × close button */}
          <button
            className="m-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            ×
          </button>

          {NAV_ITEMS.map(({ label, key }) => (
            <button key={key} className="m-link" onClick={() => go(key)}>
              {label}
              <span aria-hidden="true">→</span>
            </button>
          ))}

          {/* WhatsApp — SVG icon, no emoji */}
          <a
            href="https://wa.me/917296902012?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%203dotcreatives."
            target="_blank"
            rel="noopener noreferrer"
            className="m-wa-link"
            aria-label="Chat on WhatsApp — +91 72969 02012"
          >
            {/* WhatsApp SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us — +91 72969 02012
          </a>

          <button className="m-cta" onClick={() => go('contact')}>
            START A PROJECT →
          </button>
        </div>
      )}
    </>
  );
}
