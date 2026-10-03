import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from "./logo.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon-x">
              <img src={logo} alt='logo'/>
            </div>
            <span className="logo-text" translate='no'>AIS</span>
          </div>
          <div className="hamburger" onClick={(e) => {
              toggleMenu(); // React state function
              e.currentTarget.classList.toggle("active"); // Adds/removes 'active' class
            }}>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
            onClick={(e) => {
                
                setIsMenuOpen(false);
                if (window.innerWidth < 768) {
                  document.getElementsByClassName('hamburger')[0].classList.toggle("active")
                }
                }}
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link 
            onClick={() => {
                setIsMenuOpen(false);
                if (window.innerWidth < 768) {
                  document.getElementsByClassName('hamburger')[0].classList.toggle("active")
                }
              }
                
              }
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </Link>
            <Link 
            onClick={() => {
                
                setIsMenuOpen(false);
                
                if (window.innerWidth < 768) {
                  document.getElementsByClassName('hamburger')[0].classList.toggle("active")
                }}}
              to="/services" 
              className={location.pathname === '/services' ? 'nav-link active' : 'nav-link'}
            >
              School life
            </Link>
            <Link 
            onClick={() => {
                
                setIsMenuOpen(false);
                
                if (window.innerWidth < 768) {
                  document.getElementsByClassName('hamburger')[0].classList.toggle("active")
                }}}
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}
            >
              Gallery
            </Link>
            
            <Link 
              onClick={() => {
                
                setIsMenuOpen(false);
                

                if (window.innerWidth < 768) {
                  document.getElementsByClassName('hamburger')[0].classList.toggle("active")
                }}}
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;