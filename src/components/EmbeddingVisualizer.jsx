import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills, projects } from '../data/mockData';
import './EmbeddingVisualizer.css';

function EmbeddingVisualizer({ selectedContext }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  
  const predefinedQueries = [
    'Show my AI/ML skills',
    'Find SDE projects', 
    'What GenAI experience do I have?',
    'Python and Machine Learning',
    'React and Frontend Development'
  ];

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      // Simple keyword matching simulation
      const keywords = searchQuery.toLowerCase().split(' ');
      const matchedSkills = skills.filter(skill => 
        keywords.some(kw => 
          skill.name.toLowerCase().includes(kw) ||
          skill.category.toLowerCase().includes(kw) ||
          skill.projects.some(p => p.toLowerCase().includes(kw))
        )
      );
      
      const matchedProjects = projects.filter(project =>
        keywords.some(kw =>
          project.title.toLowerCase().includes(kw) ||
          project.description.toLowerCase().includes(kw) ||
          project.context.toLowerCase().includes(kw) ||
          project.techStack.some(t => t.toLowerCase().includes(kw))
        )
      );
      
      // Combine and assign similarity scores
      const combinedResults = [
        ...matchedSkills.slice(0, 4).map(s => ({ ...s, type: 'skill', similarity: 0.95 - Math.random() * 0.2 })),
        ...matchedProjects.slice(0, 3).map(p => ({ ...p, type: 'project', similarity: 0.85 - Math.random() * 0.2 }))
      ].sort((a, b) => b.similarity - a.similarity);
      
      setResults(combinedResults);
      setIsSearching(false);
    }, 800);
  };

  useEffect(() => {
    // Auto-search based on selected context
    if (selectedContext && selectedContext !== 'All') {
      handleSearch(selectedContext);
    }
  }, [selectedContext]);
  
  return (
    <section className="embedding-visualizer" id="embedding-visualizer">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        RAG Retrieval Simulation
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Query Embedding → Vector Similarity → Document Retrieval → Augmentation
      </motion.p>
      
      <div className="query-interface">
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
            placeholder="Enter your query..."
            className="search-input"
          />
          <motion.button
            className="search-button"
            onClick={() => handleSearch(query)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!query.trim()}
          >
            {isSearching ? '⟳ Searching...' : '→ Search'}
          </motion.button>
        </div>
        
        <div className="predefined-queries">
          <span className="queries-label">Try these:</span>
          {predefinedQueries.map((pq, i) => (
            <motion.button
              key={i}
              className="query-chip"
              onClick={() => handleSearch(pq)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pq}
            </motion.button>
          ))}
        </div>
      </div>

      {isSearching && (
        <motion.div 
          className="loading-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="loading-spinner"></div>
          <p>Embedding query and searching vector space...</p>
        </motion.div>
      )}

      {!isSearching && results.length > 0 && (
        <motion.div 
          className="results-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="results-header">
            <h3>Retrieved Results ({results.length})</h3>
            <span className="retrieval-badge">✓ Augmented with context</span>
          </div>

          <div className="results-grid">
            {results.map((result, i) => (
              <motion.div
                key={i}
                className={`result-card ${result.type}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="result-header">
                  <span className={`type-badge ${result.type}`}>
                    {result.type === 'skill' ? '🎯 Skill' : '📂 Project'}
                  </span>
                  <span className="similarity-score">
                    {(result.similarity * 100).toFixed(1)}% match
                  </span>
                </div>

                <h4 className="result-title">
                  {result.type === 'skill' ? result.name : result.title}
                </h4>

                {result.type === 'skill' ? (
                  <>
                    <p className="result-category">{result.category} • {result.level}</p>
                    <p className="result-detail">{result.experience}</p>
                  </>
                ) : (
                  <>
                    <p className="result-category">{result.context}</p>
                    <p className="result-detail">{result.description}</p>
                  </>
                )}

                <div className="similarity-bar">
                  <motion.div 
                    className="similarity-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.similarity * 100}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {!isSearching && query && results.length === 0 && (
        <motion.div 
          className="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>No results found. Try a different query!</p>
        </motion.div>
      )}
      
      <div className="visualization-info">
        <div className="info-card">
          <div className="info-icon">?</div>
          <h3>Query Processing</h3>
          <p>Natural language converted to embedding vector using transformer models</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">📊</div>
          <h3>Similarity Search</h3>
          <p>Cosine similarity computed against knowledge base vectors</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">📝</div>
          <h3>Context Retrieval</h3>
          <p>Top-k results retrieved and ranked by relevance score</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">✨</div>
          <h3>Augmentation</h3>
          <p>Retrieved context enriches and grounds the final response</p>
        </div>
      </div>
    </section>
  );
}

export default EmbeddingVisualizer;
