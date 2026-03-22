"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial, 
  Sparkles, 
  Float, 
  Environment,
  AdaptiveEvents,
  Preload,
  BakeShadows
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <MeshDistortMaterial
          color="#101010"
          emissive="#7000ff"
          emissiveIntensity={1.2}
          clearcoat={0.5}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={1.5}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  // Memoize sparkles to prevent unnecessary re-renders
  const particles = useMemo(() => (
    <>
      <Sparkles 
        count={80} 
        scale={8} 
        size={2} 
        speed={0.3} 
        opacity={0.4} 
        color="#00f0ff" 
      />
      <Sparkles 
        count={40} 
        scale={10} 
        size={3} 
        speed={0.1} 
        opacity={0.2} 
        color="#7000ff" 
      />
    </>
  ), []);

  return (
    <div className="absolute inset-0 -z-10 bg-[#050505] overflow-hidden pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 40 }}
        dpr={[1, 1.5]} // Limit pixel ratio for lower-end devices
        gl={{ 
          antialias: false, // Turn off for speed
          powerPreference: "high-performance" 
        }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#7000ff" />
        
        <AICore />
        {particles}

        <Environment preset="night" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3} 
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.1}
        />
        
        <AdaptiveEvents />
        <BakeShadows />
        <Preload all />
      </Canvas>
    </div>
  );
}

