"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhyTextHey from "@/components/sections/WhyTextHey";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Industries from "@/components/sections/Industries";
import SocialProof from "@/components/sections/SocialProof";
import ValueStats from "@/components/sections/ValueStats";
import CTABanner from "@/components/sections/CTABanner";
import PricingTeaser from "@/components/sections/PricingTeaser";
import Footer from "@/components/sections/Footer";

// export const runtime = "edge";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <WhyTextHey />
      <HowItWorks />
      <Features />
      <Industries />
      <SocialProof />
      {/* <ValueStats /> */}
      {/* <CTABanner /> */}
      {/* <PricingTeaser /> */}
      <Footer />
    </main>
  );
}
