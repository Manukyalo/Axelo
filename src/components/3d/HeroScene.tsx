"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial, 
  Sparkles, 
  Float, 
  Environment,
  AdaptiveDpr,
  AdaptiveEvents,
  Preload,
  BakeShadows
} from "@react-three/drei";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

// Optimization: Use a custom hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function AICore({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use lower segments on mobile
  const segments = isMobile ? 16 : 32;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, segments, segments]}>
        <MeshDistortMaterial
          color="#101010"
          emissive="#7000ff"
          emissiveIntensity={1}
          clearcoat={0.3}
          metalness={0.9}
          roughness={0.2}
          distort={isMobile ? 0.2 : 0.35}
          speed={1.5}
        />
      </Sphere>
    </Float>
  );
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  const { gl } = useThree();
  
  useEffect(() => {
    // Aggressive GL optimizations
    gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
  }, [gl, isMobile]);

  const sparklesCount = isMobile ? 20 : 80;

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00f0ff" />
      
      <AICore isMobile={isMobile} />
      
      <Sparkles 
        count={sparklesCount} 
        scale={8} 
        size={2} 
        speed={0.2} 
        opacity={0.3} 
        color="#00f0ff" 
      />

      <Suspense fallback={null}>
        <Environment preset="night" />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.2} 
      />
      
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <BakeShadows />
    </>
  );
}

export function HeroScene() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 -z-10 bg-[#050505] overflow-hidden pointer-events-none">
      <Canvas 
        shadows={false}
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true
        }}
      >
        <Suspense fallback={null}>
          <SceneContent isMobile={isMobile} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}


