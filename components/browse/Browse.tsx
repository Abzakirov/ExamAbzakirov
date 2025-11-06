import { integralCF } from "@/font/Font";
import React from "react";

const categories = [{ image: "/casual.png" }, { image: "/formal.jpg" }];
const cats = [{ image: "/party.jpg" }, { image: "/gym.jpg" }];

const DressStyleGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#F0F0F0]">
      <h1 className={` ${integralCF.className} !text-[48px] font-bold !mb-6 max-[750px]:!text-[23px]`}>
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-5 max-[500px]:flex-col">
          {categories.map((category) => (
            <div
              key={category.image}
              className="relative group cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                className="rounded-lg w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-5 max-[500px]:flex-col">
          {cats.map((category) => (
            <div
              key={category.image}
              className="relative group cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                className="rounded-lg w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DressStyleGrid;
