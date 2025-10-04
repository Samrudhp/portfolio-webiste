import { motion } from 'framer-motion';
import './Education.css';

function Education() {
  const education = {
    institution: "Ramaiah Institute of Technology",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2023 - 2027",
    cgpa: "9.48",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Design",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Artificial Intelligence & Machine Learning"
    ]
  };

  return (
    <section className="education" id="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Academic Background & Learning Journey
      </motion.p>

      <div className="education-container">
        <motion.div
          className="edu-card education-only"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-header">
            <div className="header-icon">EDU</div>
            <div className="header-content">
              <h3>{education.institution}</h3>
              <p className="degree">{education.degree}</p>
              <div className="meta-info">
                <span className="duration">{education.duration}</span>
                <span className="cgpa-badge">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
          
          <div className="card-body">
            <h4 className="coursework-title">Relevant Coursework:</h4>
            <div className="coursework-grid">
              {education.coursework.map((course, index) => (
                <motion.span
                  key={index}
                  className="course-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
