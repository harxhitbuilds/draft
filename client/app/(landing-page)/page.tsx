"use client";
import Hero from "@/components/land/hero";
import HowItWorks from "@/components/land/how-it-works";
import FeaturesSection from "@/components/land/features";
import ExampleIdea from "@/components/land/example-card";
import CTASection from "@/components/land/cta";

export default function LandPage() {
  return (
    <div className="z-10 relative">
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <ExampleIdea />
      <CTASection />
    </div>
  );
}
