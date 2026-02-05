import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs - Premium Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#a855f7]/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#22d3ee]/10 rounded-full blur-[120px] animate-glow-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366f1]/5 rounded-full blur-[100px]" />
      </div>

      {/* Futuristic Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Studio badge - Stagger 1 */}
        <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="text-sm font-medium text-[#22d3ee] tracking-[0.2em] uppercase">
            Creative Post-Production Studio
          </span>
        </div>

        {/* Main headline - Stagger 2 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 text-balance animate-slide-up delay-100">
          <span className="block text-foreground drop-shadow-lg">Crafting</span>
          <span className="block text-gradient-neon animate-shimmer drop-shadow-2xl">
            Visual Stories
          </span>
          <span className="block text-foreground drop-shadow-lg">
            for the Digital Generation
          </span>
        </h1>

        {/* Subtext - Stagger 3 */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 text-pretty leading-relaxed animate-slide-up delay-200">
          NYAAKU STUDIO transforms ideas into captivating digital experiences.
          We specialize in graphic design, video editing, and reel creation that speakers to the next generation.
        </p>

        {/* CTA Buttons - Stagger 4 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up delay-300">
          <Button
            size="lg"
            asChild
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white border-0 px-10 py-7 text-lg font-semibold neon-glow-purple transition-all duration-300 hover:scale-105"
          >
            <Link href="/services">
              View Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="group glass-premium border-primary/20 hover:border-primary/50 hover:bg-primary/10 px-10 py-7 text-lg font-semibold transition-all duration-300 text-foreground"
          >
            <a
              href="https://wa.me/+918117079611"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5 text-[#22d3ee] group-hover:scale-110 transition-transform" />
              Contact on WhatsApp
            </a>
          </Button>
        </div>

        {/* Scroll indicator - Fade in last */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-slide-up delay-500 opacity-0">
          <div className="animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 backdrop-blur-sm">
              <div className="w-1 h-2 rounded-full bg-[#a855f7] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
