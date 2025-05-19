import { integralCF } from "@/font/Font";
import Image from "next/image";
import React from "react";

const DressStyleGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#F0F0F0]">
      <h1
        className={` ${integralCF.className} !text-[48px] font-bold !mb-6 max-[750px]:!text-[23px]`}
      >
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-5 max-[500px]:flex-col">
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/casual.png"
              alt=""
              className="rounded-lg object-cover"
              width={410}
              height={250}
            />
          </div>
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/formal.jpg"
              alt=""
              className="rounded-lg object-cover"
              width={600}
              height={300}
            />
          </div>
        </div>
        <div className="flex gap-5 max-[500px]:flex-col">
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/party.jpg"
              alt=""
              className="rounded-lg object-cover"
              width={600}
              height={240}
            />
          </div>
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <Image
              src="/gym.jpg"
              alt=""
              className="rounded-lg object-cover"
              width={350}
              height={240}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyleGrid;
