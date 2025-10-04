import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { skills } from '../data/mockData';
import './SkillsGraph.css';

function SkillNode({ skill, isHighlighted, isFiltered, onClick, onHover }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const categoryColors = {
    'SDE': '#00B0FF',
    'AI/ML': '#00FFA3',
    'GenAI': '#FF3C78'
  };
  
  const levelSizes = {
    'Expert': 0.25,
    'Advanced': 0.20,
    'Intermediate': 0.16
  };
  
  const color = categoryColors[skill.category];
  const baseSize = levelSizes[skill.level] || 0.16;
  const scale = hovered ? 1.3 : isHighlighted ? 1.15 : 1;
  const opacity = isFiltered ? 0.2 : (hovered ? 1 : 0.85);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = skill.y + Math.sin(t * 0.5 + skill.x) * 0.06;
    meshRef.current.rotation.y = t * 0.2;
  });
  
  return (
    <group>
      <mesh
        ref={meshRef}
        position={[skill.x, skill.y, skill.z]}
        onClick={() => onClick(skill)}
        onPointerOver={() => {
          setHovered(true);
          onHover(skill);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'default';
        }}
        scale={scale}
      >
        <sphereGeometry args={[baseSize, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.4 : (isHighlighted ? 0.9 : 0.6)}
          transparent
          opacity={opacity}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Always show label - positioned below node */}
      <Html 
        position={[skill.x, skill.y - 0.5, skill.z]} 
        center
        style={{ pointerEvents: 'none' }}
        zIndexRange={[0, 0]}
      >
        <div className={`skill-label ${hovered ? 'hovered' : ''} ${isFiltered ? 'filtered' : ''}`}
             style={{ color }}>
          {skill.name}
        </div>
      </Html>
      
      {/* Level indicator on hover - positioned above node */}
      {hovered && (
        <Html 
          position={[skill.x, skill.y + 0.5, skill.z]} 
          center
          style={{ pointerEvents: 'none' }}
          zIndexRange={[100, 100]}
        >
          <div className="skill-level-badge" style={{ 
            background: `${color}22`,
            borderColor: color,
            color: color
          }}>
            {skill.level}
          </div>
        </Html>
      )}
    </group>
  );
}

function CategoryLabel({ text, position, color }) {
  return (
    <Html position={position} center style={{ pointerEvents: 'none' }}>
      <div className="category-label" style={{ 
        color: color,
        textShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `2px solid ${color}40`,
        padding: '8px 20px',
        borderRadius: '20px',
        fontWeight: '800',
        fontSize: '16px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        backdropFilter: 'blur(10px)',
        boxShadow: `0 0 30px ${color}30, inset 0 0 20px ${color}10`
      }}>
        {text}
      </div>
    </Html>
  );
}

function SkillConnections({ selectedContext }) {
  const connections = [];
  const filteredSkills = selectedContext === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedContext);
  
  // Connect skills within same category if close enough
  for (let i = 0; i < filteredSkills.length; i++) {
    for (let j = i + 1; j < filteredSkills.length; j++) {
      if (filteredSkills[i].category === filteredSkills[j].category) {
        const dist = Math.sqrt(
          Math.pow(filteredSkills[i].x - filteredSkills[j].x, 2) +
          Math.pow(filteredSkills[i].y - filteredSkills[j].y, 2) +
          Math.pow(filteredSkills[i].z - filteredSkills[j].z, 2)
        );
        
        if (dist < 2) {
          const categoryColors = {
            'SDE': '#00B0FF',
            'AI/ML': '#00FFA3',
            'GenAI': '#FF3C78'
          };
          
          connections.push({
            start: [filteredSkills[i].x, filteredSkills[i].y, filteredSkills[i].z],
            end: [filteredSkills[j].x, filteredSkills[j].y, filteredSkills[j].z],
            color: categoryColors[filteredSkills[i].category],
            opacity: 0.3
          });
        }
      }
    }
  }
  
  return (
    <>
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[conn.start, conn.end]}
          color={conn.color}
          lineWidth={1.5}
          transparent
          opacity={conn.opacity}
        />
      ))}
    </>
  );
}

function SkillsGraph({ selectedContext, onSkillClick }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const isFiltered = (skill) => {
    return selectedContext !== 'All' && skill.category !== selectedContext;
  };
  
  const isHighlighted = (skill) => {
    return selectedContext === skill.category || selectedContext === 'All';
  };

  const technicalSkills = {
    Languages: ["C++", "Python", "Java", "JavaScript", "SQL"],
    "AI/ML": ["Machine Learning", "NLP", "Deep Learning", "GenAI", "RAG", "Multimodal AI"],
    Frameworks: ["Node.js", "Express.js", "React.js", "FastAPI", "TensorFlow", "PyTorch", "LangChain"],
    Databases: ["MongoDB", "MySQL", "FAISS", "Pinecone", "Qdrant"],
    Tools: ["Microsoft Azure", "Git", "VS Code"]
  };
  
  return (
    <section className="skills-graph" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills Vector Space
      </motion.h2>
      
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        3D Embedding Visualization • Hover to explore • Click to filter projects
      </motion.p>
      
      <div className="skills-canvas-container">
        <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#00FFA3" />
          <pointLight position={[0, 10, -10]} intensity={0.6} color="#FF3C78" />
          
          {/* Category Labels - Positioned above the clusters to avoid overlap */}
          <CategoryLabel text="SDE" position={[-4.5, 3.8, 0]} color="#00B0FF" />
          <CategoryLabel text="AI/ML" position={[0, 3.8, 0]} color="#00FFA3" />
          <CategoryLabel text="GenAI" position={[4.2, 3.8, 0]} color="#FF3C78" />
          
          <SkillConnections selectedContext={selectedContext} />
          
          {skills.map((skill, i) => (
            <SkillNode
              key={i}
              skill={skill}
              isHighlighted={isHighlighted(skill)}
              isFiltered={isFiltered(skill)}
              onClick={onSkillClick}
              onHover={setHoveredSkill}
            />
          ))}
        </Canvas>
      </div>
      
      {hoveredSkill && (
        <motion.div
          className="skill-tooltip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className="tooltip-header">
            <h3>{hoveredSkill.name}</h3>
            <span className={`category-badge ${hoveredSkill.category.toLowerCase().replace('/', '-')}`}>
              {hoveredSkill.category}
            </span>
          </div>
          <div className="tooltip-details">
            <p className="skill-level">
              <span className="label">Level:</span>
              <span className="value">{hoveredSkill.level}</span>
            </p>
            <p className="skill-experience">
              <span className="label">Experience:</span>
              <span className="value">{hoveredSkill.experience}</span>
            </p>
          </div>
          <div className="skill-projects">
            <p className="projects-label">Projects:</p>
            {hoveredSkill.projects.map((project, i) => (
              <span key={i} className="project-tag">{project}</span>
            ))}
          </div>
        </motion.div>
      )}
      
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot sde"></span>
          <span>SDE</span>
          <span className="legend-count">{skills.filter(s => s.category === 'SDE').length}</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot aiml"></span>
          <span>AI/ML</span>
          <span className="legend-count">{skills.filter(s => s.category === 'AI/ML').length}</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot genai"></span>
          <span>GenAI</span>
          <span className="legend-count">{skills.filter(s => s.category === 'GenAI').length}</span>
        </div>
      </div>

      {/* Show All Skills Button */}
      <motion.div 
        className="show-skills-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.button
          className="show-skills-btn"
          onClick={() => setShowAllSkills(!showAllSkills)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAllSkills ? 'Hide All Skills' : 'Show All Skills'}
        </motion.button>
      </motion.div>

      {/* All Skills List */}
      {showAllSkills && (
        <motion.div
          className="all-skills-list"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
        >
          {Object.entries(technicalSkills).map(([category, skillsList], index) => (
            <motion.div
              key={category}
              className="skill-category-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h3 className="skill-category-title">{category}</h3>
              <p className="skill-category-items">
                {skillsList.join(', ')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

export default SkillsGraph;
