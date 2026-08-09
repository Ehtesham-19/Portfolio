"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = {
  shopify: [
    "Liquid",
    "Shopify Functions",
    "Checkout Extensibility",
    "Hydrogen & Oxygen (Headless)",
    "Metafields & Metaobjects",
    "Shopify Pixels & API",
    "Theme OS 2.0",
    "Polaris UI",
    "Shopify B2B / DTC",
    "Dawn Framework",
    "Shopify SEO",
    "Shopify Admin API",
  ],
  frontend: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Framer Motion",
    "Lucide Icons",
    "Responsive Design",
    "CSS Mesh Gradients",
    "Modern UI/UX Patterns",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "RESTful APIs",
    "Figma to Code",
  ],
  "Performance & Integrations": [
    "Core Web Vitals",
    "SEO Optimization",
    "Conversion Rate Optimization (CRO)",
    "UI/UX Design Implementation",
    "Node.js & Webhooks",
    "Performance Auditing",
    "Stripe & PayPal Integration",

    "Asset Minification",
    "Lazy Loading & Code Splitting",
    "CORS & Rate-Limit Handling",
  ],
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
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            My Skills
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary/20 border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors flex flex-col"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category === "shopify"
                  ? "Shopify Development"
                  : category === "frontend"
                    ? "Frontend Development"
                    : category}
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
