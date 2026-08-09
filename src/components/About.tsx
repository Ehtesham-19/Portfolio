"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "./Parallax";

import Image from "next/image";
import profilePic from "./profile.png";

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Parallax offset={40}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl"
            >
              <Image
                src={profilePic}
                alt="Muhammad Ehtesham Ayyaz"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
            </motion.div>
          </Parallax>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Crafting High-Performance Shopify Stores & React.js Applications
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi, I&apos;m Muhammad Ehtesham — a Shopify Developer and
              Front-End Engineer with 2+ years of hands-on experience
              building custom Shopify 2.0 storefronts and dynamic
              React.js single-page applications. I specialize in Liquid
              templating, Checkout Extensibility, Metaobjects, and
              headless commerce via the Shopify Storefront API .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I obsess over the details that drive real business results —
              Core Web Vitals scores, Largest Contentful Paint, conversion
              rate optimization, and pixel-perfect mobile-first UIs. Whether
              you need a blazing-fast Shopify store, a custom React.js SPA,
              or a Stripe & PayPal payment integration — I deliver clean,
              scalable code with zero shortcuts.
            </p>
            
            <div className="grid grid-cols-2 gap-6 py-6 border-t border-border mt-8">
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Remote Ready</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">85+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg Lighthouse Score</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
