"use client";

import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      destroyBadgeWidget?: () => void;
    };
  }
}

export function CalendlyBadge() {
  const initWidget = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      // Avoid duplicate badges
      if (document.querySelector(".calendly-badge-widget")) {
        return;
      }
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/mehteshamdeveloper/30min",
        text: "Schedule time with me",
        color: "#0069ff",
        textColor: "#ffffff",
        branding: true,
      });
    }
  };

  useEffect(() => {
    // If script is already loaded
    if (window.Calendly) {
      initWidget();
    }
  }, []);

  return (
    <>
      {/* Calendly Badge CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {/* Calendly Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initWidget}
      />
    </>
  );
}
