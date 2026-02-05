import type { Metadata } from "next";
import { Founder } from "@/components/founder";

export const metadata: Metadata = {
    title: "Piyush Das - Founder | NYAAKU STUDIO",
    description:
        "Meet Piyush Das, the visionary founder of NYAAKU STUDIO. A creative force combining technical expertise with artistic vision in graphic design and post-production.",
    keywords: [
        "Piyush Das",
        "Founder NYAAKU STUDIO",
        "Creative Director",
        "Graphic Designer",
        "Video Editor",
    ],
    openGraph: {
        title: "Piyush Das - Founder | NYAAKU STUDIO",
        description:
            "Meet Piyush Das, the visionary founder of NYAAKU STUDIO.",
        url: "/founder",
    },
};

export default function FounderPage() {
    return (
        <main className="min-h-screen pt-20">
            <Founder />
        </main>
    );
}
