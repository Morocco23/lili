import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import  logoa  from "./logo.png"
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  const contactInfo = [
    {
      icon: <lord-icon
                  src="https://cdn.lordicon.com/srsgifqc.json"
                  trigger="loop"
                  colors={`primary:'#2544A3',secondary:'#9B4416'`}
                  style={{width: '20px', height: '20px'}}
                />,
      href: 'tel:+2347067949228',
      text: '+234 70 67 949 28',
      type: 'tel'
    },
    {
      icon: <lord-icon
                  src="https://cdn.lordicon.com/diihvcfp.json"
                  trigger="loop"
                  colors={`primary:'#2544A3',secondary:'#9B4416'`}
                  style={{width: '20px', height: '20px'}}
                />,
      href: 'mailto:builders.tech280@gmail.com',
      text: 'anointedschool@gmail.com',
      type: 'email'
    },
    {
      icon: <lord-icon
                  src="https://cdn.lordicon.com/surcxhka.json"
                  trigger="loop"
                  colors={'primary:"#2544A3",secondary:"#9B4416"'}
                  style={{width: '20px', height: '20px'}}
                />,
      href: 'https://maps.app.goo.gl/QqNWGUwkrEKrU5ai7',
      text: 'Gonin-Gora Kaduna',
      type: 'link'
    }
  ];

  const socialLinks = [
    {
      platform: 'Facebook',
      href: 'https://www.facebook.com/share/12LVLJJa8pP/',
      icon: <i className='bi bi-facebook'></i>,
      className: 'facebook'
    },
    {
      platform: 'Instagram',
      href: 'https://www.instagram.com/builders_tech3/',
      icon: <i className='bi bi-instagram'></i>,
      className: 'instagram'
    },
    {
      platform: 'LinkedIn',
      href: 'https://www.linkedin.com/in/builders-tech-966139276/',
      icon: <i className='bi bi-linkedin'></i>,
      className: 'linkedin'
    },
    {
      platform: 'TikTok',
      href: 'https://www.tiktok.com/@builderstech1?is_from_webapp=1&sender_device=pc',
      icon: <i className='bi bi-tiktok'></i>,
      className: 'tiktok'
    }
  ];

  const services = [
    { name: 'Creche', href: '#architecture' },
    { name: 'Nursery', href: '#it-solutions' },
    { name: 'Primary', href: '#printing' },
    { name: 'Junior Secondary', href: '#academics' },
    { name: 'Senior Secondary', href: '#consulting' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/gallery' },
  ];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleSocialClick = (platform) => {
    console.log(`Social media click: ${platform}`);
  };

  const handleContactClick = (type, text) => {
    console.log(`${type} clicked:`, text);
  };

  const copyToClipboard = async (text, element) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = element.textContent;
      element.textContent = 'Copied!';
      element.style.color = 'var(--primary-gold)';
      
      setTimeout(() => {
        element.textContent = originalText;
        element.style.color = '';
      }, 1500);
    } catch (err) {
      console.log('Could not copy text: ', err);
    }
  };

  const handleContactDoubleClick = (e, text) => {
    e.preventDefault();
    copyToClipboard(text, e.currentTarget);
  };

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="logo">
            <div className="logo-icon-ais">
              <img src={ logoa } alt='logo' style={{width: '60px', height: '60px'}}/>
            </div>
            <span className="logo-text" style={{marginLeft: '10px'}} translate='no'>AIS</span>
          </div>
            <p className="company-description">
              Excellence in Solutions and Academic services. 
              Building tomorrow's solutions today.
            </p>
            <div className="company-tagline">
              <span className="tagline">Educate • Innovate • Build</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section services">
            <h4 className="footer-heading">Our Classes</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    onClick={(e) => handleSmoothScroll(e, service.href)}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section fcontact">
            <h4 className="footer-heading">Contact Info</h4>
            {contactInfo.map((contact, index) => (
              <div key={index} className="fcontact-item">
                <span className="fcontact-icon">{contact.icon}</span>
                <a 
                  href={contact.href}
                  className="fcontact-link"
                  target={contact.type === 'link' ? '_blank' : undefined}
                  rel={contact.type === 'link' ? 'noopener noreferrer' : undefined}
                  onClick={() => handleContactClick(contact.type, contact.text)}
                  onDoubleClick={(e) => handleContactDoubleClick(e, contact.text)}
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>

          {/* Social Media & Quick Links Section */}
          <div className="footer-section social-quick">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.className}`}
                  title={social.platform}
                  onClick={() => handleSocialClick(social.platform)}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <div className="quick-links">
              <h5 className="quick-links-title">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                        onClick={
                          () => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                      }
                      to={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} The Anointed international School. All rights reserved.</p>
            </div>
            <div className="footer-nav">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;