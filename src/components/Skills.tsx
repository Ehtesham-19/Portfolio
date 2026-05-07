"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    "Next.js 16 (App Router)", 
    "React 19", 
    "TypeScript", 
    "Tailwind CSS 4", 
    "Framer Motion", 
    "Lucide Icons", 
    "Responsive Design", 
    "CSS Mesh Gradients",
    "Modern UI/UX Patterns"
  ],
  shopify: [
    "Liquid", 
    "Shopify Functions", 
    "Checkout Extensibility", 
    "Hydrogen & Oxygen (Headless)", 
    "Metafields & Metaobjects", 
    "Shopify Pixels & API",
    "Theme OS 2.0",
    "Polaris UI"
  ],
  expertise: [
    "Core Web Vitals", 
    "SEO Optimization", 
    "Conversion Rate Optimization (CRO)", 
    "UI/UX Design Implementation",
    "Node.js & Webhooks",
    "Performance Auditing"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary/20 border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 capitalize text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-background px-4 py-2 rounded-full text-sm border border-border hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
