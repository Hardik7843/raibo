/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="border border-white px-6 scroll-mt-[65px] min-h-[60vh] mb-16"
    >
      <SectionHead>Our Pricing</SectionHead>

      <div className="border border-white ">
        {/* <div>
          <Image src={""} alt="This is image" />
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
