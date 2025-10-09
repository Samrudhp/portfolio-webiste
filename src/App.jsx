import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SkillsGraph from './components/SkillsGraph'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import EmbeddingVisualizer from './components/EmbeddingVisualizer'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedContext, setSelectedContext] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleContextChange = (context) => {
    setSelectedContext(context);
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setSelectedContext(skill.category);
  };

  return (
    <div className="app">
      <Navigation 
        selectedContext={selectedContext}
        onContextChange={handleContextChange}
      />
      <Hero />
      <SkillsGraph 
        selectedContext={selectedContext}
        onSkillClick={handleSkillClick}
      />
      <Experience />
      <Projects selectedContext={selectedContext} />
      <EmbeddingVisualizer selectedContext={selectedContext} />
      <Achievements />
      <Education />
      {/* <Certifications /> */}
      <Footer />
    </div>
  )
}

export default App
