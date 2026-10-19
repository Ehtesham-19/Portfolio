import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PremiumBackground } from "@/components/PremiumBackground";
import { CalendlyBadge } from "@/components/CalendlyBadge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ehteshamdeveloper.dev"),
  title: "Shopify Developer & Front-End Engineer | Liquid, CRO & Speed Optimization | Muhammad Ehtesham Ayyaz",
  description:
    "Shopify Developer & React/Next.js Front-End Engineer specializing in custom Liquid themes, Core Web Vitals speed optimization, and CRO. 5+ years experience. Remote, working with brands and agencies worldwide.",
  keywords: [
    "Shopify Developer",
    "Shopify Theme Development",
    "Shopify Speed Optimization",
    "Core Web Vitals",
    "Shopify CRO",
    "Liquid Developer",
    "React Developer",
    "Next.js Front-End Engineer",
    "White-label Shopify Agency Dev",
    "Muhammad Ehtesham Ayyaz"
  ],
  authors: [{ name: "Muhammad Ehtesham Ayyaz", url: "https://www.ehteshamdeveloper.dev" }],
  creator: "Muhammad Ehtesham Ayyaz",
  alternates: {
    canonical: "https://www.ehteshamdeveloper.dev",
  },
  openGraph: {
    title: "Shopify Developer & Front-End Engineer | Muhammad Ehtesham Ayyaz",
    description:
      "Shopify Developer & React/Next.js Front-End Engineer specializing in custom Liquid themes, Core Web Vitals speed optimization, and CRO. 5+ years experience.",
    url: "https://www.ehteshamdeveloper.dev",
    siteName: "Muhammad Ehtesham Ayyaz - Shopify & Front-End Developer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Developer & Front-End Engineer | Muhammad Ehtesham Ayyaz",
    description:
      "Fast, conversion-focused Shopify 2.0 storefronts, Liquid themes, and modern React/Next.js applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ehteshamdeveloper.dev/#person",
      name: "Muhammad Ehtesham Ayyaz",
      jobTitle: "Shopify Developer & Front-End Engineer",
      url: "https://www.ehteshamdeveloper.dev",
      sameAs: [
        "https://github.com/Ehtesham-19",
        "https://www.linkedin.com/in/muhammad-ehtesham-ayyaz/"
      ],
      knowsAbout: [
        "Shopify Development",
        "Liquid Templating",
        "Shopify Speed Optimization",
        "Core Web Vitals",
        "Conversion Rate Optimization (CRO)",
        "React",
        "Next.js"
      ],
      email: "mailto:mehteshamdeveloper@gmail.com"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ehteshamdeveloper.dev/#service",
      name: "Muhammad Ehtesham Ayyaz - Shopify & Front-End Development",
      url: "https://www.ehteshamdeveloper.dev",
      areaServed: "Worldwide",
      description: "Custom Shopify 2.0 themes, Core Web Vitals speed optimization, CRO, and React/Next.js web engineering for DTC brands and digital agencies."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PremiumBackground />
          <div className="relative z-10">{children}</div>
          <CalendlyBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
