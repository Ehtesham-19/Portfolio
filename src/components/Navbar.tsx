"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconClose, IconGithub, IconLinkedin, IconCalendar } from "@/components/Icons";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Ehtesham-19", icon: IconGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ehtesham-ayyaz/", icon: IconLinkedin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo - Clean name without HTML angle brackets */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <a href="#" className="text-xl sm:text-2xl font-black tracking-tight group flex items-center gap-2">
            <span className="text-primary font-bold">Muhammad</span>
            <span className="text-foreground">Ehtesham</span>
            <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 ml-1">
              Shopify Plus Dev
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </motion.a>
          ))}

          {/* Socials */}
          <div className="flex items-center space-x-3 pl-4 border-l border-border">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1"
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Persistent CTA Button */}
          <a
            href="#calendly"
            className="flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <IconCalendar className="h-3.5 w-3.5" />
            <span>Book a Free Audit</span>
          </a>
        </div>

        {/* Mobile View Toggle + Quick CTA */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href="#calendly"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm"
          >
            <IconCalendar className="h-3 w-3" />
            <span>Audit</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-5 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-wide text-foreground hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 border-t border-border flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <a
                  href="#calendly"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full"
                >
                  Book Free Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
