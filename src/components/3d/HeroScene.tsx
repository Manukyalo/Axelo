"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

/* ─── Mobile detection ─── */
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

/* ─── Mouse tracker (normalized -1..1) ─── */
function useMouseNDC() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return mouse;
}

/* ─── Constellation Particles ─── */
function Particles({
  count,
  mouse,
}: {
  count: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  const targetMouse = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Mint / violet / white color mix
    const palette = [
      new THREE.Color("#00FFB2"),
      new THREE.Color("#7B61FF"),
      new THREE.Color("#F0F0FF"),
      new THREE.Color("#00FFB2"),
    ];

    for (let i = 0; i < count; i++) {
      const spread = 20;
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame((state, delta) => {
    // Smooth mouse follow
    targetMouse.current.x += (mouse.current.x - targetMouse.current.x) * 0.04;
    targetMouse.current.y += (mouse.current.y - targetMouse.current.y) * 0.04;

    if (meshRef.current) {
      meshRef.current.rotation.y =
        state.clock.elapsedTime * 0.012 + targetMouse.current.x * 0.15;
      meshRef.current.rotation.x =
        state.clock.elapsedTime * 0.006 - targetMouse.current.y * 0.1;
    }
  });

  return <points ref={meshRef} geometry={geometry} material={material} />;
}

/* ─── Constellation Lines ─── */
function ConstellationLines({ positions }: { positions: Float32Array }) {
  const lineRef = useRef<THREE.LineSegments>(null!);

  const { linePositions } = useMemo(() => {
    const pts: number[] = [];
    const maxDist = 2.2;
    const maxLines = 400;
    let lineCount = 0;

    for (let i = 0; i < positions.length / 3 && lineCount < maxLines; i++) {
      const ax = positions[i * 3];
      const ay = positions[i * 3 + 1];
      const az = positions[i * 3 + 2];

      for (let j = i + 1; j < positions.length / 3 && lineCount < maxLines; j++) {
        const bx = positions[j * 3];
        const by = positions[j * 3 + 1];
        const bz = positions[j * 3 + 2];
        const dist = Math.sqrt(
          (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2
        );
        if (dist < maxDist) {
          pts.push(ax, ay, az, bx, by, bz);
          lineCount++;
        }
      }
    }
    return { linePositions: new Float32Array(pts) };
  }, [positions]);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  useFrame(() => {
    if (lineRef.current && lineRef.current.parent) {
      // Lines follow the same parent rotation automatically via instancing
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry attach="geometry" {...lineGeo} />
      <lineBasicMaterial
        attach="material"
        color="#00FFB2"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}

/* ─── Scene ─── */
function SceneContent({
  isMobile,
  mouse,
}: {
  isMobile: boolean;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const { gl } = useThree();
  const count = isMobile ? 800 : 3000;

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
  }, [gl, isMobile]);

  // Shared positions for constellation lines (use a subset)
  const linePositions = useMemo(() => {
    const spread = 8;
    const n = 120;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  return (
    <>
      <color attach="background" args={["#03000A"]} />
      <Particles count={count} mouse={mouse} />
      {!isMobile && <ConstellationLines positions={linePositions} />}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </>
  );
}

/* ─── CSS Gradient fallback (mobile) ─── */
function MobileGradientFallback() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="hero-mobile-gradient absolute inset-0" />
    </div>
  );
}

/* ─── Export ─── */
export function HeroScene() {
  const isMobile = useIsMobile();
  const mouse = useMouseNDC();

  // Fully skip Three.js on mobile — use pure CSS gradient for performance
  if (isMobile) return <MobileGradientFallback />;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Canvas
        shadows={false}
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneContent isMobile={false} mouse={mouse} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
