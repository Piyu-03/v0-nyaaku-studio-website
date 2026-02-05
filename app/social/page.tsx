import type { Metadata } from "next";
import { Social } from "@/components/social";

export const metadata: Metadata = {
    title: "Social Media | NYAAKU STUDIO",
    description:
        "Connect with NYAAKU STUDIO and Piyush Das on Instagram. Stay updated with our latest projects, behind-the-scenes content, and creative inspiration.",
    keywords: [
        "NYAAKU STUDIO Instagram",
        "Piyush Das Instagram",
        "Social Media",
        "Connect",
        "Follow Us",
    ],
    openGraph: {
        title: "Social Media | NYAAKU STUDIO",
        description: "Connect with NYAAKU STUDIO and Piyush Das on Instagram.",
        url: "/social",
    },
};

export default function SocialPage() {
    return (
        <main className="min-h-screen pt-20">
            <Social />
        </main>
    );
}
