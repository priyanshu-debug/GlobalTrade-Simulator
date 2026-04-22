import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGlobe = () => {
  const globeRef = useRef();

  useFrame(({ clock }) => {
    globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    globeRef.current.rotation.z = clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={globeRef}>
      {/* Core solid sphere */}
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#1E293B"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.8}
        />
      </Sphere>

      {/* Wireframe outer sphere to look like a global network */}
      <Sphere args={[2.05, 32, 32]}>
        <meshBasicMaterial
          color="#4F46E5"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Decorative Outer Rings for "Trade Routes" */}
      <Line
        points={[...new Array(100)].map((_, i) => [
          3 * Math.cos((i / 100) * Math.PI * 2),
          0,
          3 * Math.sin((i / 100) * Math.PI * 2)
        ])}
        color="#10B981"
        lineWidth={1}
        transparent
        opacity={0.3}
        rotation={[Math.PI / 4, 0, 0]}
      />
      <Line
        points={[...new Array(100)].map((_, i) => [
          2.5 * Math.cos((i / 100) * Math.PI * 2),
          2.5 * Math.sin((i / 100) * Math.PI * 2),
          0
        ])}
        color="#F59E0B"
        lineWidth={1}
        transparent
        opacity={0.2}
        rotation={[0, Math.PI / 3, 0]}
      />
    </group>
  );
};

const ThreeGlobe = () => {
  return (
    <div className="three-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <AnimatedGlobe />
      </Canvas>
    </div>
  );
};

export default ThreeGlobe;
