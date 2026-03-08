import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';   // ← new imports from react-icons
import { useTranslation } from '../context/LanguageContext';
import { languages } from '../i18n';
import "./Navbar.css"

export default function Navbar() {
  const { lang, setLang, t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div>L</div>
          <div>
            <h1>Lisboa</h1>
            <p>International Learning Institute</p>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="navbar-links">
          <a href="#languages">{t('ourLanguages')}</a>
          <a href="#programs">{t('programTitle')}</a>
          <a href="#enroll">Enroll Now</a>

          {/* Language switcher - desktop */}
          <div className="lang-switcher">
            {Object.values(languages).map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={lang === l.code ? 'active' : ''}
              >
                {l.flag} {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar-mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <a
          href="#languages"
          onClick={() => setMobileOpen(false)}
        >
          {t('ourLanguages')}
        </a>
        <a
          href="#programs"
          onClick={() => setMobileOpen(false)}
        >
          {t('programTitle')}
        </a>
        <a
          href="#enroll"
          onClick={() => setMobileOpen(false)}
        >
          Enroll Now
        </a>

        {/* Language switcher - mobile */}
        <div className="lang-switcher-mobile">
          {Object.values(languages).map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setMobileOpen(false);
              }}
              className={lang === l.code ? 'active' : ''}
            >
              {l.flag} {l.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}