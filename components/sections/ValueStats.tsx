"use client";

import { useEffect, useRef } from "react";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ValueStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate stat cards
    gsap.fromTo(
      ".stat-card",
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate counter numbers
    const counters = document.querySelectorAll(".value-counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      const suffix = counter.getAttribute("data-suffix") || "";

      gsap.to(counter, {
        innerHTML: target,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        // onUpdate: function() {
        //   counter.innerHTML = Math.ceil(counter.innerHTML) + suffix;
        // },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: 30,
      suffix: "%",
      title: "Increase in Bookings",
      description:
        "Businesses see an average 30% increase in monthly bookings within the first 60 days",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Clock,
      value: 15,
      suffix: " hrs",
      title: "Time Saved Weekly",
      description:
        "Automate booking confirmations, reminders, and follow-ups to focus on what matters most",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: DollarSign,
      value: 40,
      suffix: "%",
      title: "Reduction in No-Shows",
      description:
        "Smart reminders and easy rescheduling keep your calendar full and revenue flowing",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The Results Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact Text Hey has on businesses just like
            yours. These aren't just numbers — they're real results from real
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card relative bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group`}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                  <span
                    className="value-counter"
                    data-target={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {stat.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Background */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10">
                <stat.icon className="w-full h-full text-gray-400" />
              </div>

              {/* Hover Effect Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Teaser */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Calculate Your Potential ROI
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Based on data from over 10,000 businesses, here's what you could
              expect with Text Hey in your first year:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  +$18K
                </div>
                <div className="text-sm text-gray-600">
                  Average revenue increase
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-teal-600 mb-2">780</div>
                <div className="text-sm text-gray-600">
                  Hours saved annually
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  450%
                </div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  3 mo
                </div>
                <div className="text-sm text-gray-600">Payback period</div>
              </div>
            </div>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Calculate My ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStats;
