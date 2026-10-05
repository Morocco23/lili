import "./hero.css";
import { motion } from 'framer-motion';
import pic1 from "./s2.png";
const Hero = () => {
  return (
    <div className="afrik-hero">

      <div className="afrik-hero-img-div">
        {/* Replace with a real image of your institute, students learning languages, world map, or diverse group */}
        <img 
          src={pic1}
          alt="Students learning languages at AIS" 
        />
        <div>
          <h1>Unlock the World Through Education</h1>
          <p>Master Academic and Moral Excellence Today in Kaduna today.</p>
        </div>
      </div>

      <div className="afrik-body">
        <section className="sec-x">

          <div className="left">

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="l-1"
            >
              <i className="bi-layout-wtf"></i>
              <div>INTRODUCTION</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="l-2"
            >
              <h1>
                The Anointed International
                School
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="l-3"
            >
              <div>
                <h3 style={{ color: '#c2d0ff'}}>World-Class Academic Services</h3>
                <p>
                We provide quality Primary and Secondary education that empowers students to excel academically and grow in character.<br />
                Our curriculum fosters critical thinking, creativity, leadership, and strong moral values in a nurturing learning environment.<br />
                </p>
              </div>
            </motion.div>

          </div>

          <div className="right">
            <div className="right-top-align">
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="r-1"
              >
                <p>
                At Anointed International School, we provide a nurturing and inspiring environment where students develop academically, socially, and morally.
                </p>
                <p>
                Our Primary and Secondary School programs are designed to build strong foundations in knowledge, critical thinking, creativity, and leadership.
                </p>
                <p>
                Dedicated teachers, , modern learning approaches, and a commitment to excellence
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: "center center" }}
                className="r-2"
              >
                <div>Learn More</div>
                <i className="bi bi-arrow-up-right"></i>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="r-3"
            >
              <div>
                <h3>
                  Proven Results <br />
                  Experience. Excellence. Confidence.
                </h3>

                <div><br />
                  The Anointed International School is committed to transparent, effective, and joyful education.
                </div>

                <motion.div 
                  initial={{ opacity: 1, y: 50, scale: 0 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformOrigin: "center left" }} 
                >
                  <div>Start Learning</div>
                  <i className="bi bi-arrow-up-right"></i>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </section>
      </div>

    </div>
  );
};

export default Hero;