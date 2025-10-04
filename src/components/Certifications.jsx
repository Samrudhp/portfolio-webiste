import { motion } from 'framer-motion';
import { certifications } from '../data/mockData';
import './Certifications.css';

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Credentials
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Verified expertise • Industry-recognized credentials
      </motion.p>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              y: -10,
              boxShadow: `0 10px 40px ${cert.color}44`,
              borderColor: cert.color
            }}
          >
            <div className="cert-icon" style={{ color: cert.color }}>
              {cert.icon}
            </div>

            {cert.verified && (
              <div className="verified-badge">
                <span className="check-icon">✓</span>
                Verified
              </div>
            )}

            <h3 className="cert-name">{cert.name}</h3>

            <p className="cert-issuer">{cert.issuer}</p>

            <div className="cert-footer">
              <span className="cert-date">{cert.date}</span>
              <div 
                className="cert-badge" 
                style={{ 
                  background: `${cert.color}22`,
                  borderColor: cert.color,
                  color: cert.color
                }}
              >
                Certified
              </div>
            </div>

            <div 
              className="cert-glow" 
              style={{ background: `radial-gradient(circle, ${cert.color}22 0%, transparent 70%)` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
