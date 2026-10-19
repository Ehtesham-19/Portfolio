"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconZap, 
  IconShoppingBag, 
  IconLayout, 
  IconUsers, 
  IconClock, 
  IconCheck, 
  IconChevronDown, 
  IconArrowRight, 
  IconCode, 
  IconSearch 
} from "@/components/Icons";

const coreOffers = [
  {
    id: "theme-dev",
    title: "Shopify 2.0 Theme Development",
    headline: "Custom Liquid storefronts engineered from Figma",
    icon: IconShoppingBag,
    timeline: "Custom Scope · Sprint Based",
    bullets: [
      "Bespoke Liquid section packs compatible with Theme OS 2.0 & Dawn",
      "Dynamic Metafields & Metaobjects schema setup for easy client editing",
      "Mobile-first, pixel-perfect UI execution tested across all breakpoints",
      "Clean, modular code structure with zero template bloat and full documentation"
    ],
    ctaText: "Discuss Theme Project",
    ctaHref: "#calendly",
    popular: true
  },
  {
    id: "speed-optimization",
    title: "Speed & Core Web Vitals Optimization",
    headline: "Faster load times, sub-second response & higher Google rankings",
    icon: IconZap,
    timeline: "Sprint Based · 5–7 Days",
    bullets: [
      "In-depth performance audit profiling LCP, CLS, INP, and TTFB bottlenecks",
      "App bloat clean-up, unused JavaScript elimination, and critical CSS inlining",
      "Advanced asset optimization (modern WebP/AVIF formats and lazy loading)",
      "Measurable before-and-after Lighthouse verification aiming for 90+ scores"
    ],
    ctaText: "Request Speed Audit",
    ctaHref: "#calendly",
    popular: false
  },
  {
    id: "cro-checkout",
    title: "Conversion Rate Optimization (CRO) & Checkout",
    headline: "Turn more store visitors into paying repeat customers",
    icon: IconLayout,
    timeline: "Deliverable Focused · Sprint Based",
    bullets: [
      "8-pillar deterministic heuristic evaluation of your product and cart flows",
      "Shopify Checkout UI Extensions & custom cart rules for Shopify Plus",
      "Sticky add-to-cart, smart cross-sells, trust badges, and sizing guide drawers",
      "Eliminating checkout friction points to reduce customer bounce rates on mobile"
    ],
    ctaText: "Explore CRO Solutions",
    ctaHref: "#calendly",
    popular: false
  },
  {
    id: "react-nextjs",
    title: "React & Next.js Front-End Engineering",
    headline: "High-performance web apps, merchant dashboards & interactive UIs",
    icon: IconCode,
    timeline: "Milestone Based · Scalable Architecture",
    bullets: [
      "Modern SPA and full-stack development using Next.js 16 (App Router) & React 19",
      "Custom merchant automation tools, internal dashboards, and data pipelines",
      "Strict TypeScript typing, Tailwind CSS v4 styling, and smooth Framer Motion interactions",
      "Seamless REST & GraphQL API integrations with secure state management"
    ],
    ctaText: "Discuss Front-End Build",
    ctaHref: "#calendly",
    popular: false
  }
];

const agencyWhiteLabel = {
  title: "Agency White-Label & Overflow Capacity",
  headline: "Reliable senior technical partner for creative and marketing agencies",
  icon: IconUsers,
  bullets: [
    "Dedicated sprint hours with strict NDA compliance and confidential handoffs",
    "Clean Git PR-based workflows, descriptive commits, and collaborative code reviews",
    "Asynchronous Loom & Slack communication with guaranteed 24-hour turnaround",
    "Fast, dependable execution on tight deadlines with zero oversight required"
  ]
};

const faqs = [
  {
    question: "What is your typical project workflow?",
    answer: "Every project starts with a 20-minute technical discovery call to define exact scope and constraints. Development is conducted on a dedicated preview/staging environment with asynchronous Loom updates and collaborative feedback rounds before live deployment."
  },
  {
    question: "Do you work with digital agencies on a white-label basis?",
    answer: "Yes, frequently. I work as a white-label developer for agencies across the US, UK, and Europe, adhering to strict NDAs, client confidentiality, and PR-driven Git collaboration."
  },
  {
    question: "How do you approach Core Web Vitals optimization?",
    answer: "I conduct a thorough waterfall analysis of network requests, JavaScript execution time, third-party apps, and render-blocking resources. I systematically optimize Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) to deliver 90+ Lighthouse scores."
  },
  {
    question: "How do you handle timezone differences?",
    answer: "I maintain daily communication overlap with European, UK, and US Eastern timezones, and I guarantee replies to all inquiries within 24 hours."
  },
  {
    question: "What happens after launch?",
    answer: "All projects include a 14-day post-launch warranty period to ensure bug-free operation, provide documentation, and support your team."
  }
];

export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Specialized Technical Services
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
            Services & Expertise
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base">
            Shopify 2.0 theme development, Core Web Vitals speed optimization, conversion rate optimization (CRO), and modern React & Next.js front-end engineering.
          </p>
        </motion.div>

        {/* 4 Core Services Grid - Clean, No Price Tags */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {coreOffers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border transition-all flex flex-col justify-between ${
                offer.popular
                  ? "bg-gradient-to-b from-primary/10 via-background to-background border-primary/50 shadow-xl"
                  : "bg-secondary/20 border-border hover:border-primary/40 hover:shadow-lg"
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Core Specialization
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <offer.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                      {offer.timeline}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1 text-foreground">{offer.title}</h3>
                <p className="text-sm font-medium text-primary mb-6">{offer.headline}</p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-8">
                  {offer.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <IconCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={offer.ctaHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>{offer.ctaText}</span>
                <IconArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Agency White-Label Partnership Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 rounded-2xl bg-secondary/20 border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <IconUsers className="h-4 w-4" />
              <span>Agency Dedicated Capacity</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {agencyWhiteLabel.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              {agencyWhiteLabel.headline}
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
              {agencyWhiteLabel.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <IconCheck className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="#calendly"
            className="shrink-0 bg-secondary hover:bg-secondary/80 text-foreground font-bold px-6 py-3.5 rounded-xl border border-border text-xs transition-all hover:border-primary/50"
          >
            Partner as White-Label
          </a>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-border/60">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-muted-foreground">
              Clear answers on turnaround, technical approach, agency workflows, and collaboration.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border/70 rounded-xl overflow-hidden bg-secondary/10 transition-colors hover:border-border"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground"
                >
                  <span>{faq.question}</span>
                  <IconChevronDown
                    className={`h-4 w-4 text-primary shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
