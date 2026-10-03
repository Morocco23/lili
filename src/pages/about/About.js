import { motion } from 'framer-motion';
import './About.css';
import ImageCeo from "../images/propietress.png";
import ImageCto from "../images/sup.png";
import ImageLa from "../images/principal.png";
import ImageCf from "../images/ht.png";
import ImageGd from "../images/exams.png";
import logo from "../logo.png";
import OurStory from './OurStory';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Pst Mrs Abigail Daniel',
      role: 'CEO & Founder',
      image: ImageCeo,
      description: 'Visionary leader with 15+ years in architecture and technology.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'dayodaniella@gmail.com'
      },
      isCEO: true
    },
    {
      id: 2,
      name: 'Mrs. Adebisi',
      role: 'Administrator',
      image: ImageCf,
      description: 'Passionate Business Leader.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'oshim2995@gmail.com'
      },
      isCOCEO: true
    },
    {
      id: 3,
      name: 'Miss Nkechi',
      role: 'Principal',
      image: ImageLa,
      description: 'Award-winning Enterprnuer in sustainable solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nkemchi37@gmail.com '
      }
    },
    {
      id: 4,
      name: 'Mr. Daniel Eniola',
      role: 'CTO and Supervisor',
      image: ImageCto,
      description: 'Cloud infrastructure expert.',
      social: {
        linkedin: 'https://www.linkedin.com/in/eniola-daniel-595031281/',
        twitter: 'https://x.com/EniolaD64447076',
        email: 'eniolad206@gmail.com'
      }
    },
    {
      id: 5,
      name: 'Honourable Ayobami',
      role: 'Examination Officer',
      image: ImageGd,
      description: 'Creative professional with expertise in Goverment and Administration',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jacksonsenior998@gmail.com'
      }
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
    <>
    {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-content"
          >
            <div className="about-hero-icon">
              <img src={logo} alt="logo"
                style={{width: '150px', height: '150px'}}
              />
            </div>
            <h1 className="about-hero-title">
              Built on <span className="text-gradient">Christ</span>,<br />
              Driven by <span className="text-gradient">Excellence</span>
            </h1>
            <p className="about-hero-subtitle">
              We are a passionate team of Educator, Philosophers, and Scientist 
              committed to transforming ideas into extraordinary realities.
            </p>
          </motion.div>
        </div>
      </div>
      

      <div className="about-page">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="service-card">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mission-content"
          >
            <div className="logo" style={{ justifyContent: 'center'}}>
              <div className="logo-icon-ab">
                <img src={logo} alt='logo' />
              </div>
               <span className="logo-text \mission-title">The Anointed International School</span>
          </div>
            <p className="mission-text">
              At Builder's Tech, we bridge the gap between imagination and reality. 
              Our mission is to deliver innovative architectural solutions, cutting-edge 
              IT services, and premium printing experiences that exceed expectations 
              and drive success for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story-content"
          >
            <h2 className="story-title">Our <span className="text-gradient">Story</span></h2>
            {/* Story trial section */}
            <div className='story-timeline'>
              <OurStory />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="team-header"
          >
            <h2 className="team-title">Meet Our <span className="text-gradient">Team</span></h2>
            <p className="team-subtitle">
              The talented individuals who made Anointed a leader in Education
            </p>
          </motion.div>

          {/* CEO Section - Separate and Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            viewport={{ once: true }}
            className="ceo-section"
          >
            {teamMembers.filter(member => member.isCEO).map((ceo) => (
              <div key={ceo.id} className="ceo-card glassmorphism">
                <div className="ceo-image">
                  <img src={ceo.image} alt={ceo.name} />
                </div>
                <div className="ceo-info">
                  <h3 className="ceo-name">{ceo.name}</h3>
                  <p className="ceo-role">{ceo.role}</p>
                  <p className="ceo-description">{ceo.description}</p>
                  <div className="ceo-social">
                    <a href={ceo.social.linkedin} rel="noreferrer" className="social-link-t" target='_blank'>
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href={ceo.social.twitter} rel="noreferrer"  className="social-link-t" target='_blank'>
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href={`mailto:${ceo.social.email}`} rel="noreferrer"  className="social-link-t" target='_blank'>
                      <i class="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* CO Founder Section - Separate and sub-Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            viewport={{ once: true }}
            className="ceo-section"
          >
            {teamMembers.filter(member => member.isCOCEO).map((ceo) => (
              <div key={ceo.id} className="ceo-card glassmorphism">
                <div className="ceo-image">
                  <img src={ceo.image} alt={ceo.name} />
                </div>
                <div className="ceo-info">
                  <h3 className="ceo-name">{ceo.name}</h3>
                  <p className="ceo-role">{ceo.role}</p>
                  <p className="ceo-description">{ceo.description}</p>
                  <div className="ceo-social">
                    <a href={ceo.social.linkedin} rel="noreferrer"  className="social-link-t" target='_blank'>
                      <i class="bi bi-linkedin"></i>
                    </a>
                    
                    <a href={`mailto:${ceo.social.email}`} rel="noreferrer"  className="social-link-t" target='_blank'>
                      <i class="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Rest of Team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="team-grid"
          >
            {teamMembers.filter(member => !member.isCEO && !member.isCOCEO).map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="team-card glassmorphism"
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href={member.social.linkedin} rel="noreferrer"  className="social-link-t" target='_blank'>
                        <i class="bi bi-linkedin"></i>
                      </a>
                      
                      <a href={`mailto:${member.social.email}`} rel="noreferrer"  className="social-link-t" target='_blank'>
                        <i class="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
    </> 
  );
};

export default About;