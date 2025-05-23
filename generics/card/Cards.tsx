"use client";

import { axiosInstance } from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";
import { showErrorToast, showSuccessToast } from "../toast/Toast";
import Rates from "../rate/Rate";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductType } from "@/@types";
import ImageTitleSkeleton from "../sceletton/Sceletton";
import SkeletonCard from "../sceletton/Sceletton";

const Cards = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/Zustand");
        setProducts(response.data || []);
        setLoading(false);
      } catch (error: Error | any) {
        showErrorToast(error?.message || "Malumotlar yuklanishda xatolik");
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <>
        <SkeletonCard />
      </>
    );
  return (
    <div className="container2 mx-auto px-4 mt-7">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {products.slice(0, 12).map((product: ProductType) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`/${product.id}`}
                className="block border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full object-cover !h-[250px] object-center rounded-md"
                />
                <h2 className="font-medium text-lg mt-2 truncate">
                  {product.name}
                </h2>
                <Rates />
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-black mt-1">
                    ${product.price}
                  </p>
                  <p className="text-lg font-semibold text-gray-300 mt-1">
                    ${product.currentPrice}
                  </p>

                  <p
                    style={{ backgroundColor: "rgba(255, 51, 51, 0.10)" }}
                    className="text-[#F33] text-sm font-semibold px-2 py-1 rounded-md mt-1"
                  >
                    {product.discount}%
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
