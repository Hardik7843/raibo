"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { aboutTabs } from "@/config/aboutConfig";
import Image from "next/image";
// import aboutUsImg from "@../../../public/aboutus.webp";
import aboutUsImg from "../../public/aboutus.webp";
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
  const current = aboutTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="border border-white text-white h-fit px-12" id="about">
      <SectionHead>About Us</SectionHead>
      <div className="w-full grid grid-cols-3 border-b mb-4 ">
        {aboutTabs.map((tab) => (
          <div key={tab.id} className="w-full">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-2 px-4 text-lg font-semibold ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <p>{tab.title}</p>
            </button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      {current && (
        <div className="flex md:flex-row items-center gap-6">
          <Image
            src={aboutUsImg || current.image}
            alt={current.title}
            className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
          />
          <div>
            <h2 className="text-xl font-bold mb-2">{current.title}</h2>
            <p className="text-gray-700">{current.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
