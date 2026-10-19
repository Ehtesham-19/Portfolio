"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "./Parallax";
import Image from "next/image";
import profilePic from "./profile.png";
import { IconClock, IconFileText, IconCheckCircle, IconSparkles } from "@/components/Icons";

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">About Me</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image with Parallax & Decorative elements */}
          <Parallax offset={30}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl border border-border/60"
            >
              <Image
                src={profilePic}
                alt="Muhammad Ehtesham Ayyaz - Shopify Developer & Front-End Engineer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />

              {/* Float badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-3 rounded-xl border border-border/80 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-foreground">Available for Client Projects</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-primary">5+ YRS EXP</span>
              </div>
            </motion.div>
          </Parallax>

          {/* About Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Currently line */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
              <IconSparkles className="h-3.5 w-3.5" />
              <span>
                <strong>Currently:</strong> building high-performance Shopify 2.0 themes & React applications · Open for new projects
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              High-converting Liquid themes, sub-second speed optimization & React/Next.js engineering.
            </h3>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m Muhammad Ehtesham Ayyaz, a Shopify developer and front-end engineer based in Pakistan, working remotely with brands and digital agencies worldwide.
              </p>
              <p>
                For <strong className="text-foreground">5+ years</strong> I&apos;ve specialized in custom Shopify 2.0 themes, Liquid templating, and Core Web Vitals speed optimization for stores like <span className="text-foreground font-semibold">Tiletopia, Exercere, Anya Active, and Hanne Bloch</span>. My focus is the technical core of the store that drives revenue: mobile page speed, checkout friction reduction, and conversion rate optimization (CRO).
              </p>
              <p>
                Alongside Shopify, I have deep front-end engineering expertise in <strong className="text-foreground">React 19 & Next.js 16</strong>. I use this to architect custom merchant tools, interactive dashboards, and developer automation suites like <a href="https://shopify-tool-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shopify Developer & Merchant Toolkit</a> and <a href="https://product-scrapper-bay.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Product Scrapper Bay</a>.
              </p>
              <p>
                I work exceptionally well with agencies as a white-label developer: disciplined communication, clean Git PRs, documented code, and zero surprises on deadlines.
              </p>
            </div>

            {/* Agency Values List */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-foreground">What working with me looks like:</div>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-2.5">
                  <IconClock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-foreground">I reply within 24 hours</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-2.5">
                  <IconFileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-foreground">I document everything cleanly</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-2.5">
                  <IconCheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-foreground">Fixed scope, zero surprises</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Stores Shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">90+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Lighthouse Score</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
