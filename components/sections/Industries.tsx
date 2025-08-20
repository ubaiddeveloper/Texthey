"use client";

import { useEffect, useRef } from "react";
import {
  Scissors,
  Paintbrush,
  Heart,
  PawPrint,
  Car,
  Smile,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".industry-card",
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
        stagger: 0.15,
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

  const industries = [
    {
      icon: Scissors,
      title: "Hair Salons & Barbers",
      description:
        "Perfect for hairstylists, barbershops, and grooming studios.",
      features: [
        "Service-specific booking",
        "Stylist selection",
        "Color or style consultation scheduling",
      ],
      color: "from-brand-pink to-brand-pink",
      bgGradient: "from-pink-50 to-rose-50",
    },
    {
      icon: Sparkles,
      title: " Nail Technicians & Spas",
      description:
        "Ideal for nail salons, beauty spas, and massage therapy centers.",
      features: [
        "Treatment and design booking",
        "Package deals",
        "Session duration tracking",
      ],
      color: "from-brand-pink to-brand-pink",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: PawPrint,
      title: "Pet Groomers & Dog Walkers",
      description:
        "Tailored for pet grooming services, walkers, and veterinary clinics.",
      features: [
        "Pet-specific notes",
        "Grooming or walking packages",
        "Health and care reminders",
      ],
      color: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: Stethoscope,
      title: "Dental & Healthcare Clinics",
      description:
        "Great for dentists, chiropractors, physiotherapists, and healthcare practices.",
      features: [
        "Appointment reminders to reduce no-shows",
        "Easy rescheduling and cancellations",
        "Post-visit follow-up requests",
      ],
      color: "from-brand-cyan to-brand-cyan",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Heart,
      title: "Estheticians, Coaches, and Therapists",
      description:
        "Flexible for wellness, education, and professional service providers.",
      features: [
        "Custom service types",
        "Flexible scheduling",
        "Client follow-up requests",
      ],
      color: "from-brand-cyan to-brand-cyan",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      icon: Smile,
      title: "Other Services",
      description: "Flexible for any appointment-based service business",
      features: [
        "Custom service types",
        "Flexible scheduling",
        "Business-specific workflows",
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ];

  return (
    <section
      id="for-your-business"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Tailored for <span className="gradient-brand-text">You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Text Hey adapts to your unique workflow and drives
            results in your specific field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-card group relative bg-gradient-to-br ${industry.bgGradient} rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full`}
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {industry.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <industry.icon className="w-full h-full text-gray-400" />
              </div>

              {/* Hover Effect Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="font-semibold text-slate-900">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-600">
                  Owner, Luxe Hair Studio
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                &quot;Text Hey transformed our booking process completely. Our
                no-show rate dropped by 35% and we&apos;re seeing 40% more
                repeat customers. The best part? Our clients love how easy it
                is.&quot;
              </blockquote>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-cyan">35%</div>
                  <div className="text-sm text-gray-600">Fewer no-shows</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-cyan">40%</div>
                  <div className="text-sm text-gray-600">
                    More repeat customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-cyan">50%</div>
                  <div className="text-sm text-gray-600">Time saved daily</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-slate-900">
                    Monthly Results
                  </div>
                  <div className="text-sm text-gray-600">Luxe Hair Studio</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bookings via Text</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold">4.9★</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Revenue Growth</span>
                    <span className="font-semibold text-green-600">+28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time Saved</span>
                    <span className="font-semibold text-brand-cyan">
                      15 hrs/week
                    </span>
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

export default Industries;
