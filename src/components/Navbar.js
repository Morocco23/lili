import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';   // ← new imports from react-icons
import "./Navbar.css";
import logoi  from "./logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div>
            <img src={logoi} alt="logo"/>
          </div>
          <div>
            <h1>The Anointed International School</h1>
            <p>Building future champions</p>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="navbar-links">
          <a href="#languages">nav1</a>
          <a href="#programs">nav1</a>
          <a href="#enow">Enroll Now</a>
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
          navm1
        </a>
        <a
          href="#programs"
          onClick={() => setMobileOpen(false)}
        >
           navm2
        </a>
        <a
          href="#enow"
          onClick={() => setMobileOpen(false)}
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
}