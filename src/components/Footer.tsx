import React from "react";
import { IconGithub, IconLinkedin, IconMail } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Muhammad Ehtesham Ayyaz. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ehtesham-19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ehtesham-ayyaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:mehteshamdeveloper@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-1"
            aria-label="Email"
          >
            <IconMail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
