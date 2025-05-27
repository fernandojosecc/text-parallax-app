"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextParallax() {
  const ref = useRef(null);

  // Grab the scroll progress of this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Translate X position based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section
      ref={ref}
      style={{
        height: "150vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <motion.h1
        style={{
          x,
          fontSize: "4rem",
          whiteSpace: "nowrap",
          fontWeight: "bold",
        }}
      >
        💨 Scrollin’ and Slayin’
      </motion.h1>
    </section>
  );
}
