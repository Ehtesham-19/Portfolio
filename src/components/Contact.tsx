"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  IconMail, 
  IconMapPin, 
  IconSend, 
  IconMessageSquare, 
  IconCalendar, 
  IconClock, 
  IconShieldCheck, 
  IconCheckCircle 
} from "@/components/Icons";
import Script from "next/script";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeBookingTab, setActiveBookingTab] = useState<"calendar" | "form">("calendar");

  return (
    <section id="contact" className="py-24 bg-background">
      {/* Calendly external script for inline embed */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Pre-Footer Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 via-primary/20 to-purple-600/20 border border-primary/40 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Direct Revenue Impact
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-foreground mb-4 tracking-tight">
              Got a slow store or a checkout problem? Let&apos;s fix it.
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Schedule a 20-minute technical discovery call or send a project brief. Zero sales pressure, just honest technical advice.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#calendly-section"
                className="bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full text-sm shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all transform hover:scale-105"
              >
                Book a Free Store Audit
              </a>
              <a
                href="https://wa.me/923144426193"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-emerald-500/25 transition-all"
              >
                <IconMessageSquare className="h-4 w-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div id="calendly" className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            Let&apos;s Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Schedule a Call or Send a Message
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm">
            I work remotely with brands and agencies worldwide. Choose how you&apos;d prefer to start:
          </p>
        </div>

        {/* Tab Switcher: Calendly vs Direct Message */}
        <div id="calendly-section" className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveBookingTab("calendar")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeBookingTab === "calendar"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <IconCalendar className="h-3.5 w-3.5" />
            <span>Book 30-Min Discovery (Calendly)</span>
          </button>
          <button
            onClick={() => setActiveBookingTab("form")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeBookingTab === "form"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <IconMail className="h-3.5 w-3.5" />
            <span>Send Project Brief</span>
          </button>
        </div>

        {activeBookingTab === "calendar" ? (
          /* Inline Calendly Widget */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border/80 bg-background overflow-hidden shadow-2xl p-2 sm:p-4 max-w-4xl mx-auto"
          >
            <div
              className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
              data-url="https://calendly.com/mehteshamdeveloper/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        ) : (
          /* Direct Qualified Inquiry Form - No Price Mention */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto"
          >
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-secondary/20 border border-border/70 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <IconClock className="h-4 w-4" />
                  <span>Guaranteed 24h Response</span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                    <IconMail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Email</h4>
                    <a
                      href="mailto:mehteshamdeveloper@gmail.com"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      mehteshamdeveloper@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                    <IconMessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">WhatsApp</h4>
                    <a
                      href="https://wa.me/923144426193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-emerald-400 transition-colors font-mono"
                    >
                      +92 314 4426193
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                    <IconMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Location</h4>
                    <p className="text-xs text-muted-foreground">Bahawalpur, Punjab, Pakistan (Remote Worldwide)</p>
                  </div>
                </div>
              </div>

              {/* Agency Reassurance Box */}
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 flex items-start gap-3 text-xs text-muted-foreground">
                <IconShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  All project inquiries are strictly confidential. Mutual NDAs signed on request before code or store access.
                </span>
              </div>
            </div>

            {/* Qualified Form Column - Scope & Needs Focused (No Price Mentions) */}
            <div className="lg:col-span-7 bg-background p-6 sm:p-8 rounded-3xl border border-border/80 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <IconCheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Message Received!</h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    Thank you. I review all inquiries personally and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Work Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                        placeholder="john@yourbrand.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Store / Website URL</label>
                      <input
                        type="text"
                        className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                        placeholder="https://yourstore.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Primary Requirement *</label>
                      <select
                        required
                        className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                      >
                        <option value="">Select requirement...</option>
                        <option value="theme">Shopify 2.0 Theme Dev (Liquid / OS 2.0)</option>
                        <option value="speed">Speed & Core Web Vitals Optimization</option>
                        <option value="cro">CRO & Checkout UX Optimization</option>
                        <option value="react-nextjs">React & Next.js Front-End Engineering</option>
                        <option value="agency">Agency White-Label Retainer</option>
                        <option value="other">Other Technical Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Estimated Timeline *</label>
                    <select
                      required
                      className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all"
                    >
                      <option value="">Select project timeline...</option>
                      <option value="immediate">Immediate Sprint (Within 1-2 weeks)</option>
                      <option value="upcoming">Upcoming Launch (Within 1 month)</option>
                      <option value="flexible">Flexible / Planning Phase</option>
                      <option value="retainer">Ongoing Monthly Capacity</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Project Details & Goals *</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-secondary/30 border border-border/80 rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Tell me a bit about your current store, technical challenges, and what success looks like..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:-translate-y-0.5 text-xs"
                  >
                    <span>Send Technical Inquiry</span>
                    <IconSend className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
