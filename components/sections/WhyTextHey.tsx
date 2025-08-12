'use client';

import { useEffect, useRef } from 'react';
import { MessageSquare, Zap, Bell } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const WhyTextHey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      '.benefit-card',
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const benefits = [
    {
      icon: MessageSquare,
      title: 'Book by Text',
      description: 'Clients simply text a keyword to start booking. No downloads, no apps, no complicated processes.',
      features: ['Instant booking flow', 'Natural conversation', 'Works on any phone']
    },
    {
      icon: Zap,
      title: 'Smart Workflows',
      description: 'Automate confirmations, reminders, and follow-ups. Set it once and let it run your business.',
      features: ['Auto confirmations', 'Payment processing', 'Staff notifications']
    },
    {
      icon: Bell,
      title: 'Reduce No-Shows',
      description: 'Smart reminders and easy rescheduling keep your calendar full and your revenue flowing.',
      features: ['Automated reminders', 'Easy rescheduling', 'Cancellation handling']
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Text Hey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your booking process with the simplicity of text messaging. 
            Your clients already know how to text — now they can book appointments the same way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-teal-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-100/0 group-hover:from-teal-50/50 group-hover:to-teal-100/30 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see it in action? 
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyTextHey;