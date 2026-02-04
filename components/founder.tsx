"use client";

import { Sparkles, Zap, Target } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-[#a855f7]/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#6366f1]/20 animate-pulse delay-300" />
              <div className="absolute inset-8 rounded-full border border-[#22d3ee]/20 animate-pulse delay-500" />

              {/* Main image container */}
              <div className="absolute inset-12 rounded-full glass-strong overflow-hidden neon-glow-purple">
                <div className="w-full h-full bg-gradient-to-br from-[#a855f7]/20 via-[#6366f1]/20 to-[#22d3ee]/20 flex items-center justify-center">
                  {/* Placeholder initials */}
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#a855f7] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
                    PD
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-0 glass px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-medium text-[#22d3ee] flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Creative Vision
                </span>
              </div>
              <div className="absolute bottom-16 left-0 glass px-4 py-2 rounded-full animate-float delay-500">
                <span className="text-sm font-medium text-[#a855f7] flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Digital Expert
                </span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#a855f7] tracking-wider uppercase mb-4">
              The Visionary
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
                PIYUSH DAS
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The creative force behind NYAAKU STUDIO. With a passion for
              pushing creative boundaries and a deep understanding of digital
              aesthetics, Piyush leads the studio in crafting visual experiences
              that captivate and inspire.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Combining technical expertise with artistic vision, he transforms
              ordinary content into extraordinary digital stories that resonate
              with the new generation of audiences.
            </p>

            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="glass rounded-xl px-6 py-4 text-center">
                <Target className="w-6 h-6 text-[#22d3ee] mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Detail-Oriented
                </p>
              </div>
              <div className="glass rounded-xl px-6 py-4 text-center">
                <Sparkles className="w-6 h-6 text-[#a855f7] mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Creative Thinker
                </p>
              </div>
              <div className="glass rounded-xl px-6 py-4 text-center">
                <Zap className="w-6 h-6 text-[#6366f1] mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Tech Savvy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
