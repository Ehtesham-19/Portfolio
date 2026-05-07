"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import { Parallax } from "./Parallax";
import Image from "next/image";

const projects = [
  {
    title: "Tiletopia",
    description: "A design-forward e-commerce platform for premium tiles. Implemented advanced filtering, a sample ordering system, and a robust B2B pro program.",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80",
    tags: ["Shopify", "Liquid", "B2B", "Filtering"],
    live: "https://tiletopia.com/",
    github: "#"
  },
  {
    title: "Exercere",
    description: "Exclusive activewear and loungewear brand based in Copenhagen. Optimized for international shipping, bundle discounts, and seamless social integration.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&q=80",
    tags: ["Shopify", "UI/UX", "International", "Marketing"],
    live: "https://exercere.com/",
    github: "#"
  },
  {
    title: "Anya Active",
    description: "Inclusive activewear label focusing on movement. Integrated loyalty rewards, size guides, and back-in-stock notifications for enhanced retention.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    tags: ["Shopify", "Loyalty", "Retention", "Responsive"],
    live: "https://www.anyaactive.com/",
    github: "#"
  },
  {
    title: "Hanne Bloch",
    description: "Luxury fashion house specializing in silk swimwear and apparel. Focused on high-end visual storytelling and premium collection management.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    tags: ["Shopify", "Luxury", "Liquid", "Styling"],
    live: "https://hanne-bloch.com/",
    github: "#"
  },
  {
    title: "Office Management System (OMS)",
    description: "A high-performance enterprise dashboard for real-time tracking, resource allocation, and automated operational logistics management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "React", "Dashboard", "Internal"],
    live: "#",
    github: "#"
  },
  {
    title: "SAMS",
    description: "Advanced management portal designed for tracking achievements, milestones, and performance metrics with interactive data visualization.",
    image: null,
    tags: ["React", "TypeScript", "Analytics", "SaaS"],
    live: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, i) => (
            <Parallax key={project.title} offset={i % 2 === 0 ? 30 : -30} className="flex h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl w-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-secondary/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <Monitor className="h-12 w-12 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 flex items-center gap-2 font-medium"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
