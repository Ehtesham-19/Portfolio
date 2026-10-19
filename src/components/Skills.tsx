"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconShoppingBag, IconZap, IconLayout, IconCode, IconServer } from "@/components/Icons";

const skillCategories = [
  {
    category: "Shopify 2.0 Theme Dev",
    icon: IconShoppingBag,
    description: "Custom Liquid storefronts engineered for maximum conversion & modular section control.",
    skills: [
      { name: "Liquid", badge: "Expert · Daily Use" },
      { name: "Theme OS 2.0 & Dawn", badge: "Custom Sections" },
      { name: "Metaobjects & Metafields", badge: "Dynamic Schemas" },
      { name: "B2B & Custom Logic", badge: "Storefront Rules" },
    ]
  },
  {
    category: "Speed & Core Web Vitals",
    icon: IconZap,
    description: "Sub-second mobile speed optimization driving real Google ranking & ad performance.",
    skills: [
      { name: "Core Web Vitals (LCP/CLS/INP)", badge: "Sub-2s Target" },
      { name: "Lighthouse 90+ Auditing", badge: "Speed Sprint" },
      { name: "Asset & Image Compression", badge: "WebP / AVIF" },
      { name: "Script & App Bloat Clean-Up", badge: "Zero Bloat" },
    ]
  },
  {
    category: "CRO & Checkout UX",
    icon: IconLayout,
    description: "Proven conversion rate optimization strategies that reduce mobile cart abandonment.",
    skills: [
      { name: "8-Pillar CRO Heuristics", badge: "Conversion Engine" },
      { name: "Checkout UI Extensions", badge: "Shopify Plus" },
      { name: "Cart Flow Optimization", badge: "Frictionless UX" },
      { name: "Mobile-First Architecture", badge: "Figma to Code" },
    ]
  },
  {
    category: "React & Next.js Front-End",
    icon: IconCode,
    description: "Modern JavaScript engineering for high-performance dashboards and SaaS tools.",
    skills: [
      { name: "React 19 & Next.js 16", badge: "App Router" },
      { name: "TypeScript", badge: "Strict Typing" },
      { name: "Tailwind CSS v4", badge: "Modern Styling" },
      { name: "Zustand & Framer Motion", badge: "State & Motion" },
    ]
  },
  {
    category: "APIs & Developer Automation",
    icon: IconServer,
    description: "Automated pipelines, crawling engines, and reliable e-commerce integrations.",
    skills: [
      { name: "Shopify Admin API (GraphQL)", badge: "Schema Automation" },
      { name: "Data Extraction & Crawling", badge: "Catalog Migration" },
      { name: "REST APIs & Webhooks", badge: "Real-time Sync" },
      { name: "OpenAI API Integration", badge: "Zod Validated" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            Technical Depth & Tooling
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base">
            Focused expertise across Shopify 2.0 Liquid themes, Core Web Vitals speed optimization, conversion rate optimization (CRO), and React & Next.js front-end development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background border border-border/70 p-6 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{group.category}</h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{group.description}</p>
                
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/30 border border-border/40 text-xs"
                    >
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-primary/10 text-primary">
                        {skill.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
