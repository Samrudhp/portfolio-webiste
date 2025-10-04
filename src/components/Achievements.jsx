import { motion } from 'framer-motion';
import './Achievements.css';

function Achievements() {
  const leadership = [
    {
      title: "Amazon ML Summer School 2025",
      description: "Selected for Amazon ML Summer School 2025 — gained exposure to advanced machine learning concepts",
      icon: "AM",
      color: "#FF9900"
    },
    {
      title: "ACM-RIT Technical Team",
      description: "Technical Team Member, ACM-RIT — led technical initiatives and mentored junior developers",
      icon: "ACM",
      color: "#00B0FF"
    },
    {
      title: "LeetCode & DSA Excellence",
      description: "DSA Certification from Springboard and Solved 230+ problems on LeetCode — demonstrating a strong foundation in algorithms and problem-solving",
      icon: "230+",
      color: "#00FFA3"
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Leadership & Achievements
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Building Skills • Leading Teams • Making Impact
      </motion.p>

      <div className="achievements-grid">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card leadership-card"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 40px ${item.color}66`
            }}
          >
            <div className="achievement-icon leadership-icon" style={{ 
              color: item.color,
              borderColor: item.color,
              background: `${item.color}15`
            }}>
              {item.icon}
            </div>
            
            <div className="achievement-content">
              <h3 className="achievement-title" style={{ color: item.color }}>
                {item.title}
              </h3>
              
              <p className="achievement-description">
                {item.description}
              </p>
            </div>
            
            <div 
              className="achievement-glow" 
              style={{ background: `radial-gradient(circle, ${item.color}33 0%, transparent 70%)` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
