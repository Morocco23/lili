import { useState } from "react";
import "./AboutSchool.css";
import founder from "./founder.png";
import { Link } from "react-router-dom";
const AboutSchool = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What age groups does the school accept?",
      answer:
        "The Anointed International School welcomes learners across different age groups and academic levels. Please contact the school for current admission classes and age requirements.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "Our curriculum combines a strong academic foundation with practical learning, creativity, character development, technology, and skills that prepare students for the future.",
    },
    {
      question: "How can I enroll my child?",
      answer:
        "Parents and guardians can contact the school directly or visit the admissions section of the website to begin the enrollment process.",
    },
    {
      question: "Does the school provide extracurricular activities?",
      answer:
        "Yes. Students are encouraged to participate in activities that develop creativity, teamwork, leadership, communication, sportsmanship, and other valuable life skills.",
    },
    {
      question: "How does the school support individual students?",
      answer:
        "We recognize that every child learns differently. Our teachers provide guidance, encouragement, and learning support designed to help every student discover and develop their potential.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="school-about">

      {/* =========================
          HERO
      ========================== */}
      <section className="school-about-hero">
        <div className="school-about-container">

          <div className="school-about-hero-content">
            <span className="school-about-eyebrow">
              THE ANOINTED INTERNATIONAL SCHOOL
            </span>

            <h1>
              Raising <span>Excellence</span>,
              <br />
              Building <span>Character</span>.
            </h1>

            <p>
              A learning community committed to nurturing confident,
              knowledgeable, disciplined, and purpose-driven young people.
            </p>

            <a href="#founders-message" className="school-about-btn">
              Discover Our Story
              <span>→</span>
            </a>
          </div>

          <div className="school-about-hero-shape">
            <div className="hero-orbit hero-orbit-one"></div>
            <div className="hero-orbit hero-orbit-two"></div>

            <div className="hero-glass-card">
              <span>EST.</span>
              <strong>EXCELLENCE</strong>
              <small>• EDUCATION • CHARACTER • PURPOSE •</small>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          FOUNDERS MESSAGE
      ========================== */}
      <section
        id="founders-message"
        className="school-section founders-section"
      >
        <div className="school-about-container">

          <div className="founder-image-wrapper">
            <div className="founder-image-glow"></div>

            <div className="founder-image-frame">
              <img
                src={founder}
                alt="Founder of The Anointed International School"
              />
            </div>

            <div className="founder-badge">
              <span>FOUNDER</span>
              <strong>Pst. Mrs Abigail</strong>
            </div>
          </div>

          <div className="founder-message">

            <span className="section-label">
              A MESSAGE FROM OUR FOUNDER
            </span>

            <h2>
              Every child has a
              <span> purpose.</span>
            </h2>

            <p>
              At The Anointed International School, we believe that education
              goes beyond textbooks, examinations, and certificates. Every
              child carries unique abilities, dreams, and potential that
              deserve to be discovered and nurtured.
            </p>

            <p>
              Our responsibility is to create an environment where students
              feel valued, challenged, supported, and inspired to become the
              best version of themselves. We combine academic excellence with
              character, discipline, creativity, and practical skills.
            </p>

            <p>
              We are committed to raising young people who are not only
              prepared for academic success, but who are also equipped to
              make meaningful contributions to their families, communities,
              and the world.
            </p>

            <div className="founder-signature">
              <strong>Our Motto</strong>
              <span><i>Build Future Champions</i></span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          VISION & MISSION
      ========================== */}
      <section className="school-section vision-section">
        <div className="school-about-container">

          <div className="section-heading centered">
            <span className="section-label">OUR FOUNDATION</span>

            <h2>
              Guided by <span>Purpose</span>
            </h2>

            <p>
              Everything we do is driven by our commitment to developing
              learners who are prepared for both today and tomorrow.
            </p>
          </div>

          <div className="vision-grid">

            <article className="vision-card">
              <div className="vision-icon">◈</div>

              <span>OUR VISION</span>

              <h3>
                Inspiring a generation of exceptional learners.
              </h3>

              <p>
                To become a leading educational institution recognized for
                academic excellence, character development, innovation, and
                the holistic growth of every learner.
              </p>
            </article>


            <article className="vision-card mission-card">
              <div className="vision-icon">✦</div>

              <span>OUR MISSION</span>

              <h3>
                Education that develops the whole child.
              </h3>

              <p>
                To provide a safe, inspiring, and supportive learning
                environment where students receive quality education,
                develop strong values, discover their abilities, and acquire
                the skills required to succeed in an ever-changing world.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =========================
          CURRICULUM
      ========================== */}
      <section className="school-section curriculum-section">

        <div className="school-about-container">

          <div className="curriculum-intro">

            <div className="section-heading">
              <span className="section-label">
                OUR CURRICULUM
              </span>

              <h2>
                Learning that goes
                <span> beyond the classroom.</span>
              </h2>

              <p>
                Our approach to education combines academic knowledge,
                practical experiences, creativity, technology, and character
                development to prepare students for a changing world.
              </p>
            </div>

          </div>


          <div className="curriculum-grid">

            <article className="curriculum-card">
              <div className="curriculum-number">01</div>
              <h3>Academic Excellence</h3>
              <p>
                Strong foundations in core academic subjects with emphasis
                on understanding, critical thinking, and problem solving.
              </p>
            </article>

            <article className="curriculum-card">
              <div className="curriculum-number">02</div>
              <h3>Technology & Digital Skills</h3>
              <p>
                Introducing learners to technology and digital tools that
                prepare them for the opportunities of the modern world.
              </p>
            </article>

            <article className="curriculum-card">
              <div className="curriculum-number">03</div>
              <h3>Creativity & Innovation</h3>
              <p>
                Students are encouraged to explore ideas, create solutions,
                express themselves, and approach challenges creatively.
              </p>
            </article>

            <article className="curriculum-card">
              <div className="curriculum-number">04</div>
              <h3>Character & Leadership</h3>
              <p>
                We intentionally develop responsibility, discipline,
                integrity, confidence, teamwork, and leadership.
              </p>
            </article>

            <article className="curriculum-card">
              <div className="curriculum-number">05</div>
              <h3>Practical Learning</h3>
              <p>
                Learners are exposed to activities and experiences that help
                them connect classroom knowledge with real-world situations.
              </p>
            </article>

            <article className="curriculum-card">
              <div className="curriculum-number">06</div>
              <h3>Personal Development</h3>
              <p>
                We support students in developing communication, confidence,
                collaboration, emotional awareness, and lifelong learning
                habits.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* =========================
          FAQ
      ========================== */}
      <section className="school-section faq-section">

        <div className="school-about-container">

          <div className="section-heading centered">

            <span className="section-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Questions?
              <span> We've got answers.</span>
            </h2>

            <p>
              Find answers to some of the questions parents and guardians
              commonly ask about our school.
            </p>

          </div>


          <div className="faq-container">

            {faqs.map((faq, index) => (

              <div
                className={`faq-item ${
                  openFaq === index ? "faq-open" : ""
                }`}
                key={index}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >

                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="school-cta">

        <div className="school-about-container">

          <div className="cta-content">

            <span className="section-label">
              YOUR CHILD'S FUTURE STARTS HERE
            </span>

            <h2>
              Let's nurture their
              <span> potential together.</span>
            </h2>

            <p>
              Join a community committed to academic excellence, character,
              creativity, and purpose.
            </p>

            <Link to="/contact" >
            <a href="#contact" className="school-about-btn">
                 
              Get in Touch
              <span>→</span>
            </a>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AboutSchool;