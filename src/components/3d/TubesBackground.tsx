"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const randomColors = (count: number) => {
  // Generate random bright neon colors tailored for the Nova Tech theme
  const palettes = [
    ["#00f0ff", "#7000ff", "#ff008a", "#00ff8a", "#53bc28"],
    ["#00f0ff", "#0ea5e9", "#7000ff", "#d946ef", "#f43f5e"],
  ];
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  return new Array(count).fill(0).map(() => palette[Math.floor(Math.random() * palette.length)]);
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Use webpackIgnore to prevent Next.js from trying to bundle the CDN URL
        // @ts-ignore
        const module = await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js");
        const TubesCursor = module.default;

        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#00f0ff", "#7000ff", "#ff00aa"],
            lights: {
              intensity: 200,
              colors: ["#00f0ff", "#7000ff", "#ff008a", "#60aed5"],
            },
          },
        });

        tubesRef.current = app;
        setIsLoaded(true);

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    initTubes();

    return () => {
      mounted = false;
      // Note: threejs-components cursors typically bind to canvas and window events.
      // We rely on garbage collection when the canvas is destroyed.
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;

    const colors = randomColors(3);
    const lightsColors = randomColors(4);

    tubesRef.current.tubes.setColors(colors);
    tubesRef.current.tubes.setLightsColors(lightsColors);
  };

  return (
    <div
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-[#050505]", className)}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: "none" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
