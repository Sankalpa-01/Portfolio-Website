import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';

const Sphere = ({ position, color, size }) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} />
    </mesh>
  </Float>
);

const FloatingSpheres = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 5]} intensity={1} />

      <Environment preset="sunset" />

      <Sphere position={[-2, 0, 0]} color="#f472b6" size={0.6} />
      <Sphere position={[0, 0.5, -1]} color="#60a5fa" size={0.8} />
      <Sphere position={[2, -0.3, 1]} color="#34d399" size={0.5} />
      <Sphere position={[1.2, 1, -1]} color="#c084fc" size={0.4} />

      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default FloatingSpheres;
