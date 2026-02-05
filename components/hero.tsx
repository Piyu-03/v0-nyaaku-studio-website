import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#a855f7]/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#22d3ee]/20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Studio badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
          <span className="text-sm font-medium text-[#22d3ee] tracking-wider uppercase">
            Creative Post-Production Studio
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="block text-foreground">Crafting</span>
          <span className="block bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent animate-shimmer">
            Visual Stories
          </span>
          <span className="block text-foreground">
            for the Digital Generation
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
          NYAAKU STUDIO transforms ideas into captivating digital experiences.
          We specialize in graphic design, video editing, reel creation, and
          post-production that speaks to the next generation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white border-0 px-8 py-6 text-lg font-semibold neon-glow-purple transition-all duration-300"
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
            className="group glass border-[#22d3ee]/30 hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 px-8 py-6 text-lg font-semibold transition-all duration-300 text-foreground bg-transparent"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-[#a855f7] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
