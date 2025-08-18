"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, ArrowDown, CheckCircle, RotateCcw } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !phoneRef.current) return;

    // Animate steps
    gsap.fromTo(
      ".step-card",
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

    // Animate phone conversation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".message", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Text "Hey"',
      description:
        'Kickstart the booking instantly—just send "Hey" to a business number.',
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ArrowDown,
      title: "Choose & Confirm",
      description:
        "Pick your service, date, time, and staff in a few quick replies.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Get Reminded",
      description:
        "Stay on track with instant confirmations and timely reminders.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: RotateCcw,
      title: "Share & Rebook",
      description:
        "Receive a follow-up to leave a review or book your next visit.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your booking process. Your clients
            get convenience, you get more bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-card flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-gray-400 mr-3">
                      STEP {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Animation */}
          <div ref={phoneRef} className="relative">
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 text-center">
                  <div className="text-sm font-medium text-gray-600">
                    Messages
                  </div>
                </div>
                <div className="p-4 space-y-4 bg-white min-h-[500px]">
                  <div className="message text-right">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      BOOK
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      Hey! 👋 What service would you like to book? 1. Haircut
                      ($45) 2. Color ($85) 3. Massage ($60) Reply with a number!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
                  </div>

                  <div className="message text-right">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      1
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      Perfect! Here are available times for a haircut: 📅
                      Tomorrow: • 10:00 AM - Sarah • 2:00 PM - Mike • 4:30 PM -
                      Sarah Pick one!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                  </div>

                  <div className="message text-right">
                    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      2:00 PM - Mike
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:32 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      ✅ Booked! Haircut with Mike Tomorrow at 2:00 PM 💳 Pay
                      now: bit.ly/pay-th123 You'll get a reminder 2 hours
                      before!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:32 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                30 sec
              </div>
              <div className="text-sm text-gray-600">Average booking time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Completion rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
