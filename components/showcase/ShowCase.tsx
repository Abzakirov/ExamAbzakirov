import { Star } from "lucide-react";
import React from "react";

const ShowCase = () => {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans">
      {/* Main banner section */}
      <section className="relative w-full bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 max-[350px]:text-[30px]">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-6 max-w-md">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
            
            {/* Stats */}
            <div className="flex flex-wrap mt-8 gap-6 md:gap-12">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold">200+</span>
                <span className="text-xs md:text-sm text-gray-600">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold">2,000+</span>
                <span className="text-xs md:text-sm text-gray-600">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold">30,000+</span>
                <span className="text-xs md:text-sm text-gray-600">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -right-4 z-20">
              <Star className="w-12 h-12 fill-black stroke-none" />
            </div>
            <div className="absolute bottom-1/4 -left-4 z-20">
              <Star className="w-12 h-12 fill-black stroke-none" />
            </div>
            
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <img
                src="https://i.postimg.cc/fbbZ4dSP/Rectangle-2.png"
                alt="Fashion models wearing stylish clothing"
                className="w-full h-full object-cover max-[350px]:hidden"
              />
              <img src="./Showcase.png" alt="showcase" className="hidden max-[350px]:block" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-6">
            {["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"].map(
              (brand, index) => (
                <div key={index} className="flex-grow text-center">
                  <span
                    className={`font-bold ${
                      brand === "Calvin Klein"
                        ? "text-sm sm:text-lg md:text-xl"
                        : "text-lg sm:text-xl md:text-2xl"
                    }`}
                  >
                    {brand}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowCase;