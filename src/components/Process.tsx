"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconPhone, IconFileText, IconCode, IconRocket } from "@/components/Icons";

const steps = [
  {
    step: "01",
    title: "Discovery Call (20 min)",
    duration: "Day 1",
    icon: IconPhone,
    description: "We review your store metrics, current bottlenecks, checkout friction points, or agency overflow requirements to determine if we are a good fit."
  },
  {
    step: "02",
    title: "Plan & Fixed Quote",
    duration: "Day 2",
    icon: IconFileText,
    description: "You receive a clear, documented proposal with fixed milestones, exact deliverables, and a guaranteed timeline. Zero surprise invoices."
  },
  {
    step: "03",
    title: "Build & Review",
    duration: "Week 1–2",
    icon: IconCode,
    description: "Development takes place in a preview/staging environment with asynchronous Loom & Slack updates. Includes 2 complete feedback and revision rounds."
  },
  {
    step: "04",
    title: "Launch & 14-Day Warranty",
    duration: "Handoff",
    icon: IconRocket,
    description: "Thorough multi-device QA, zero-downtime production deployment, documented customizer settings, and 14 days of dedicated post-launch bug warranty."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-secondary/5 border-y border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Predictable Execution
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            How We Work Together
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base">
            Whether you are a fast-growing DTC brand or an agency needing reliable white-label capacity, this is my 4-step delivery framework.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-background border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-mono text-primary/30">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {item.duration}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
