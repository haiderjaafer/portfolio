import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Foot";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#121212]">
       <Navbar />
    <div className="container mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <Contact/>
    </div>
    <Footer/>
  </main>

  );
}
