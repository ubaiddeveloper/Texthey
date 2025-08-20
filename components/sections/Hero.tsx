"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  MessageSquare,
  Users,
  TrendingDown,
  Calendar,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      // Register locally to avoid order issues
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch {}
    }

    if (
      !heroRef.current ||
      !headlineRef.current ||
      !deviceRef.current ||
      !statsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate headline with staggered text reveal (idempotent in Strict Mode)
      const headline = headlineRef.current!;
      const spans = headline.querySelectorAll("span");

      // Only process if we don't already have the animated spans
      if (spans.length === 0) {
        const baseText =
          headline.getAttribute("data-headline") || headline.textContent || "";
        headline.setAttribute("data-headline", baseText);

        // Get the individual span elements and process them
        const bookingSpan = headline.querySelector("span.whitespace-nowrap");
        const justGotTextyText = headline.lastChild?.textContent?.trim() || "";

        if (bookingSpan) {
          // Split "Booking Appointments" into word spans
          const bookingWords = bookingSpan.textContent?.split(" ") || [];
          bookingSpan.innerHTML = bookingWords
            .map((word) => `<span class="inline-block">${word}</span>`)
            .join(" ");
        }

        // Split "Just Got Texty" into word spans
        const justGotTextyWords = justGotTextyText.split(" ");
        const justGotTextySpans = justGotTextyWords
          .map((word) => `<span class="inline-block">${word}</span>`)
          .join(" ");

        // Replace the text after the br with spans
        headline.innerHTML = `<span class="whitespace-nowrap">${
          bookingSpan?.innerHTML || ""
        }</span><br />${justGotTextySpans}`;
      }

      tl.from(headline.children, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
      })
        .from(
          ".hero-subtext",
          {
            duration: 0.6,
            y: 50,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-cta",
          {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .set(".hero-cta", { opacity: 1, y: 0 })
        .from(
          deviceRef.current!,
          {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            y: 100,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          statsRef.current!.children,
          {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Parallax effect for background
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animate counter numbers
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const targetStr = counter.getAttribute("data-target") || "0";
        const target = parseFloat(targetStr);
        const isDecimal = targetStr.includes(".");

        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-pink-50/30"
    >
      {/* Background Pattern */}
      <div className="hero-bg absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="whitespace-nowrap text-slate-900">
                Booking Appointments
              </span>
              <br />
              <span className="gradient-brand-text">Just Got Texty</span>
            </h1>

            <p className="hero-subtext text-xl text-gray-600 mb-8 leading-relaxed">
              Clients book, reschedule, and pay — all by texting.
              <br />
              No apps. No Calls. No hassle.
            </p>

            <div className="flex justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="hero-cta bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ opacity: 1, transform: "translateY(0px)" }}
              >
                Text Now
              </Button>
            </div>

            {/* Trust Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingDown className="h-6 w-6 text-brand-cyan mr-2" />
                  <span
                    className="counter text-2xl font-bold text-slate-900"
                    data-target="30"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-slate-900">%</span>
                </div>
                <p className="text-sm text-gray-600">Fewer no-shows</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Calendar className="h-6 w-6 text-brand-pink mr-2" />
                  <span
                    className="counter text-2xl font-bold text-slate-900"
                    data-target="25"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-slate-900">%</span>
                </div>
                <p className="text-sm text-gray-600">More bookings</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 text-brand-cyan mr-2" />
                  <span
                    className="counter text-2xl font-bold text-slate-900"
                    data-target="4.9"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-slate-900">★</span>
                </div>
                <p className="text-sm text-gray-600">Average rating</p>
              </div>
            </div>

            {/* Trust Message */}
            <div className="mt-6 text-center lg:text-left">
              <p className="text-gray-600 italic">
                Trusted by businesses worldwide to reduce no-shows and boost
                bookings.
              </p>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div ref={deviceRef} className="relative flex justify-end">
            <div className="relative max-w-md scale-100">
              {/* Dashboard Mockup - Background - Now positioned to the left */}
              <div className="absolute top-40 -left-80 w-64 h-48 bg-white/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 transform -rotate-12 z-30 overflow-hidden">
                <div className="p-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      TextHey Dashboard
                    </h3>
                    <div className="text-xs text-brand-cyan font-medium bg-brand-cyan/20 backdrop-blur-sm px-2 py-1 rounded border border-brand-cyan/30">
                      +12 new
                    </div>
                  </div>
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-brand-cyan/20 backdrop-blur-sm p-2 rounded-lg border border-brand-cyan/30">
                      <div className="text-lg font-bold text-brand-cyan">
                        24
                      </div>
                      <div className="text-xs text-gray-700">
                        Today&apos;s Bookings
                      </div>
                    </div>
                    <div className="bg-brand-pink/20 backdrop-blur-sm p-2 rounded-lg border border-brand-pink/30">
                      <div className="text-lg font-bold text-brand-pink">
                        $1,240
                      </div>
                      <div className="text-xs text-gray-700">Revenue</div>
                    </div>
                  </div>
                  {/* Recent Activity */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between py-1 border-b border-white/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="text-xs font-medium text-gray-900">
                            Sarah J.
                          </div>
                          <div className="text-xs text-gray-700">2:00 PM</div>
                        </div>
                      </div>
                      <div className="text-xs bg-green-500/20 text-green-800 px-1.5 py-0.5 rounded border border-green-500/30 backdrop-blur-sm">
                        Paid
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                        <div>
                          <div className="text-xs font-medium text-gray-900">
                            Mike C.
                          </div>
                          <div className="text-xs text-gray-700">3:30 PM</div>
                        </div>
                      </div>
                      <div className="text-xs bg-brand-cyan/20 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/30 backdrop-blur-sm">
                        Confirmed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone Mockup */}
              <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-72 relative z-10">
                {/* iPhone Notch */}
                <div className="bg-slate-900 h-6 rounded-t-[2.2rem] relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-800 rounded-full"></div>
                </div>
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex items-center justify-between text-sm">
                    <div className="font-semibold">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-black rounded-sm">
                        <div className="w-3 h-1 bg-black rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  {/* Message Header */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          TextHey SMS
                        </div>
                        <div className="text-xs text-gray-500">Online</div>
                      </div>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="p-3 space-y-2 bg-white h-96">
                    <div className="text-right">
                      <div className="inline-block bg-brand-cyan text-white px-2 py-1.5 rounded-2xl rounded-tr-md max-w-[160px] text-xs">
                        Book haircut
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        11:23 AM
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-gray-100 text-gray-900 px-2 py-1.5 rounded-2xl rounded-tl-md max-w-[160px] text-xs">
                        Hi! I&apos;d love to help you book an appointment. What
                        service are you interested in?
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        11:23 AM
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-gray-100 text-gray-900 px-2 py-1.5 rounded-2xl rounded-tl-md max-w-[160px] text-xs">
                        📅 Available times today: • 2:00 PM - Sarah • 3:30 PM -
                        Mike • 5:00 PM - Sarah Reply with a time!
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        11:24 AM
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-block bg-brand-cyan text-white px-2 py-1.5 rounded-2xl rounded-tr-md max-w-[160px] text-xs">
                        3:30 PM with Mike
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        11:25 AM
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block gradient-brand text-white px-2 py-1.5 rounded-2xl rounded-tl-md max-w-[160px] text-xs">
                        ✅ Booked! Your haircut with Mike is confirmed for today
                        at 3:30 PM. 💳 Pay now: bit.ly/pay-xyz
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        11:25 AM
                      </div>
                    </div>
                  </div>
                  {/* iPhone Home Indicator */}
                  <div className="bg-white px-4 py-2 flex justify-center">
                    <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
