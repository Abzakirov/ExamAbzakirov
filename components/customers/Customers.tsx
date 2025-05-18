"use client";

import { integralCF } from "@/font/Font";
import Rates from "@/generics/rate/Rate";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type UserType = {
  id: string;
  name: string;
  decr: string;
};

const Customers = () => {
  const [customers, setCustomers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "https://67b59ca407ba6e59083da387.mockapi.io/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch {
        setError("Failed to load customer data");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-sm min-[250px]:text-base">
        Loading customers...
      </div>
    );
  if (error)
    return (
      <div className="text-center py-10 text-red-500 text-sm min-[250px]:text-base">
        {error}
      </div>
    );

  return (
    <div className="container mx-auto px-2 min-[250px]:px-4 mt-7">
      <div className="flex justify-between items-center mb-4 min-[250px]:mb-6 max-[800px]:flex-wrap max-[800px]:justify-center gap-5">
        <div>
          <h1
            className={`${integralCF.className} text-start text-[23px] min-[375px]:text-[32px] min-[500px]:text-[48px] font-black`}
          >
            OUR HAPPY CUSTOMERS
          </h1>
        </div>
        <div className="flex gap-2 min-[250px]:gap-4">
          <button ref={prevRef} aria-label="Previous slide">
            <ArrowLeft className="text-black cursor-pointer w-5 h-5 min-[250px]:w-6 min-[250px]:h-6" />
          </button>
          <button ref={nextRef} aria-label="Next slide">
            <ArrowRight className="text-black cursor-pointer w-5 h-5 min-[250px]:w-6 min-[250px]:h-6" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          250: {
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <div className="py-4 px-4 min-[250px]:py-5 min-[250px]:px-5 sm:py-7 sm:px-8 bg-white rounded-lg shadow-md h-auto min-[250px]:h-60">
              <Rates />
              <div className="mt-2 min-[250px]:mt-3 flex items-center gap-2">
                <h2 className="text-base min-[250px]:text-lg sm:text-xl font-bold">
                  {customer.name}
                </h2>
                <Image
                  src="/check.svg"
                  alt="Verified"
                  width={20}
                  height={20}
                  className="min-[250px]:h-5 min-[250px]:w-5"
                />
              </div>
              <p className="mt-1 min-[250px]:mt-2 text-gray-700 text-sm min-[250px]:text-base line-clamp-3">
                {customer.decr}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
