import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import './Hero.css';

// Premium Particle Stars
function ParticleStars() {
  const pointsRef = useRef();
  const particleCount = 2000;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const colorPalette = [
      new THREE.Color('#00FFA3'),
      new THREE.Color('#00B0FF'),
      new THREE.Color('#FF3C78'),
      new THREE.Color('#9D4EDD'),
      new THREE.Color('#FFD700')
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spread particles in a sphere
      const radius = 20 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      sizes[i] = Math.random() * 3 + 1;
    }
    
    return { positions, colors, sizes };
  }, []);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        positions[i3 + 1] = y + Math.sin(time * 0.5 + x * 0.01) * 0.02;
        positions[i3 + 2] = z + Math.cos(time * 0.5 + y * 0.01) * 0.02;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometric Shapes
function FloatingShapes() {
  const groupRef = useRef();
  
  const shapes = useMemo(() => [
    { geometry: 'octahedron', position: [-10, 5, -15], color: '#00FFA3', scale: 2 },
    { geometry: 'icosahedron', position: [12, -6, -20], color: '#00B0FF', scale: 2.5 },
    { geometry: 'dodecahedron', position: [-8, -8, -18], color: '#FF3C78', scale: 1.8 },
    { geometry: 'tetrahedron', position: [10, 8, -12], color: '#9D4EDD', scale: 1.5 },
    { geometry: 'octahedron', position: [0, 10, -25], color: '#FFD700', scale: 1.3 },
    { geometry: 'icosahedron', position: [-15, 0, -22], color: '#00FFA3', scale: 1.6 },
  ], []);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh, i) => {
        mesh.rotation.x = time * (0.2 + i * 0.03);
        mesh.rotation.y = time * (0.3 + i * 0.02);
        mesh.position.y += Math.sin(time * 0.5 + i) * 0.01;
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} scale={shape.scale}>
          {shape.geometry === 'octahedron' && <octahedronGeometry args={[1]} />}
          {shape.geometry === 'icosahedron' && <icosahedronGeometry args={[1]} />}
          {shape.geometry === 'dodecahedron' && <dodecahedronGeometry args={[1]} />}
          {shape.geometry === 'tetrahedron' && <tetrahedronGeometry args={[1]} />}
          <meshStandardMaterial
            color={shape.color}
            emissive={shape.color}
            emissiveIntensity={0.4}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

// Animated Wave Grid
function WaveGrid() {
  const meshRef = useRef();
  const gridSize = 50;
  const segments = 40;
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        
        positions[i + 2] = 
          Math.sin(x * 0.2 + time * 0.8) * 2 + 
          Math.cos(y * 0.2 + time * 0.5) * 2;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });
  
  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 2.5, 0, 0]} 
      position={[0, -15, -10]}
    >
      <planeGeometry args={[gridSize, gridSize, segments, segments]} />
      <meshStandardMaterial
        color="#00FFA3"
        emissive="#00FFA3"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Energy Orbs
function EnergyOrbs() {
  const orbsRef = useRef();
  
  const orbs = useMemo(() => [
    { position: [-15, 8, -20], color: '#00FFA3', scale: 1.5 },
    { position: [15, -5, -25], color: '#00B0FF', scale: 2 },
    { position: [0, 12, -30], color: '#FF3C78', scale: 1.2 },
    { position: [-12, -8, -15], color: '#9D4EDD', scale: 1.8 },
  ], []);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, i) => {
        orb.position.y += Math.sin(time + i * 2) * 0.02;
        orb.scale.setScalar(orbs[i].scale + Math.sin(time * 2 + i) * 0.1);
      });
    }
  });
  
  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshStandardMaterial
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.8}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Hero() {
  const scrollToNextSection = () => {
    const element = document.getElementById('context-selector');
    if (element) {
      const offset = 100; // Offset for fixed navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Premium 3D Background */}
      <div className="hero-background">
        <Canvas
          camera={{ position: [0, 0, 20], fov: 75 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <color attach="background" args={['#000000']} />
          
          {/* Advanced Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[20, 20, 20]} intensity={1.5} color="#00FFA3" />
          <pointLight position={[-20, -20, -20]} intensity={1} color="#00B0FF" />
          <pointLight position={[0, 30, 0]} intensity={0.8} color="#FF3C78" />
          <spotLight
            position={[0, 40, 20]}
            angle={0.5}
            penumbra={1}
            intensity={1.2}
            color="#9D4EDD"
            castShadow
          />
          
          {/* Premium 3D Elements */}
          <ParticleStars />
          <FloatingShapes />
          <WaveGrid />
          <EnergyOrbs />
        </Canvas>
      </div>

      {/* Main Content - Focused on Name */}
      <div className="hero-content">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Samrudh P
          </motion.h1>
          
          <motion.p 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI/ML Engineer • Full Stack Developer • GenAI Enthusiast
          </motion.p>
          
          <motion.button
            className="scroll-down-btn"
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="scroll-arrow"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            <span>Scroll Down</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
