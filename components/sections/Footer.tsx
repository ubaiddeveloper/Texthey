"use client";

import { MessageSquare, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Industries", href: "#for-your-business" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "Hair Salons & Barbers", href: "#for-your-business" },
        { name: "Nail Technicians & Spas", href: "#for-your-business" },
        { name: "Pet Groomers & Dog Walkers", href: "#for-your-business" },
        { name: "Dental & Healthcare Clinics", href: "#for-your-business" },
        {
          name: "Estheticians, Coaches, and Therapists",
          href: "#for-your-business",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Home", href: "#home" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "mailto:go@texthey.com" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    // Handle external page links
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }

    // Handle mailto links
    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }

    // Handle anchor links for sections
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white" style={{ backgroundColor: "#101443" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        {/* <div className="bg-slate-900 rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest tips, features, and industry insights delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 flex-grow"
              />
              <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="TextHey Logo"
                width={32}
                height={32}
                className="h-8 w-8 mr-3"
              />
              <div className="text-2xl font-bold">
                Text<span className="gradient-brand-text">Hey</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your appointment booking process with the simplicity of
              text messaging. Trusted by businesses worldwide to reduce no-shows
              and boost bookings.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-brand-cyan transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-brand-pink transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:go@texthey.com"
                className="text-gray-400 hover:text-brand-cyan transition-colors duration-200"
              >
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm text-left w-full"
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
        <div className="border-t border-slate-900 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Text Hey. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white transition-all duration-200"
                >
                  Book a Demo
                </Button>
                <Button
                  size="sm"
                  className="bg-brand-cyan hover:bg-brand-cyan/90 text-white"
                >
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
