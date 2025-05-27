'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Slide({ src, left }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [left, "0%"]);

  return (
    <section
      ref={ref}
      className="h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ x }} className="w-[80%] max-w-[800px]">
        <Image
          src={src}
          alt="Scroll Image"
          className="rounded-xl object-cover"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </motion.div>
    </section>
  );
}
