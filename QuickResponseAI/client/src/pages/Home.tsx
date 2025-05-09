import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/back-to-top";
import Chatbot from "@/components/ui/chatbot";

export default function Home() {
  useEffect(() => {
    document.title = "CGI Ad's Studio | Professional Advertising Work";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
}
