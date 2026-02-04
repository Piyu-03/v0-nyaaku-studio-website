"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Zap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22d3ee]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#a855f7]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Main CTA Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl glass-strong overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#22d3ee]" />

            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Zap className="w-4 h-4 text-[#22d3ee]" />
                <span className="text-sm font-medium text-[#22d3ee] tracking-wider uppercase">
                  {"Let's Work Together"}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Vision?
              </h2>

              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
                {"Have a project in mind? We're just a message away. Reach out on WhatsApp for a quick response and let's discuss how we can bring your creative ideas to life."}
              </p>

              {/* WhatsApp Button */}
              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 px-10 py-7 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
              >
                <a
                  href="https://wa.me/+918117079611"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Chat on WhatsApp
                  <Phone className="ml-3 w-5 h-5 opacity-70" />
                </a>
              </Button>

              {/* Additional info */}
              <p className="mt-6 text-sm text-muted-foreground">
                Quick response guaranteed • Available Mon-Sat
              </p>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#a855f7]/30 animate-pulse hidden md:block" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full border border-[#22d3ee]/30 animate-pulse hidden md:block" />
        </div>
      </div>
    </section>
  );
}
