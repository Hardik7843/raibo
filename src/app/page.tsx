/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <PricingSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
