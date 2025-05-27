'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from '@/components/Intro';
import Description from '@/components/Description';

export default function Home() {
  useEffect(() => {
    // Create a new Lenis instance (for smooth scroll)
    const lenis = new Lenis();

    // Update Lenis every frame to keep it smooth
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the smooth scroll animation loop
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      {/* Parallax image section */}
      <Intro />

      {/* Text section */}
      <Description />

      {/* Extra space at the bottom to let you scroll further */}
      <div className="h-screen" />
    </main>
  );
}
