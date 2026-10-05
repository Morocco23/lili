import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './MotionOrb.css';
import { FaGlobe } from 'react-icons/fa'; // Changed icon to globe for languages/world theme

const MotionOrb = () => {
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (orbRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.05;
        const deltaY = (e.clientY - centerY) * 0.05;
        
        orbRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="motion-orb-section" ref={containerRef}>
      <div className="container">
        <div className="orb-container">
          <motion.div
            className="interactive-orb"
            style={{ y, rotate, scale }}
            ref={orbRef}
          >
            <div className="orb-layers">
              <div className="orb-layer orb-layer-1"></div>
              <div className="orb-layer orb-layer-2"></div>
              <div className="orb-layer orb-layer-3"></div>
              <div className="orb-core-center">
                <div className="logo-icon">
                  <FaGlobe size={32} /> {/* Globe icon better represents languages & global reach */}
                </div>
              </div>
            </div>
            
            <div className="orb-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="orb-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="orb-title">
              Master Excellence at <span className="text-gradient">AIS Institute</span>
            </h3>
            <p className="orb-description">
              At Anointed School, we are committed to nurturing young minds through quality education, strong moral values, and a supportive learning environment. Our Primary and Secondary School programs are designed to help students achieve academic excellence, develop critical thinking skills, and build the confidence needed to succeed in an ever-changing world. Join our vibrant school community and give your child the foundation for a bright and successful future.
            </p>
            <div className="orb-stats">
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Students enrolled</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Branches</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Staffs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotionOrb;