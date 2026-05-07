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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
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
            <h3 className="text-2xl font-semibold">
              Crafting Digital Excellence as a Shopify & Frontend Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hello! I&apos;m Muhammad Ehtesham Ayyaz, a developer dedicated to 
              transforming ideas into high-quality digital products. With a strong 
              focus on Shopify ecosystem and modern frontend technologies, I help 
              businesses scale and users enjoy seamless web experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines technical proficiency with an eye for design, 
              ensuring that every project is not only functional but also visually 
              compelling and user-centric. I thrive on solving complex problems 
              and staying at the forefront of the ever-evolving web development landscape.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="font-semibold">Role</p>
                <p className="text-sm text-muted-foreground">Frontend / Shopify Dev</p>
              </div>
              <div>
                <p className="font-semibold">Experience</p>
                <p className="text-sm text-muted-foreground">2+ Years </p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">mehteshamdeveloper@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm text-muted-foreground">Bahawalpur,Punjab,Pakistan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
