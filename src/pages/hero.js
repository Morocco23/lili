import "./hero.css";
import { motion } from 'framer-motion';
import pic1 from "./pic1.jpeg";
const Hero = () => {
  return (
    <div className="afrik-hero">

      <div className="afrik-hero-img-div">
        {/* Replace with a real image of your institute, students learning languages, world map, or diverse group */}
        <img 
          src={pic1}
          alt="Students learning languages at Lisboa International" 
        />
        <div>
          <h1>Unlock the World Through Language</h1>
          <p>Master English, French, Spanish, German, Yoruba, Igbo, Hausa, and Gun — from age 7 to 70. Join Lisboa International Learning Institute in Abuja today.</p>
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="l-2"
            >
              <h1>
                The Anointed International <br />
                School <br />
                Premium Programs
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="l-3"
            >
              <div>
                <h3 style={{ color: '#c2d0ff'}}>World-Class Language Mastery</h3>
                <p>
                  Expert-led courses in 8 powerful languages: English, French, Spanish, German, Yoruba, Igbo, Hausa, and Gun.<br />
                  Our programs build fluency, cultural confidence, and real-world communication skills for school, work, travel, or personal growth.<br />
                  Designed for every age, fun for kids, exam-focused for youth, practical for adults.
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
                  Build fluency and cultural understanding across continents.
                </p>
                <p>
                  Prepare for exams (IELTS, DELF, DELE, Goethe), business, migration, or daily conversation.
                </p>
                <p>
                  Clean, engaging classes — no gimmicks, just proven results and supportive teachers.
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