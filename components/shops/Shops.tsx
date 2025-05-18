"use client";
import { ProductInfoType } from "@/@types";
import { integralCF } from "@/font/Font";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowRight, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Shops = () => {
  const [product, setProduct] = useState<ProductInfoType | null>(null);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem("cart") || "null");
    setProduct(storedProduct);
  }, []);

  if (!product) return <div className="container2 mt-4">Корзина пуста</div>;

  return (
    <div className="container2 mt-4">
      <div>
        <h1
          className={` ${integralCF.className} text-[40px] font-black max-[500px]:text-[23px]`}
        >
          Your cart
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-[735px] p-[20px] flex gap-4 bg-white rounded-lg shadow-md relative">
            <button className="absolute top-5 right-7">
              <Trash2 size={24} className="text-[red]" />
            </button>
            <div className="flex gap-4">
              <div>
                <img src={product.img} alt="" className="w-[200px] h-[200px]" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h2 className="text-[20px] font-bold">{product.name}</h2>
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px] font-medium text-[#000]">Size:</h2>
                  <p className="text-rgba(0, 0, 0, 0.60) text-[14px]">
                    {product.size}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px] font-medium text-[#000]">
                    Colors:
                  </h2>
                  <p className="text-rgba(0, 0, 0, 0.60) text-[14px]">
                    {product.color}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-rgba(0, 0, 0, 0.60) text-[20px] font-bold">
                    ${product.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center w-[130px] h-[44px] justify-center text-center gap-4 bg-[#F0F0F0] rounded-[62px] absolute bottom-5 right-7">
                <button>
                  <MinusOutlined size={24} className="!font-medium" />
                </button>
                <span className="!text-[16px] !font-medium">1</span>
                <button>
                  <PlusOutlined size={24} className="!font-bold" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[505px] p-[20px] flex flex-col gap-4 bg-white rounded-lg shadow-md relative">
            <h1 className="text-[24px] font-bold">Order Summary</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[20px]">
                  Subtotal:
                </h4>
                <h2 className="text-[#000] text-[20px] font-extrabold">$565</h2>
              </div>{" "}
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[20px]">
                  Discount (-20%):
                </h4>
                <h2 className="text-[red] text-[20px] font-extrabold">-$113</h2>
              </div>{" "}
              <div className="flex items-center justify-between">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[20px]">
                  Delivery Fee:
                </h4>
                <h2 className="text-[#000] text-[20px] font-extrabold">$15</h2>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h4 className="text-rgba(0, 0, 0, 0.60) text-[20px]">Total</h4>
                <h2 className="text-[#000] text-[20px] font-extrabold">$467</h2>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <form className="flex items-center gap-4 h-[48px] rounded-[62px] w-[330px] bg-[#F0F0F0] p-2">
                  <img src="/del.svg" alt="w" />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className=" w-full h-full outline-none  font-medium"
                  />
                </form>
                <Button className="!text-[#fff] !rounded-full !bg-[#000] !p-[16px] !w-[119px] !h-[48px]">
                  Apply
                </Button>
              </div>
              <Button
                type="text"
                className="!w-[457px] !h-[60px] !bg-[#000] !text-white flex items-center gap-2 mt-4 !rounded-full"
              >
                Go to Checkout <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
