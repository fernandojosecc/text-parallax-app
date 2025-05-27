'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  // This gives us access to the container div so we can track its scroll position
  const container = useRef();

  // Get the scroll progress from 0 (start) to 1 (end) for the container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  // As you scroll, move the image from 0vh to 150vh vertically (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '120vh']);

  return (
    // Outer box with full screen height and hidden overflow
    <div ref={container} className="h-screen overflow-hidden">
      {/* Move this image on scroll */}
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/2.jpg" // Load the image from public/images/2.jpg
          alt="image"
          fill // Makes the image fill its container
          style={{ objectFit: 'cover' }} // Make sure the image keeps its shape and fills the area
        />
      </motion.div>
    </div>
  );
}
