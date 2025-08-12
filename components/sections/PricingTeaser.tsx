'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PricingTeaser = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      '.pricing-card',
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with SMS bookings',
      features: [
        'Up to 50 bookings/month',
        'Basic SMS workflows',
        'Email support',
        'Simple scheduling'
      ],
      buttonText: 'Start Free',
      buttonStyle: 'outline',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Everything you need to grow your service business',
      features: [
        'Unlimited bookings',
        'Advanced automation',
        'Payment processing',
        'Custom branding',
        'Analytics dashboard',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For larger businesses with specific needs',
      features: [
        'Everything in Professional',
        'Multi-location support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting',
        'White-label option'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'outline',
      popular: false
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your business. Start free, upgrade when you're ready. 
            All plans include our core SMS booking features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-teal-300 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-teal-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 font-semibold transition-all duration-200 hover:scale-105 ${
                  plan.buttonStyle === 'primary'
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All plans include our 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-teal-600 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-teal-600 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-teal-600 mr-2" />
              30-day money back guarantee
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-teal-600 mr-2" />
              Migration assistance included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;