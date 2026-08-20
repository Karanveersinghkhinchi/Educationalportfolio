import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { initLenis, destroyLenis } from './utils/scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import CapabilitiesPage from './components/CapabilitiesPage';
import ProductionPage from './components/ProductionPage';
import EducationPage from './components/EducationPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CloudinaryModal from './components/CloudinaryModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import './styles/global.css';

function AppInner() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [playing, setPlaying] = useState(null);

  // Init Lenis smooth scroll (once, for the app lifetime)
  useEffect(() => {
    const lenis = initLenis();
    return () => destroyLenis();
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Unified page navigation helper — keeps all child components using the same simple API
  const goToPage = (nextPage) => {
    navigate(nextPage === 'home' ? '/' : `/${nextPage}`);
  };

  const sharedProps = { setPage: goToPage, onPlay: setPlaying };

  return (
    <>
      {playing && (
        <CloudinaryModal video={playing} onClose={() => setPlaying(null)} />
      )}

      <div className="app-shell">
        <Navbar goToPage={goToPage} />

        {/* key={pathname} triggers the page-enter fade animation on every route change */}
        <main key={location.pathname} className="page-enter">
          <Routes>
            <Route path="/"             element={<HomePage         {...sharedProps} />} />
            <Route path="/work"         element={<WorkPage         {...sharedProps} />} />
            <Route path="/capabilities" element={<CapabilitiesPage {...sharedProps} />} />
            <Route path="/production"   element={<ProductionPage   {...sharedProps} />} />
            <Route path="/education"    element={<EducationPage    {...sharedProps} />} />
            <Route path="/about"        element={<AboutPage        {...sharedProps} />} />
            <Route path="/contact"      element={<ContactPage      {...sharedProps} />} />
            {/* Catch-all → home */}
            <Route path="*"             element={<HomePage         {...sharedProps} />} />
          </Routes>
        </main>

        <Footer setPage={goToPage} />
        <WhatsAppFloat />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
