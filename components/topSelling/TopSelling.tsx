import { integralCF } from "@/font/Font";
import AllButton from "@/generics/allButton/AllButton";
import Cards from "@/generics/card/Cards";
import React from "react";

const TopSelling = () => {
  return (
    <div className="mt-4">
      <h1
        className={`${integralCF.className} text-center text-[48px] font-black max-[500px]:text-[23px]`}
      >
        Top selling
      </h1>
      <Cards />
      <AllButton />
    </div>
  );
};

export default TopSelling;
