import { motion } from 'framer-motion';
import { contexts } from '../data/mockData';
import './ContextSelector.css';

function ContextSelector({ selectedContext, onContextChange }) {
  return (
    <section className="context-selector" id="context-selector">
      <motion.div
        className="context-container"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="context-label">
                    <span className="query-icon">Q</span>
          <span className="query-label">Context Query:</span>
        </div>
        
        <div className="context-buttons">
          {contexts.map((context, index) => (
            <motion.button
              key={context}
              className={`context-button ${selectedContext === context ? 'active' : ''} ${context.toLowerCase().replace('/', '-')}`}
              onClick={() => onContextChange(context)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {context}
              {selectedContext === context && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeContext"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {selectedContext !== 'All' && (
          <motion.div
            className="context-info"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <span className="info-icon">⚡</span>
            <span>Filtering by: <strong>{selectedContext}</strong></span>
            <span className="similarity-badge">Top skills highlighted</span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default ContextSelector;
