import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/mockData';
import './Projects.css';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">{project.title}</h2>
        <span className={`modal-category ${project.context.toLowerCase().replace('/', '-')}`}>
          {project.context}
        </span>
        
        <p className="modal-description">{project.details}</p>
        
        <div className="modal-tech">
          <h3>Tech Stack</h3>
          <div className="tech-tags">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="modal-footer">
          <div className="augmentation-badge">
                        <span className="badge-icon">★</span>
            <span className="badge-text">Featured</span>
          </div>
          {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <motion.div
        className={`project-card ${project.context.toLowerCase().replace('/', '-')}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <span className={`card-category ${project.context.toLowerCase().replace('/', '-')}`}>
            {project.context}
          </span>
        </div>
        
        <p className="card-description">{project.description}</p>
        
        <div className="card-tech">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tech-badge more">+{project.techStack.length - 3}</span>
          )}
        </div>
        
                <div className="card-footer">
          <span className="retrieval-badge">📊 {project.similarity}% match</span>
          <button className="details-button">
            View Details
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function Projects({ selectedContext }) {
  const filteredProjects = selectedContext === 'All'
    ? projects
    : projects.filter(p => p.context === selectedContext);
  
  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects Portfolio
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Contextual Retrieval • Relevance-based Ordering • Click to Augment
      </motion.p>
      
      <div className="projects-stats">
        <div className="stat">
          <span className="stat-number">{filteredProjects.length}</span>
          <span className="stat-label">Projects Retrieved</span>
        </div>
        <div className="stat">
          <span className="stat-number">
            {selectedContext === 'All' ? '100%' : Math.round((filteredProjects.length / projects.length) * 100) + '%'}
          </span>
          <span className="stat-label">Relevance Score</span>
        </div>
      </div>
      
      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <motion.div
          className="no-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No projects found for this context</p>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
