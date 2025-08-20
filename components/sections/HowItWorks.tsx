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
      color: "from-brand-cyan to-brand-cyan",
    },
    {
      icon: ArrowDown,
      title: "Choose & Confirm",
      description:
        "Pick your service, date, time, and staff in a few quick replies.",
      color: "from-brand-pink to-brand-pink",
    },
    {
      icon: CheckCircle,
      title: "Get Reminded",
      description:
        "Stay on track with instant confirmations and timely reminders.",
      color: "from-brand-cyan to-brand-cyan",
    },
    {
      icon: RotateCcw,
      title: "Share & Rebook",
      description:
        "Receive a follow-up to leave a review or book your next visit.",
      color: "from-brand-pink to-brand-pink",
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
            How It <span className="gradient-brand-text">Works</span>
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
            <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
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
                      <MessageCircle className="w-4 h-4 text-white" />
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
                <div className="p-4 space-y-3 bg-white min-h-[500px]">
                  <div className="message text-right">
                    <div className="inline-block bg-brand-cyan text-white px-3 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      BOOK
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-gray-100 text-gray-900 px-3 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      Hey! 👋 What service would you like to book? 1. Haircut
                      ($45) 2. Color ($85) 3. Massage ($60) Reply with a number!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
                  </div>

                  <div className="message text-right">
                    <div className="inline-block bg-brand-cyan text-white px-3 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      1
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-gray-100 text-gray-900 px-3 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      Perfect! Here are available times for a haircut: 📅
                      Tomorrow: • 10:00 AM - Sarah • 2:00 PM - Mike • 4:30 PM -
                      Sarah Pick one!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                  </div>

                  <div className="message text-right">
                    <div className="inline-block bg-brand-cyan text-white px-3 py-2 rounded-2xl rounded-tr-md max-w-xs text-sm">
                      2:00 PM - Mike
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:32 PM</div>
                  </div>

                  <div className="message text-left">
                    <div className="inline-block bg-brand-pink text-white px-3 py-2 rounded-2xl rounded-tl-md max-w-xs text-sm">
                      ✅ Booked! Haircut with Mike Tomorrow at 2:00 PM 💳 Pay
                      now: bit.ly/pay-th123 You&apos;ll get a reminder 2 hours
                      before!
                    </div>
                    <div className="text-xs text-gray-500 mt-1">2:32 PM</div>
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

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">
                30 sec
              </div>
              <div className="text-sm text-gray-600">Average booking time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-pink mb-2">98%</div>
              <div className="text-sm text-gray-600">Completion rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-cyan mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
