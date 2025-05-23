/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import NavBar from "@/components/NavBar";
import PricingSection from "@/components/PricingSection";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";
// import { PrimeReactProvider } from 'primereact/api';

export default function Home() {
  return (
    <div>
      {/* <PrimeReactProvider></PrimeReactProvider> */}
      <NavBar />
      <AboutSection />
      {/* <PricingSection /> */}
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
