import { motion } from 'framer-motion';
import './Experience.css';

function Experience() {
  const experience = {
    role: "Prism Intern – Next Gen AI Datastore",
    company: "Samsung R&D Institute, Bengaluru",
    duration: "May 2024 - Present",
    location: "Bengaluru, India",
    achievements: [
      "Contributed to building a Semantic Video Retrieval (SVR) pipeline using Python, optimizing vector search and embedding generation to improve retrieval accuracy by 35%",
      "Worked on core pipeline components including vector storage, embedding models, and semantic search algorithms, ran experiments on the fusion of embeddings using cross-attention, which further increased retrieval accuracy"
    ]
  };

  return (
    <section className="experience" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Building Real-World AI Solutions
      </motion.p>

      <div className="experience-container">
        <motion.div
          className="exp-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-header">
            <div className="header-icon">EXP</div>
            <div className="header-content">
              <h3>{experience.role}</h3>
              <p className="company">{experience.company}</p>
              <div className="meta-info">
                <span className="duration">{experience.duration}</span>
                <span className="location">{experience.location}</span>
              </div>
            </div>
          </div>
          
          <div className="card-body">
            <h4 className="achievements-title">Key Achievements:</h4>
            <ul className="achievements-list">
              {experience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
