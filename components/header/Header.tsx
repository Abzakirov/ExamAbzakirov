"use client";

import { HeaderMenuType } from "@/@types";
import { integralCF } from "@/font/Font";
import Buttons from "@/generics/buttons/Button";
import DropDowns from "@/generics/DropDown/DropDown";
import { HeaderMenu } from "@/utils";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="container2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px] max-[850px]:gap-[20px]">
          <div className="flex items-center gap-3">
          <Buttons />
          <button  onClick={() => router.push("/")} className={`${integralCF.className}  text-[30px] font-bold max-[850px]:text-[22px] max-[744px]:text-[18px]`}>
            SHOP.CO
          </button>
          </div>
          <div className="flex items-center gap-3">
            <DropDowns />
            <div className="flex items-center gap-6 max-[850px]:gap-3 max-[744px]:hidden">
              {HeaderMenu.map((item: HeaderMenuType) => (
                <button key={item.id} className="text-[16px] font-medium">
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-[580px] max-[1300px]:!w-[30%] max-[744px]:!w-[60%] max-[690px]:max-w-[40%] max-[536px]:hidden">
          <Input
            placeholder="Search for products..."
            className="!rounded-full h-[40px] px-4 border border-gray-200 bg-gray-50 "
            style={{ paddingLeft: "45px" }}
          />
          <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCartOutlined className="!text-[24px]" />
          <UserCircle size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
