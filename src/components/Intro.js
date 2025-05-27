'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start',],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/2.jpg" // no import needed
          alt="image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  );
}
