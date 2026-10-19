"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  IconArrowRight, 
  IconCalendar, 
  IconCheckCircle, 
  IconShieldCheck, 
  IconZap, 
  IconGlobe 
} from "@/components/Icons";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse Parallax effect
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10 text-center max-w-4xl"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-8 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>✦ Available for new projects</span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.08] text-foreground"
        >
          Shopify Developer &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">
            Front-End Engineer
          </span>
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 font-normal"
        >
          I build fast, conversion-focused Shopify stores, custom Liquid themes, and modern React & Next.js web applications.
          <span className="text-foreground font-semibold"> 5+ years of experience</span>. Remote, working with brands and agencies worldwide.
        </motion.p>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#calendly"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full text-base shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105"
          >
            <IconCalendar className="h-4 w-4" />
            <span>Book a Technical Discovery Call</span>
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary/80 text-secondary-foreground font-medium px-8 py-4 rounded-full text-base border border-border/80 hover:bg-secondary transition-all hover:scale-105"
          >
            <span>View Case Studies & Tools</span>
            <IconArrowRight className="h-4 w-4 text-primary" />
          </a>
        </motion.div>

        {/* Proof / Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 border border-border/40">
            <IconShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <div>
              <div className="text-base font-extrabold text-foreground">5+ Years</div>
              <div className="text-xs text-muted-foreground font-medium">Production Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 border border-border/40">
            <IconCheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base font-extrabold text-foreground">6+ Stores</div>
              <div className="text-xs text-muted-foreground font-medium">Shipped & Scaled</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 border border-border/40">
            <IconZap className="h-5 w-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-base font-extrabold text-foreground">90+ Score</div>
              <div className="text-xs text-muted-foreground font-medium">Lighthouse Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/20 border border-border/40">
            <IconGlobe className="h-5 w-5 text-purple-400 shrink-0" />
            <div>
              <div className="text-base font-extrabold text-foreground">USA & Europe</div>
              <div className="text-xs text-muted-foreground font-medium">Global Brand Reach</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
