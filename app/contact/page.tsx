import type { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact Us | NYAAKU STUDIO",
    description:
        "Ready to transform your vision? Contact NYAAKU STUDIO today via WhatsApp for professional graphic design and video editing services.",
    keywords: [
        "Contact NYAAKU STUDIO",
        "WhatsApp Contact",
        "Hire Graphic Designer",
        "Video Editing Enquiry",
    ],
    openGraph: {
        title: "Contact Us | NYAAKU STUDIO",
        description: "Ready to transform your vision? Contact NYAAKU STUDIO today.",
        url: "/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <Contact />
        </main>
    );
}
