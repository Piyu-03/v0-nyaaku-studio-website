import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Founder } from "@/components/founder";
import { Social } from "@/components/social";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Founder />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
