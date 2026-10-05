import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './about/About.css';
import './Contact.css';
import './Home.css';

const Contact = () => {
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
        message: formData.message || 'No additional message',
      };

      emailjs.send(
        'service_i28qwi9',
        'template_fl58c1b',
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
        /* Contact Section */
        <div className='contactIn'>
                <div className="card-c">
                    
                </div>

            
            <section id="contact" className="contact">
                  <div className="container">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                    <h2 className="contact-title" style={{color: ""}}>Contact <span className="text-gradient">Us</span>
                    </h2>
                    </motion.div>
                    
                    <div className="contact-content">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                      >
                      <div className="contact-info">
                        <h3>Let's Collaborate</h3>
                        <p>
                          We believe every child carries a vision waiting to be nurtured. Whether it’s academic excellence, creative expression, or personal growth, our mission is to provide the environment and guidance that help students realize their full potential.  
                          
                          We specialize in transforming curiosity into knowledge, and ideas into achievements. Through engaging lessons, supportive teachers, and a vibrant community, we create meaningful learning experiences that prepare students for the future.  
                          <br/>
                          📚 Let’s connect, together we can explore your child’s goals and craft an educational journey that not only meets expectations but inspires them to exceed them.
 

                        </p>
                        <div className="contact-details">
                          <div className="contact-item">
                            <strong>Official School Contact:</strong> <a href="mailto:admin@anointedschoolng.com"
                            className='contact-link'>admin@anointedschoolng.com</a>
                          
                          </div>
                          <div className="contact-item">
                            <strong>Our Whatsapp:</strong> <a
                                href="https://wa.me/2347067949228"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='contact-link'
                              >
                              +234 70 679 492 28
                            </a>
                          </div>
                          <div className="contact-item">
                            <strong>General Enquiries:</strong> <a href="mailto:nkechi.okogbue@anointedschoolng.com"
                            className='contact-link'>nkechi.okogbue@anointedschoolng.com</a>
                          </div>
                        </div>
                      </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <form class='formx' onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                          <input name="name"     placeholder="Full Name"     value={formData.name}     onChange={handleChange} required />
                          <input name="email"    type="email" placeholder="Email Address" value={formData.email}    onChange={handleChange} required />
                          <input name="phone"    placeholder="Phone Number"  value={formData.phone}    onChange={handleChange} required />
                          <input name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} />
                          
                          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
                            <option value="">Select Interest</option>
                            <option value="7-12">I'm applying for Job</option>
                            <option value="13-25">I want to enroll as a student</option>
                            <option value="26-70">I want to enroll a student</option>
                            <option value="26-70">Enquiries</option>
                          </select>

                          <textarea name="message" placeholder="Any additional notes..." value={formData.message} onChange={handleChange} rows="4" />

                          <button type="submit" style={{ padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: "bold" }}>
                            Send Interest
                          </button>

                          {status && <p style={{ textAlign: 'center', marginTop: '12px', color: status.includes('sent') ? 'green' : 'red', fontWeight: "bold"  }}>{status}</p>}
                        </form>
                      </motion.div>
                    </div>
                  </div>
            
                </section>
        </div>
    );
};

export default Contact;