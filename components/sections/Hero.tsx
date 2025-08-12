"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, MessageSquare, Users, TrendingUp } from "lucide-react";
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
      const baseText =
        headline.getAttribute("data-headline") || headline.textContent || "";
      headline.setAttribute("data-headline", baseText);
      headline.innerHTML = baseText
        .split(" ")
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(" ");

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
        const target = parseInt(counter.getAttribute("data-target") || "0");
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Booking Appointments Just Got Texty
            </h1>

            <p className="hero-subtext text-xl text-gray-600 mb-8 leading-relaxed">
              Clients book, reschedule, and pay — all by texting. No apps. No
              hassle. Trusted by businesses worldwide to reduce no-shows and
              boost bookings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="hero-cta bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hero-cta border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Book a Demo
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="hero-cta text-slate-600 hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </Button>
            </div>

            {/* Trust Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="h-6 w-6 text-teal-600 mr-2" />
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
                  <MessageSquare className="h-6 w-6 text-teal-600 mr-2" />
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
                  <Users className="h-6 w-6 text-teal-600 mr-2" />
                  <span
                    className="counter text-2xl font-bold text-slate-900"
                    data-target="49"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-slate-900">★</span>
                </div>
                <p className="text-sm text-gray-600">Average rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div ref={deviceRef} className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Text Hey SMS
                    </div>
                    <div className="w-12"></div>
                  </div>
                  <div className="p-4 space-y-4 bg-gradient-to-b from-white to-gray-50 min-h-[400px]">
                    <div className="text-right">
                      <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs">
                        Book haircut
                      </div>
                      <div className="text-xs text-gray-500 mt-1">11:23 AM</div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
                        Hi! I&apos;d love to help you book an appointment. What
                        service are you interested in?
                      </div>
                      <div className="text-xs text-gray-500 mt-1">11:23 AM</div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
                        📅 Available times today: • 2:00 PM - Sarah • 3:30 PM -
                        Mike • 5:00 PM - Sarah Reply with a time!
                      </div>
                      <div className="text-xs text-gray-500 mt-1">11:24 AM</div>
                    </div>
                    <div className="text-right">
                      <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs">
                        3:30 PM with Mike
                      </div>
                      <div className="text-xs text-gray-500 mt-1">11:25 AM</div>
                    </div>
                    <div className="text-left">
                      <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
                        ✅ Booked! Your haircut with Mike is confirmed for today
                        at 3:30 PM. 💳 Pay now: bit.ly/pay-xyz
                      </div>
                      <div className="text-xs text-gray-500 mt-1">11:25 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Mockup - Background */}
              <div className="absolute -top-8 -left-8 w-64 h-48 bg-white rounded-lg shadow-xl border border-gray-200 transform -rotate-6 z-[-1]">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Today&apos;s Bookings
                    </h3>
                    <div className="text-sm text-teal-600 font-medium">
                      +12 new
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <div className="text-sm font-medium">Sarah Johnson</div>
                        <div className="text-xs text-gray-500">
                          Haircut • 2:00 PM
                        </div>
                      </div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Confirmed
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <div className="text-sm font-medium">Mike Chen</div>
                        <div className="text-xs text-gray-500">
                          Color • 3:30 PM
                        </div>
                      </div>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Paid
                      </div>
                    </div>
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
