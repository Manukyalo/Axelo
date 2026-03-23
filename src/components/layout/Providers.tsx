"use client";

import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
