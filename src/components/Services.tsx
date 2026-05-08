"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Code, Zap, Globe, Layout, Settings, Rocket, Search } from "lucide-react";

const services = [
  {
    title: "Shopify 2.0 Theme Development",
    description: "Custom Shopify 2.0 storefronts built with Liquid templating on the Dawn framework — engineered for high conversion rates and maximum AOV.",
    icon: ShoppingBag,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Data-driven UI/UX improvements targeting cart abandonment, checkout friction, and Core Web Vitals to directly grow revenue.",
    icon: Zap,
  },
  {
    title: "Shopify Speed Optimization",
    description: "Sub-second load times via asset minification, lazy loading, critical CSS, and LCP/TTI reduction — achieving 90+ Lighthouse scores.",
    icon: Rocket,
  },
  {
    title: "Headless Commerce (Storefront API)",
    description: "Decoupled storefronts using Shopify Storefront API and GraphQL for ultimate speed, flexibility, and global performance.",
    icon: Globe,
  },
  {
    title: "Checkout Extensibility & B2B",
    description: "Custom checkout flows, B2B buyer experiences, and subscription setups using Shopify Checkout UI Extensions and Metaobjects.",
    icon: Layout,
  },
  {
    title: "API & Payment Integrations",
    description: "Seamless Stripe, PayPal, ERP, and CRM integrations with full CORS handling and zero transaction downtime.",
    icon: Settings,
  },
  {
    title: "React.js SPA Development",
    description: "High-performance single-page applications using React.js, Redux Toolkit, JavaScript ES6+, and Tailwind CSS — pixel-perfect Figma to code.",
    icon: Code,
  },
  {
    title: "Shopify SEO Optimization",
    description: "Structured data markup, canonical tags, sitemap optimization, and metadata strategy to improve organic rankings across product and collection pages.",
    icon: Search,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">Services I Offer</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Shopify 2.0 development, React.js engineering, and e-commerce solutions that scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg group flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-tight">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
