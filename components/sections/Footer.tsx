'use client';

import { MessageSquare, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Integrations', href: '#' },
        { name: 'API', href: '#' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Salons & Barbers', href: '#for-your-business' },
        { name: 'Spas & Wellness', href: '#for-your-business' },
        { name: 'Nail Technicians', href: '#for-your-business' },
        { name: 'Pet Grooming', href: '#for-your-business' },
        { name: 'Mobile Services', href: '#for-your-business' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#contact' },
        { name: 'Press', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Getting Started', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ]
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest tips, features, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 flex-grow"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-teal-400 mr-2" />
              <div className="text-2xl font-bold">
                Text<span className="text-teal-400">Hey</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your appointment booking process with the simplicity of text messaging. 
              Trusted by businesses worldwide to reduce no-shows and boost bookings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:go@texthey.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Text Hey. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="text-gray-400 text-sm">
                Questions? Email{' '}
                <a href="mailto:go@texthey.com" className="text-teal-400 hover:text-teal-300 underline">
                  go@texthey.com
                </a>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                  Book a Demo
                </Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;