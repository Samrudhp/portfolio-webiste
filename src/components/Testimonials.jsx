import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/mockData';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Client Testimonials
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        What clients say • Real feedback from real projects
      </motion.p>

      <div className="testimonials-container">
        <button className="nav-button prev" onClick={prev} aria-label="Previous testimonial">
          ←
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-header">
              <div className="client-avatar">
                {currentTestimonial.image}
              </div>
              <div className="client-info">
                <h3>{currentTestimonial.name}</h3>
                <p className="client-role">{currentTestimonial.role}</p>
                <div className="rating">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{currentTestimonial.text}</p>
            </div>

            <div className="testimonial-project">
              <span className="project-label">Project:</span>
              <span className="project-name">{currentTestimonial.project}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-button next" onClick={next} aria-label="Next testimonial">
          →
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
