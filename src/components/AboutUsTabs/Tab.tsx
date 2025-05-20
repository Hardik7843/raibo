import React from "react";
import { AboutTabItem } from "@/config/aboutConfig";
import Image from "next/image";
import aboutUsImg from "../../../public/aboutus.webp";

type TabProps = {
  tabItem: AboutTabItem;
};

const Tab: React.FC<TabProps> = ({ tabItem }) => {
  return (
    <div>
      {/* Mobile View */}
      <div className="flex flex-col items-center gap-6 lg:hidden">
        <div className=" flex flex-col justify-start w-full">
          <Image
            src={aboutUsImg || tabItem.image}
            alt={tabItem.title}
            className=" shadow-md object-cover"
          />
        </div>
        <div className="w-full  justify-start">
          <div className="w-10/12 h-fit">
            <h2 className="text-4xl font-bold mb-6">{tabItem.title}</h2>
            {/* TODO: Provide Standard color for this */}
            {/* TODO: Make map for multiple paragraph in description */}
            <p className="text-lg text-gray-700">{tabItem.description}</p>
          </div>
        </div>
      </div>

      {/* Desktop view: shown from lg and up */}
      <div className="hidden lg:flex lg:flex-row items-start gap-x-7">
        <div className="w-fit">
          <Image
            src={aboutUsImg || tabItem.image}
            alt={tabItem.title}
            className="max-h-[70vh] object-contain"
          />
        </div>
        <div className="w-full  h-fit  pt-5">
          <div className="w-fit">
            <h2 className="text-4xl font-bold mb-2">{tabItem.title}</h2>
            {/* TODO: Provide Standard color for this */}
            {/* TODO: Make map for multiple paragraph in description */}
            <p className="text-md text-gray-700">{tabItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
