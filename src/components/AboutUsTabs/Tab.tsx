/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { AboutTabItem } from "@/config/aboutConfig";
import Image from "next/image";
import aboutUsImg from "@../../../public/aboutus.webp";

const Tab = (props: AboutTabItem) => {
  return (
    <div className="w-full h-full flex items-center">
      <div>
        <Image alt="aboutImg" src={aboutUsImg}></Image>
      </div>
      <div>
        <p className="text-2xl font-bold font-sans">Strong Text</p>

        <p className="text-md font-sans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          cupiditate tenetur facere id soluta reiciendis in ipsum, aspernatur
          praesentium placeat?
        </p>
      </div>
    </div>
  );
};

export default Tab;
