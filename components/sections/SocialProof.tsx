'use client';

import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !logoCarouselRef.current) return;

    // Animate testimonials
    gsap.fromTo(
      '.testimonial-card',
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

    // Logo carousel animation
    const logos = logoCarouselRef.current.children;
    gsap.set(logos, { opacity: 0.3 });
    
    gsap.to(logos, {
      opacity: 1,
      duration: 0.5,
      stagger: {
        repeat: -1,
        yoyo: true,
        each: 0.3,
      },
      ease: 'power2.inOut',
    });
  }, []);

  const testimonials = [
    {
      name: 'Emily Chen',
      role: 'Owner, Serenity Spa',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'Text Hey changed the way we run our spa. Bookings are up 45% and our clients love the convenience. It\'s absolutely seamless!',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Barber, Urban Cuts',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'My no-shows dropped to almost zero. Clients text to book, get reminders, and can easily reschedule. Game changer for my business.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Mobile Massage Therapist',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      quote: 'Being mobile means I need simple booking. Text Hey handles everything automatically while I focus on my clients. Perfect solution!',
      rating: 5
    }
  ];

  const partners = [
    'TechCorp', 'InnovateHub', 'GlobalSoft', 'NextGen', 'StreamLine', 'ProServe'
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of service businesses that have transformed their booking process 
            and grown their revenue with Text Hey.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by leading service businesses
          </p>
          <div ref={logoCarouselRef} className="flex items-center justify-center space-x-12 grayscale opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-teal-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">10K+</div>
              <div className="text-gray-600">Businesses using Text Hey</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">2M+</div>
              <div className="text-gray-600">Appointments booked</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average rating</div>
            </div>
          </div>
        </div>

        {/* Additional testimonial highlight */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-slate-900 mb-6 leading-relaxed">
            "Since switching to Text Hey, our booking process is completely automated. 
            We've saved 20 hours per week and increased our revenue by 35%."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face"
              alt="Alex Morgan"
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Alex Morgan</div>
              <div className="text-sm text-gray-600">CEO, Wellness Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;