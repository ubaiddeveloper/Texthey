'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CTABanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax effect for background
    gsap.to('.cta-bg', {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Animate content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from('.cta-content', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.cta-features li', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3')
    .from('.cta-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.2');
  }, []);

  const features = [
    'Free 14-day trial',
    'No credit card required',
    'Setup in under 10 minutes',
    'Cancel anytime'
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with Parallax */}
      <div className="cta-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-slate-900/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-slate-900/20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-content">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Text Your Way to 
            <span className="text-teal-400"> More Bookings?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their booking process. 
            Start your free trial today and see the difference in 24 hours.
          </p>

          <ul className="cta-features flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl border-0"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent"
            >
              Book a Demo
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Have questions? Email us at{' '}
            <a href="mailto:go@texthey.com" className="text-teal-400 hover:text-teal-300 underline">
              go@texthey.com
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CTABanner;