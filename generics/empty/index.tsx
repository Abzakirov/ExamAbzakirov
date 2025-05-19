"use client";
import { integralCF } from "@/font/Font";
import { Button, Empty } from "antd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="container2 mt-8 px-2">
      <div className="w-full flex flex-col items-center">
        <h1
          className={`${integralCF.className} text-[40px] font-black max-[500px]:text-[23px] max-[300px]:text-[20px] text-center`}
        >
          Your cart
        </h1>

        <div className="w-full md:w-[600px] p-8 flex flex-col items-center gap-6 bg-white rounded-lg shadow-md mt-6">
          <div className="relative w-48 h-48 mb-4">
            <Empty />
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6 max-w-md">
              Looks like you haven't added any items to your cart yet. Explore
              our catalog to find products you'll love!
            </p>
          </div>

          <Link href="/" >
            <Button
              type="text"
              className="!w-[240px] !h-[50px] !bg-[#000] !text-white flex items-center justify-center gap-2 !rounded-full"
            >
              Start Shopping <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
