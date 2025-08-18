"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Zap, Bell } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const WhyTextHey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".benefit-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
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
  }, []);

  const benefits = [
    {
      icon: MessageSquare,
      title: "Frictionless Booking",
      description:
        'Clients simply text "Hey" to start booking. No downloads, no apps, no complicated steps.',
      features: [
        "Instant booking flow",
        "Works on any phone",
        "No logins needed",
      ],
    },
    {
      icon: Zap,
      title: "Drive Engagement",
      description: "Stay connected with customers and keep bookings flowing.",
      features: [
        "Promotional campaigns",
        "1-click rebook suggestions",
        "Follow-up review requests",
      ],
    },
    {
      icon: Bell,
      title: "Reduce No-Shows",
      description:
        "Stay on schedule with reminders and flexible rescheduling options.",
      features: [
        "Automated reminders",
        "Quick rescheduling",
        "Easy cancellation handling",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="gradient-brand-text">Text Hey</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your booking process with the simplicity of text
            messaging. Your clients already know how to text — now they can book
            appointments the same way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl gradient-brand-animated"
                ></div>
                <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-slate-50 to-white"></div>
              </div>

              {/* Static Border */}
              <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-transparent transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-brand-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-brand-cyan group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-pink/0 group-hover:from-brand-cyan/10 group-hover:to-brand-pink/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see it in action?
          </p>
          <button className="gradient-brand hover:gradient-brand-animated text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyTextHey;
