import { useState } from 'react';
import Modal from './Modal';   // ← assuming you have Modal.jsx already

const flagMap = {
  English: "🇬🇧",
  French:  "🇫🇷",
  Spanish: "🇪🇸",
  German:  "🇩🇪",
  Yoruba:  "🇳🇬",
  Igbo:    "🇳🇬",
  Hausa:   "🇳🇬",
  Gun:     "🇧🇯",
};

export default function LanguageCard({ lang, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="language-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="language-card-image">
          {flagMap[lang] || "🌍"}
        </div>
        
        <div className="language-card-content">
          <h3>{lang}</h3>
          <p>{desc}</p>
          <button className="learn-more-btn">
            Learn more →
          </button>
        </div>
      </div>

      <Modal 
        open={isOpen} 
        onClose={() => setIsOpen(false)} 
        title={lang}
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          {desc}
        </p>
        
        <button 
          onClick={() => window.open('YOUR_GOOGLE_FORM_ENROLL_LINK_HERE', '_blank')}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Enroll in {lang} Now
        </button>
      </Modal>
    </>
  );
}