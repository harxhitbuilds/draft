"use client";
import Background from "@/components/land/background";
import ExampleIdea from "@/components/land/example-card";
import FeaturesSection from "@/components/land/features";
import Hero from "@/components/land/hero";
import WhatIs from "@/components/land/what_is";

export default function LandPage() {
  return (
    <div className="bg-background relative z-10 flex min-h-screen flex-col">
      <Background />
      <Hero />
      <WhatIs />
      <FeaturesSection />
      <ExampleIdea />
    </div>
  );
}
