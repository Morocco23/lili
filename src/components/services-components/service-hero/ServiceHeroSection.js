import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ServiceHeroSection.css';

const HeroSection = () => {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (orbRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 200;
        const yPos = (clientY / innerHeight - 0.5) * 200;
        
        orbRef.current.style.transform = `translate(-50%, -50%) translate(${xPos}px, ${yPos}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
      
      <div className="spline-orb" ref={orbRef}>
        <div className="orb-core">
          <div className="orb-ring orb-ring-1"></div>
          <div className="orb-ring orb-ring-2"></div>
          <div className="orb-ring orb-ring-3"></div>
          <div className="orb-center"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              We <span className="text-gradient">Educate</span>,<br />
              We <span className="pur">Transform</span>,<br />
              We <span className="text-gradient">Innovate</span>.
            </h1>
            <p className="hero-subtitle">
              Building and Transforming Lives
            </p>
          </motion.div>

        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <lord-icon
          src="https://cdn.lordicon.com/wjyqkiew.json"
          trigger="loop"
          delay="1000"
          colors={`primary:"#a01616",secondary:"#3f16a0"`}
          style={{width: '24px', height: '24px'}}
        />
      </div>
    </section>
  );
};

export default HeroSection;