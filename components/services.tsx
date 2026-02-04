"use client";

import { Palette, Film, Smartphone, Wand2 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Designing",
    description:
      "Bold, eye-catching designs that capture attention. From brand identities to social media graphics, we craft visuals that make your brand unforgettable.",
    gradient: "from-[#a855f7] to-[#ec4899]",
    glowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Professional video editing that tells your story. Cinematic cuts, color grading, and seamless transitions that keep audiences engaged.",
    gradient: "from-[#6366f1] to-[#a855f7]",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    icon: Smartphone,
    title: "Reel Editing",
    description:
      "Viral-worthy reels for Instagram and YouTube Shorts. Fast-paced, trendy edits optimized for maximum engagement and reach.",
    gradient: "from-[#22d3ee] to-[#6366f1]",
    glowColor: "rgba(34, 211, 238, 0.3)",
  },
  {
    icon: Wand2,
    title: "Post Production",
    description:
      "Complete post-production services including VFX, motion graphics, audio mixing, and final polish to bring your vision to life.",
    gradient: "from-[#10b981] to-[#22d3ee]",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#a855f7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#22d3ee]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#22d3ee] tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From concept to creation, we deliver premium digital content that
            resonates with modern audiences.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div
                className="relative h-full p-8 rounded-2xl glass-strong transition-all duration-500 hover:scale-[1.02]"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0), 0 0 40px ${service.glowColor}`,
                }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
