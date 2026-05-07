"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse Parallax effect
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium tracking-wider mb-4 uppercase text-sm">
            Welcome to my portfolio
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Muhammad Ehtesham Ayyaz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Specializing in <span className="text-foreground font-semibold">High-Conversion</span> Shopify stores and 
          <span className="text-foreground font-semibold">Performance Engineering</span>. I turn visitors into loyal customers through 
          data-driven frontend excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium border border-border transition-all hover:bg-secondary/80 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-full h-2 bg-muted rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
