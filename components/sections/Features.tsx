"use client";

import { useEffect, useRef } from "react";
import {
  MessageSquare,
  Zap,
  Bell,
  Globe,
  Gift,
  Calendar,
  Users,
  BarChart3,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".feature-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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

  const features = [
    {
      icon: MessageSquare,
      title: "Book by Text",
      description:
        "Eliminate missed opportunities with instant, text-based bookings.",
      benefits: [
        "No app downloads or complicated setup",
        "Works on any mobile phone",
        "Quick keyword-triggered start",
      ],
    },
    {
      icon: Gift,
      title: "Promotional Campaigns",
      description:
        "Fill your calendar and boost sales with targeted SMS campaigns.",
      benefits: [
        "Send offers to past & potential clients",
        "Seasonal & special event promotions",
        "Measurable results through campaign tracking",
      ],
    },
    {
      icon: Zap,
      title: "1-Click Suggested Bookings",
      description:
        "Recover lost revenue and encourage repeat visits effortlessly.",
      benefits: [
        "Follow-up with pre-filled booking suggestions",
        'Simple "Yes" reply to confirm',
        "Works for both last-minute openings & recurring services",
      ],
    },
    {
      icon: Bell,
      title: "Revenue Recovery",
      description: "Turn cancellations into opportunities to rebook.",
      benefits: [
        "Auto rebooking prompts for canceled slots",
        "Targeted offers to win back customers",
        "Real-time availability",
      ],
    },
    {
      icon: Globe,
      title: "Web Booking",
      description:
        "Give clients more ways to book with seamless web integration.",
      benefits: [
        "Mobile-friendly online booking",
        "Embedded booking widgets for your site",
        "Live availability syncing",
      ],
    },
    {
      icon: Calendar,
      title: "Follow-up Reviews",
      description:
        "Build trust and attract more clients with post-service feedback requests.",
      benefits: [
        "Automated review prompts",
        "Customizable message templates",
        "Google review link integration",
      ],
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Streamline team scheduling and service delivery.",
      benefits: [
        "Individual calendars",
        "Service-specific assignments",
        "Automated shift reminders",
      ],
    },
    {
      icon: BarChart3,
      title: "Reports & Insights",
      description:
        "Make smarter business decisions with clear performance data.",
      benefits: [
        "Track revenue growth",
        "Measure campaign ROI",
        "Spot trends to improve retention",
      ],
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            <span className="gradient-brand-text">Everything You Need</span> to Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple text bookings to advanced automation, Text Hey provides
            all the tools to streamline your business and delight your
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-brand-cyan hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white border-2 border-brand-cyan rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-cyan transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-brand-cyan group-hover:text-white" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-1">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-center text-xs text-gray-500"
                  >
                    <div className="w-1 h-1 bg-brand-cyan rounded-full mr-2 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-brand-cyan/10 to-brand-pink/10 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Multiple Locations with Ease
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you run a nationwide franchise or operate multiple
                branches, Text Hey gives you the power to manage all locations
                from one central dashboard. Keep every site in sync while still
                tailoring bookings, promotions, and operations to each branch&apos;s
                unique needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Centralized dashboard for all locations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Branch-level booking and campaign controls
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Performance tracking per location
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Role-based access for managers and staff
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Consistent branding across every branch
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">
                    Global Dashboard
                  </h4>
                  <div className="text-sm text-brand-cyan font-medium">Live</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇺🇸</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          New York Salon
                        </div>
                        <div className="text-xs text-gray-500">
                          12 bookings today
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      $1,240
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇬🇧</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">London Spa</div>
                        <div className="text-xs text-gray-500">
                          8 bookings today
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      £890
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇦🇺</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Sydney Mobile</div>
                        <div className="text-xs text-gray-500">
                          15 bookings today
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      A$1,680
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

export default Features;
