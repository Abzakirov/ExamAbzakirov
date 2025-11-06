"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "antd";
import { ProductInfoType } from "@/@types";
import Rates from "@/generics/rate/Rate";
import { showSuccessToast } from "@/generics/toast/Toast";

const ProductInfoComponent = ({ product }: { product: ProductInfoType }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.size[2] || product.size[0]
  );
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const addToCart = () => {
    localStorage.setItem("cart", JSON.stringify(product));
    showSuccessToast("Mahsulot savatchaga qo'shildi!");
  };

  return (
    <>
      <div className="hidden md:block container w-[90%] mx-auto py-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <button className="hover:text-gray-700">Home</button>
          <span className="mx-1">›</span>
          <button className="hover:text-gray-700">Shop</button>
          <span className="mx-1">›</span>
          <button className="hover:text-gray-700">Men</button>
          <span className="mx-1">›</span>
          <button className="hover:text-gray-700">T-shirts</button>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`relative w-20 h-20 border rounded cursor-pointer ${
                    selectedThumbnail === i ? "border-black" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedThumbnail(i)}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>

            <div className="relative w-full h-[400px] rounded ">
              <img
                src={product.img}
                alt={product.name}
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="text-yellow-500 mt-2 flex items-center">
              <span className="text-gray-500 ml-2">
                <Rates />
              </span>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold">
                ${product.currentPrice}
              </span>
              <span className="ml-3 text-xl text-gray-400 line-through">
                ${product.price}
              </span>
              <span className="ml-3 text-red-500">-{product.discount}%</span>
            </div>

            <p className="mt-4 text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Select Colors</h4>
              <div className="flex gap-3">
                {product.color.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center
               ${
                 selectedColor === color
                   ? "ring-2 ring-offset-2 ring-black"
                   : ""
               }
             `}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <div className="text-white font-bold text-lg">✓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Choose Size</h4>
              <div className="flex gap-3">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border rounded">
                <button className="px-3 py-2" onClick={decreaseQuantity}>
                  <Minus size={16} />
                </button>
                <span className="px-4">{quantity}</span>
                <button className="px-3 py-2" onClick={increaseQuantity}>
                  <Plus size={16} />
                </button>
              </div>

              <Button
                onClick={addToCart}
                className="flex-1 !bg-black !hover:bg-gray-800 !text-white rounded"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-4 py-2 text-xs text-gray-500">
          <div className="flex items-center">
            <button className="hover:text-gray-700">Home</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">Shop</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">Men</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">T-shirts</button>
          </div>
        </div>

        <div className="relative w-full h-72 ">
          <img
            src={product.img}
            alt={product.name}
            className="object-contain"
          />
        </div>

        <div className="flex justify-center gap-2 mt-2 px-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`relative w-16 h-16 border rounded cursor-pointer ${
                selectedThumbnail === i ? "border-black" : "border-gray-200"
              }`}
              onClick={() => setSelectedThumbnail(i)}
            >
              <img
                src={product.img}
                alt={product.name}
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>

        <div className="px-4 py-4">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-yellow-500 mt-1 flex items-center text-sm">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(product.rate)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
            <span className="text-gray-500 ml-1 text-xs">
              {product.rate.toFixed(1)}/5
            </span>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-xl font-bold">${product.currentPrice}</span>
            <span className="ml-2 text-gray-400 line-through">
              ${product.price}
            </span>
            <span className="ml-2 text-red-500 text-sm">
              -{product.discount}%
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Select Colors</h4>
            <div className="flex gap-2">
              {product.color.map((color) => (
                <div
                  key={color}
                  className={`w-7 h-7 rounded-full cursor-pointer flex items-center justify-center ${
                    selectedColor === color
                      ? "ring-1 ring-offset-1 ring-black"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <div className="text-white text-xs">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Choose Size</h4>
            <div className="flex gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 text-sm rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button className="px-2 py-1" onClick={decreaseQuantity}>
                <Minus size={14} />
              </button>
              <span className="px-3 text-sm">{quantity}</span>
              <button className="px-2 py-1" onClick={increaseQuantity}>
                <Plus size={14} />
              </button>
            </div>

            <Button className="flex-1 bg-black hover:bg-gray-800 text-white rounded py-1 h-8">
              Add to Cart
            </Button>
          </div>

          <div className="mt-6 pt-3 border-t flex justify-between text-xs">
            <button className="text-gray-600 font-medium">
              Product Details
            </button>
            <button className="text-gray-600 font-medium">
              Rating & Reviews
            </button>
            <button className="text-gray-600 font-medium">FAQs</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfoComponent;
