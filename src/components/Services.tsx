"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Code, Zap, Layout, Settings, Globe } from "lucide-react";

const services = [
  {
    title: "Conversion-Led Theme Dev",
    description: "Building custom Shopify themes engineered for high Conversion Rates (CR) and maximized Average Order Value (AOV).",
    icon: ShoppingBag,
  },
  {
    title: "Revenue Optimization",
    description: "Data-driven UI/UX improvements focused on reducing cart abandonment and streamlining the path to purchase.",
    icon: Zap,
  },
  {
    title: "Performance Engineering",
    description: "Achieving sub-second load times and 90+ Lighthouse scores to boost SEO rankings and mobile retention.",
    icon: Code,
  },
  {
    title: "Scaleable Headless Commerce",
    description: "Future-proofing your brand with Hydrogen & Oxygen for ultimate speed, flexibility, and global scaling.",
    icon: Globe,
  },
  {
    title: "Retention & Loyalty Setup",
    description: "Implementing custom customer portals and subscription flows to increase Customer Lifetime Value (LTV).",
    icon: Layout,
  },
  {
    title: "Strategic API Integrations",
    description: "Connecting ERPs, CRMs, and custom middleware to Shopify to automate growth and eliminate operational friction.",
    icon: Settings,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Specializing in high-end Shopify solutions and modern frontend engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
