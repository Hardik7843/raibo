"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { aboutTabs } from "@/config/aboutConfig";

// import aboutUsImg from "@../../../public/aboutus.webp";

import Tab from "./AboutUsTabs/Tab";
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
  const current = aboutTabs.find((tab) => tab.id === activeTab);

  return (
    <section className=" text-white h-fit px-12" id="about">
      <SectionHead>About Us</SectionHead>
      <div className="w-full grid grid-cols-3 mb-16 ">
        {aboutTabs.map((tab) => (
          <div key={tab.id} className="w-full">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`  w-full py-2 px-4 text-lg font-semibold ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-50 hover:text-blue-500 "
              }`}
            >
              <p>{tab.title}</p>
            </button>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      {current && <Tab tabItem={current}></Tab>}
    </section>
  );
};

export default AboutSection;
