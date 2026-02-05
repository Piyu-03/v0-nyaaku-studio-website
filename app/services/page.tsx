import type { Metadata } from "next";
import { Services } from "@/components/services";

export const metadata: Metadata = {
    title: "Services | NYAAKU STUDIO",
    description:
        "Explore our professional creative services: Graphic Designing, Video Editing, and Reel Editing. We make your brand unforgettable.",
    keywords: [
        "Graphic Designing",
        "Video Editing",
        "Reel Editing",
        "NYAAKU STUDIO Services",
        "Creative Studio Services",
    ],
    openGraph: {
        title: "Services | NYAAKU STUDIO",
        description:
            "Explore our professional creative services: Graphic Designing, Video Editing, and Reel Editing.",
        url: "/services",
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <Services />
        </main>
    );
}
