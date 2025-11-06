"use client";
import { integralCF } from "@/font/Font";
import React from "react";

const Shops = () => {
  const data = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(data);
  return (
    <div>
      <div>
        <h1
          className={` ${integralCF.className} text-[40px] font-black max-[500px]:text-[23px]`}
        >
          Your cart
        </h1>
      </div>
    </div>
  );
};

export default Shops;
