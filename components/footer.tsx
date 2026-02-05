import React from "react"
import Link from "next/link";
import { Instagram, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Founder",
    href: "/founder",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    label: "NYAAKU Studios",
    href: "https://www.instagram.com/nyaakustudio",
    icon: Instagram,
  },
  {
    label: "Piyush Das",
    href: "https://www.instagram.com/irealpiyush",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="relative py-12 md:py-16 border-t border-border/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
                NYAAKU
              </span>
              <span className="text-foreground"> STUDIO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Futuristic creative post-production studio crafting visual stories
              for the digital generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#a855f7] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#c13584] transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} NYAAKU STUDIO. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Founded with{" "}
              <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899]" /> by{" "}
              <span className="text-foreground font-medium">PIYUSH DAS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
