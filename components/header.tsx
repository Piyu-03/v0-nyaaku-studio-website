"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Founder", href: "/founder" },
  { label: "Social", href: "/social" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-premium py-2 shadow-2xl shadow-primary/5" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight group"
          >
            <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent group-hover:text-glow-purple transition-all duration-300">
              NYAAKU
            </span>
            <span className="text-foreground group-hover:text-primary transition-colors duration-300"> STUDIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group py-2 ${isActive ? "text-primary text-glow-purple" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] transition-all duration-300 rounded-full ${isActive ? "w-full shadow-[0_0_10px_#a855f7]" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <Button
            asChild
            className="hidden md:inline-flex bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white border-0"
          >
            <a
              href="https://wa.me/+918117079611"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors py-2 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                asChild
                className="mt-2 bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white border-0"
              >
                <a
                  href="https://wa.me/+918117079611"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

