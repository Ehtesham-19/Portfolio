import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-pulse p-4 sm:p-8 space-y-12 max-w-6xl mx-auto pt-28">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-background/80 border-b border-border/40 flex items-center justify-between px-8 z-50">
        <div className="h-6 w-36 bg-secondary/60 rounded-lg" />
        <div className="hidden md:flex gap-6">
          <div className="h-4 w-16 bg-secondary/50 rounded" />
          <div className="h-4 w-16 bg-secondary/50 rounded" />
          <div className="h-4 w-16 bg-secondary/50 rounded" />
          <div className="h-4 w-16 bg-secondary/50 rounded" />
        </div>
        <div className="h-9 w-28 bg-primary/30 rounded-full" />
      </div>

      {/* Hero Skeleton */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 pt-10">
        <div className="h-7 w-48 bg-secondary/50 rounded-full" />
        <div className="h-14 sm:h-20 w-3/4 max-w-2xl bg-secondary/70 rounded-2xl" />
        <div className="h-6 w-full max-w-xl bg-secondary/40 rounded-lg" />
        <div className="h-6 w-2/3 max-w-md bg-secondary/30 rounded-lg" />
        <div className="flex gap-4 pt-4">
          <div className="h-12 w-44 bg-primary/40 rounded-full" />
          <div className="h-12 w-40 bg-secondary/60 rounded-full" />
        </div>
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
          <div className="h-16 bg-secondary/30 rounded-xl" />
          <div className="h-16 bg-secondary/30 rounded-xl" />
          <div className="h-16 bg-secondary/30 rounded-xl" />
          <div className="h-16 bg-secondary/30 rounded-xl" />
        </div>
      </div>

      {/* Projects Skeleton Grid */}
      <div className="space-y-6 pt-12">
        <div className="flex flex-col items-center space-y-3">
          <div className="h-5 w-24 bg-primary/30 rounded-full" />
          <div className="h-10 w-64 bg-secondary/60 rounded-xl" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-96 bg-secondary/30 rounded-2xl border border-border/40" />
          <div className="h-96 bg-secondary/30 rounded-2xl border border-border/40" />
        </div>
      </div>
    </div>
  );
}
