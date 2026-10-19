"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconExternalLink, IconSparkles, IconCheck } from "@/components/Icons";
import Image from "next/image";

type CategoryType = "all" | "my-tools" | "shopify" | "react";

interface Project {
  title: string;
  category: CategoryType;
  categoryLabel: string;
  role: string;
  problem: string;
  built: string;
  features?: string[];
  result: string;
  image: string;
  tags: string[];
  live: string;
  isSelfBuiltTool?: boolean;
}

const projects: Project[] = [
  // --- ENTERPRISE SAAS TOOL (SOLO BUILT) ---
  {
    title: "Shopify Developer & Merchant Toolkit (Enterprise SaaS)",
    category: "my-tools",
    categoryLabel: "Solo Enterprise SaaS Built by Me",
    role: "100% Solo Creator & Full-Stack Architect",
    isSelfBuiltTool: true,
    problem: "Merchants and agency developers lack an all-in-one technical platform to audit live storefront performance, evaluate app bloat, and automate technical developer tasks without expensive subscriptions.",
    built: "I engineered this enterprise-grade technical performance audit, CRO analyzer, and developer automation suite built from the ground up for modern Shopify merchants and agency developers.",
    features: [
      "Autonomous Store Audit Engine: Crawls public Shopify storefronts delivering deep PageSpeed insights, Core Web Vitals (LCP, CLS, INP, TTFB), and an 8-pillar deterministic CRO heuristic evaluation.",
      "AI-Driven Action Plans: Integrates OpenAI gpt-4o-mini (with strict Zod schema validation) and deterministic fallback engine to produce prioritized sprint roadmaps (Quick Wins, High Impact).",
      "Single-Crawl Orchestration: Unified Scan Orchestrator with in-memory TTL caching and SSRF protection to prevent redundant crawls and ensure zero server overload.",
      "12+ Specialized Modules: Shopify App Detector, App Cost Analyzer, SEO Manager, Speed Optimization Planner, Image Optimizer, Theme Intelligence, and 9 standalone developer utilities."
    ],
    result: "Comprehensive real-time technical audit & CRO roadmap generated in under 60 seconds with zero server bloat.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["Built by Me", "Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "OpenAI gpt-4o-mini", "Zustand"],
    live: "https://shopify-tool-one.vercel.app/"
  },
  {
    title: "Product Scrapper Bay",
    category: "my-tools",
    categoryLabel: "Solo Tool Built by Me",
    role: "100% Solo Creator & Engineer",
    isSelfBuiltTool: true,
    problem: "Merchants migrating products to Shopify waste weeks manually copy-pasting product titles, variant options, high-res images, and pricing history from existing catalogs.",
    built: "I architected and developed Product Scrapper Bay as an automated e-commerce extraction and catalog migration pipeline. It crawls product URLs, extracts complete product schemas, and exports clean, Shopify-ready CSVs and structured JSON in seconds.",
    features: [
      "Automated Variant & Image Extraction: Captures complex color/size variants and full-res gallery assets.",
      "Shopify-Ready CSV Export: Formats extracted catalogs directly into Shopify's native bulk import schema.",
      "Real-time Crawl Engine: Handles dynamic JavaScript rendering and pagination automatically.",
      "Clean React Dashboard: Gives merchants instant preview and schema validation of extracted data."
    ],
    result: "Automated migration of 500+ SKUs in minutes, eliminating weeks of manual data entry errors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Built by Me", "Next.js 16", "React 19", "Node.js", "Web Crawling", "Catalog Migration"],
    live: "https://product-scrapper-bay.vercel.app/"
  },
  {
    title: "Shopify Audit AI",
    category: "my-tools",
    categoryLabel: "AI Merchant Tool",
    role: "Creator & Full-Stack Developer",
    isSelfBuiltTool: true,
    problem: "Store owners struggle to diagnose why their checkout rates are dropping or where customer friction points exist on mobile.",
    built: "I created this free AI auditing tool that scans Shopify storefronts for speed, Core Web Vitals, and mobile UX bottlenecks, generating actionable conversion-rate optimization (CRO) reports.",
    features: [
      "Real-time Core Web Vitals profiling (LCP, CLS, FID) via Google Lighthouse API.",
      "AI-generated CRO suggestions tailored to mobile shoppers.",
      "Actionable technical checklist for merchant dev teams."
    ],
    result: "Delivers prioritized CRO and performance recommendations in under 60 seconds.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    tags: ["Built by Me", "Next.js", "React", "AI / LLM API", "Lighthouse API", "CRO Reports"],
    live: "https://shopify-audit-ai-six.vercel.app/"
  },

  // --- CLIENT SHOPIFY WORK ---
  {
    title: "Tiletopia",
    category: "shopify",
    categoryLabel: "Shopify 2.0 Storefront",
    role: "Lead Shopify Developer",
    problem: "Customers couldn't narrow down a huge tile catalog or order physical samples before committing to large commercial orders.",
    built: "Custom Liquid-based product filtering, a dedicated B2B pro program powered by Metafields, and an integrated sample ordering checkout flow.",
    result: "Significantly reduced time-to-find across 1,000+ SKUs & boosted Average Order Value (AOV).",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80",
    tags: ["Shopify 2.0", "Liquid", "Metafields", "B2B Pro", "Checkout Extensibility"],
    live: "https://tiletopia.com/"
  },
  {
    title: "Exercere",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    role: "Shopify Theme & CRO Developer",
    problem: "Copenhagen-based activewear brand experiencing high cart friction with international currencies and checkout taxes.",
    built: "Multi-currency setup, international shipping logic, automated bundle discounts, and social commerce integrations.",
    result: "Frictionless global checkout experience & measured increase in mobile conversion rate.",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&q=80",
    tags: ["Shopify", "International CRO", "Multi-Currency", "Responsive UI", "Dawn Framework"],
    live: "https://exercere.com/"
  },
  {
    title: "Anya Active",
    category: "shopify",
    categoryLabel: "Shopify Storefront",
    role: "Retention & Features Engineer",
    problem: "High apparel sizing returns and low repeat purchases across regular seasonal drops.",
    built: "Loyalty rewards system via Metaobjects, automated back-in-stock alerts, and custom interactive size guide drawer.",
    result: "Improved customer lifetime value (LTV) and noticeable reduction in size-related returns.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    tags: ["Shopify", "Metaobjects", "Loyalty Rewards", "Size Guide UI", "Retention"],
    live: "https://www.anyaactive.com/"
  },
  
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<CategoryType>("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => {
        if (activeTab === "my-tools") return p.category === "my-tools";
        if (activeTab === "shopify") return p.category === "shopify";
        return p.category === activeTab;
      });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Client Storefronts & Software Engineering
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            Featured Projects & Tools
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base">
            Proven Shopify Plus client stores and custom developer software I architected solo with React & Next.js.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("my-tools")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "my-tools"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <IconSparkles className="h-3 w-3" />
            <span>Tools Built by Me (3)</span>
          </button>
          <button
            onClick={() => setActiveTab("shopify")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "shopify"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            Shopify Client Stores (4)
          </button>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden transition-all flex flex-col justify-between hover:shadow-xl ${
                  project.isSelfBuiltTool
                    ? "bg-gradient-to-b from-primary/5 via-secondary/15 to-background border-2 border-primary/40 hover:border-primary shadow-md"
                    : "bg-secondary/15 border border-border/80 hover:border-primary/50"
                }`}
              >
                <div>
                  {/* Image & Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-secondary/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
                    
                    {/* Badge top-left */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider backdrop-blur-md px-3 py-1 rounded-full border shadow-sm ${
                        project.isSelfBuiltTool
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background/90 text-foreground border-border/60"
                      }`}>
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Result Callout Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-2.5 rounded-lg bg-background/95 backdrop-blur-md border border-border/80 flex items-center gap-2 text-xs shadow-md">
                        <IconSparkles className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-semibold text-foreground truncate">
                          {project.result}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-2xl font-black text-foreground tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div className="text-xs font-mono text-primary font-bold mb-4">
                      Role: {project.role}
                    </div>

                    {/* Problem & What I Built */}
                    <div className="space-y-3 mb-5 text-xs sm:text-sm text-muted-foreground">
                      <div>
                        <strong className="text-foreground font-semibold">The Problem: </strong>
                        <span>{project.problem}</span>
                      </div>
                      <div>
                        <strong className="text-foreground font-semibold">What I Engineered: </strong>
                        <span>{project.built}</span>
                      </div>
                    </div>

                    {/* Feature Bullets (For Self-Built Tools) */}
                    {project.features && (
                      <div className="mb-5 p-3.5 rounded-xl bg-background/80 border border-border/60 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                          Core Capabilities I Developed:
                        </div>
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <IconCheck className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-border/40 mt-auto flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.isSelfBuiltTool ? "Live & Functional" : "Live Storefront"}
                  </span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all py-2 px-4 rounded-xl shadow-sm hover:shadow-md"
                  >
                    <span>{project.isSelfBuiltTool ? "Open My Tool" : "Visit Storefront"}</span>
                    <IconExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
