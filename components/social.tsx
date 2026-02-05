"use client";

import { Instagram, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "NYAAKU Studios",
    handle: "@nyaakustudio",
    url: "https://www.instagram.com/nyaakustudio",
    description: "Official studio page - See our latest work",
    gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
  },
  {
    name: "Piyush Das",
    handle: "@irealpiyush",
    url: "https://www.instagram.com/irealpiyush",
    description: "Founder's personal page - Behind the scenes",
    gradient: "from-[#405de6] via-[#c13584] to-[#fd1d1d]",
  },
];

export function Social() {
  return (
    <section id="social" className="relative py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c13584]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#c13584] tracking-wider uppercase mb-4">
            Follow Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Connect on{" "}
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Stay updated with our latest projects, behind-the-scenes content,
            and creative inspiration.
          </p>
        </div>

        {/* Social cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.handle}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="relative p-6 rounded-2xl glass-strong transition-all duration-300 hover:scale-[1.02]">
                {/* Instagram gradient border on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                />

                <div className="flex items-start gap-4">
                  {/* Instagram icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Instagram className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground truncate">
                        {link.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[#c13584] font-medium text-sm mb-2">
                      {link.handle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
