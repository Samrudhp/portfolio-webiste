import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/mockData';
import './Footer.css';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-subtitle">
              Reach out for collaborations, opportunities, or just to say hi!
            </p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? '✓ Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </div>
          
          <div className="footer-section">
            <h3 className="social-title">Knowledge Graph Extension</h3>
            <p className="social-subtitle">Connect through multiple channels</p>
            
            <div className="social-network">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-node"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="social-icon" style={{ 
                    color: link.color,
                    borderColor: link.color,
                    background: `${link.color}15`,
                    boxShadow: `0 0 20px ${link.color}40`
                  }}>
                    {link.icon}
                  </div>
                  <div className="social-label">{link.name}</div>
                </motion.a>
              ))}
            </div>
            
            <div className="social-connections">
              <svg width="100%" height="150" className="connection-svg">
                {socialLinks.map((link, i) => {
                  if (i < socialLinks.length - 1) {
                    return (
                      <motion.line
                        key={i}
                        x1={`${(i + 1) * (100 / (socialLinks.length + 1))}%`}
                        y1="50"
                        x2={`${(i + 2) * (100 / (socialLinks.length + 1))}%`}
                        y2="50"
                        stroke={link.color}
                        strokeWidth="2"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="footer-info">
            <p className="copyright">
              © 2025 Samrudh P. All rights reserved.
            </p>
            <p className="tech-stack">
              Built with React • Three.js • Framer Motion
            </p>
            <p className="rag-badge">
              <span className="badge-glow">✨</span>
              RAG-Inspired Portfolio Architecture
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
