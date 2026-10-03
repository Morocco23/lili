import React from 'react';
import { motion } from 'framer-motion';
import './ServiceHighlights.css';
import { Link, useLocation } from 'react-router-dom';
import arch from './images/Architecture.png';
import IT from "./images/IT.jpg";
import aca from './images/Academics.png';
import pp from "./images/shirt.png";

const ServiceHighlights = () => {
  const services = [
    {
      id: 1,
      title: 'Architecture',
      description: 'Revolutionary architectural designs that blend innovation with functionality. Our award-winning architects create spaces that inspire, utilizing cutting-edge sustainable technologies and timeless design principles. From residential masterpieces to commercial landmarks, we transform your vision into architectural excellence.',
      icon: 'https://cdn.lordicon.com/gmzxduhd.json',
      features: ['3D Modeling', 'Blueprint Design', 'Interior Planning', 'Structural Analysis'],
      image: arch
    },
    {
      id: 2,
      title: 'IT Solutions',
      description: 'Cutting-edge technology solutions that propel your business into the digital future. Our expert team delivers robust, scalable systems that streamline operations, enhance security, and drive growth. From cloud migration to AI implementation, we provide comprehensive IT services.',
      icon: 'https://cdn.lordicon.com/qhviklyi.json',
      features: ['Web Development', 'Software Solutions', 'Cloud Services', 'Automation'],
      image: IT
    },
    {
      id: 3,
      title: 'Printing Press',
      description: 'Premium printing solutions that bring your ideas to life with exceptional quality and precision. From corporate materials to large-format displays, our state-of-the-art equipment and expert craftsmanship ensure every project exceeds expectations and makes a lasting impression.',
      icon: 'https://cdn.lordicon.com/wloilxuq.json',
      features: ['Digital Printing', 'Large Format', 'Book Publishing', 'Brand Materials'],
      image: pp
    },
    {
      id: 4,
      title: 'Academics',
      description: 'Transform educational experiences with our comprehensive academic solutions. We provide innovative learning platforms, curriculum development, and educational technology that empowers institutions to deliver world-class education and achieve exceptional student outcomes.',
      icon: 'https://cdn.lordicon.com/wloilxuq.json',
      features: ['Digital Printing', 'Large Format', 'Book Publishing', 'Brand Materials'],
      image: aca
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="service-highlights section">
      <div >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header con"
        >
          <h2 className="section-title">Our <span className="text-gradient">Exceptional Services</span></h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="service-card"
              whileHover={{ 
                y: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                <lord-icon
                  src={service.icon}
                  trigger="loop"
                  colors={`primary:"#a01616",secondary:"#3f16a0"`}
                  style={{width: '60px', height: '60px'}}
                />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <lord-icon
                      src="https://cdn.lordicon.com/oqdmuxru.json"
                      trigger="loop"
                      colors={`primary:"#ff00ff",secondary:"#ffff00"`}
                      style={{width: '16px', height: '16px'}}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div style={{display: 'flex', gap: '10px',  justifyContent: 'center'}}>
                
              <Link 
                onClick={
                      () => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                  }
                to="/contact" 
                
              >
              <button className="service-btn">
                Request Service
                <lord-icon
                  src="https://cdn.lordicon.com/wjyqkiew.json"
                  trigger="hover"
                  colors={`primary:"#ff00ff",secondary:"#ffff00"`}
                  style={{width: '16px', height: '16px'}}
                />
              </button>
            </Link>
              
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;