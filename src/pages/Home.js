import { useState } from 'react';

import emailjs from '@emailjs/browser';
import MotionOrb from './MotionOrb';
import "./Home.css"
import Hero from './hero';


export default function Home() {

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

      {/* rest of sections – update texts with t('key') */}
      
      <section className="enroll">
        <h2>Building Future Champions!</h2>
        {/* ... */}
      </section>

      <section id="programs" className="programs">
        <h2>Raising Holistic Champions!</h2>
        {/* use t('kids'), t('youth'), t('adults') */}
      </section>
    </>
  );
}