"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isExternal: false },
    { href: "#features", label: "Features", isExternal: true },
    { href: "#for-your-business", label: "Industries", isExternal: true },
    { href: "/pricing", label: "Pricing", isExternal: false },
  ];

  const handleNavigation = (href: string, isExternal: boolean) => {
    if (isExternal && pathname === "/") {
      // Scroll to section on homepage
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (isExternal && pathname !== "/") {
      // Navigate to homepage with hash
      window.location.href = `/${href}`;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo_with_text.png"
              alt="TextHey Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isExternal ? (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href, link.isExternal)}
                  className={`transition-colors duration-200 font-medium ${
                    pathname === "/"
                      ? "text-gray-600 hover:text-slate-900"
                      : "text-gray-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 font-medium ${
                    pathname === link.href
                      ? "text-brand-cyan"
                      : "text-gray-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-brand-cyan hover:bg-brand-cyan/90 text-white"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-slate-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
                link.isExternal ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href, link.isExternal)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-slate-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-slate-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="px-3 space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
