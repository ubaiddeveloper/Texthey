'use client';

import { useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Zap, 
  Bell, 
  Globe, 
  Gift, 
  Calendar, 
  Users, 
  BarChart3 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      '.feature-card',
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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

  const features = [
    {
      icon: MessageSquare,
      title: 'Book by Text',
      description: 'Clients text a keyword to instantly start the booking process',
      benefits: ['No app downloads required', 'Works on any phone', 'Natural conversation flow']
    },
    {
      icon: Zap,
      title: 'Smart Workflows',
      description: 'Automate confirmations, payments, and staff notifications',
      benefits: ['Auto-confirmations', 'Payment processing', 'Staff alerts']
    },
    {
      icon: Bell,
      title: 'Reminders & Follow-ups',
      description: 'Smart reminders reduce no-shows and increase repeat bookings',
      benefits: ['Customizable timing', 'Automated sequences', 'Rebook suggestions']
    },
    {
      icon: Gift,
      title: 'Campaigns',
      description: 'Send targeted promotions and offers to your customer base',
      benefits: ['Personalized offers', 'Seasonal campaigns', 'Birthday specials']
    },
    {
      icon: Globe,
      title: 'Web Booking',
      description: 'Offer both SMS and web booking options for maximum convenience',
      benefits: ['Mobile-optimized', 'Embedded widgets', 'Real-time availability']
    },
    {
      icon: Calendar,
      title: 'Special Occasions',
      description: 'Automatic birthday and holiday greetings with booking incentives',
      benefits: ['Personal touch', 'Automated scheduling', 'Custom messages']
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Manage multiple team members with individual schedules and services',
      benefits: ['Individual calendars', 'Service assignments', 'Availability control']
    },
    {
      icon: BarChart3,
      title: 'Reports & Insights',
      description: 'Track bookings, revenue, and campaign performance in real-time',
      benefits: ['Revenue tracking', 'Booking analytics', 'Campaign metrics']
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple text bookings to advanced automation, Text Hey provides all the tools 
            to streamline your business and delight your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-1">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-xs text-gray-500">
                    <div className="w-1 h-1 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Built for Global Businesses
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're a solo practitioner or managing multiple locations, 
                Text Hey scales with your business. Support for multiple languages, 
                currencies, and time zones means you can serve customers worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multi-language support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Multiple currency options</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Time zone detection</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Local phone number support</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900">Global Dashboard</h4>
                  <div className="text-sm text-teal-600 font-medium">Live</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇺🇸</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">New York Salon</div>
                        <div className="text-xs text-gray-500">12 bookings today</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">$1,240</div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇬🇧</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">London Spa</div>
                        <div className="text-xs text-gray-500">8 bookings today</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">£890</div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">🇦🇺</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Sydney Mobile</div>
                        <div className="text-xs text-gray-500">15 bookings today</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-green-600">A$1,680</div>
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