import { useState } from 'react';
// import LanguageCard from '../components/LanguageCard';
import { useTranslation } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import MotionOrb from './MotionOrb';
import "./Home.css"
import Hero from './hero';

// const languagesData = (t) => [
//   { lang: "English", desc: t('English_desc') },
//   { lang: "French",  desc: t('French_desc') },
//   // add others with t('Spanish_desc') etc.
// ];

export default function Home() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', whatsapp: '', ageGroup: '', language: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      ageGroup: formData.ageGroup,
      language: formData.language,
      message: formData.message || 'No additional message',
    };

    emailjs.send(
      'service_z14pwjr',
      'template_vrn287l',
      templateParams,
      'fMd4EE_o3lXzMU45p'
    )
      .then(() => {
        setStatus('Message sent! We will contact you soon.');
        setFormData({ name:'', email:'', phone:'', whatsapp:'', ageGroup:'', language:'', message:'' });
      })
      .catch((err) => {
        console.error(err);
        setStatus('Failed to send. Please try again.');
      });
  };

  return (
    <>
        
        <Hero />
        <MotionOrb />

      {/* <section className="hero">
        <div className="hero-container">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
          <a href="#enroll">{t('startTrial')}</a>
        </div>
      </section> */}

      {/* <section id="languages" className="languages">
        <h2>{t('ourLanguages')}</h2>
        <div className="languages-grid">
          {languagesData(t).map((item, i) => (
            <LanguageCard key={i} lang={item.lang} desc={item.desc} />
          ))}
        </div>
      </section> */}

      {/* Interest Form */}
      <p id="enow" style={{height : "30px", width: "2px"}}></p>
      <section id="interest" style={{ maxWidth: '600px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Express Your Interest</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          <input name="name"     placeholder="Full Name"     value={formData.name}     onChange={handleChange} required />
          <input name="email"    type="email" placeholder="Email Address" value={formData.email}    onChange={handleChange} required />
          <input name="phone"    placeholder="Phone Number"  value={formData.phone}    onChange={handleChange} required />
          <input name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} />
          
          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
            <option value="">Select Age Group</option>
            <option value="7-12">7–12 years</option>
            <option value="13-25">13–25 years</option>
            <option value="26-70">26–70 years</option>
          </select>

          <select name="language" value={formData.language} onChange={handleChange} required>
            <option value="">Interested Language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Igbo">Igbo</option>
            <option value="Hausa">Hausa</option>
            <option value="Gun">Gun</option>
          </select>

          <textarea name="message" placeholder="Any additional notes..." value={formData.message} onChange={handleChange} rows="4" />

          <button type="submit" style={{ padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px' }}>
            Send Interest
          </button>

          {status && <p style={{ textAlign: 'center', marginTop: '12px', color: status.includes('sent') ? 'green' : 'red' }}>{status}</p>}
        </form>
      </section>

      {/* rest of sections – update texts with t('key') */}
      
      <section className="enroll">
        <h2>{t('tryLiveLesson')}</h2>
        {/* ... */}
      </section>

      <section id="programs" className="programs">
        <h2>{t('programTitle')}</h2>
        {/* use t('kids'), t('youth'), t('adults') */}
      </section>

      <footer>
        <p>{t('footer')}</p>
      </footer>
    </>
  );
}