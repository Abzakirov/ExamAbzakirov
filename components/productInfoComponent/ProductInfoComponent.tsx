"use client";

import { useEffect, useState } from "react";
import { Minus, Plus, Heart } from "lucide-react";
import { Button } from "antd";
import { ProductInfoType, ProductType, UserType } from "@/@types";
import Rates from "@/generics/rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/store/productSlice/ProductSlice";
import { toggleLike, selectLikedProducts } from "@/store/likeSlice/LikeSlice";
import Cards from "@/generics/card/Cards";
import Image from "next/image";


const ProductInfoComponent = ({ product }: { product: ProductInfoType }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.size[2] || product.size[0]
  );
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [customers, setCustomers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dispatch = useDispatch();
  const likedProducts = useSelector(selectLikedProducts);
  const isFavorite = likedProducts.some(
    (item: ProductType) => item.id === product.id
  );

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };


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
        setIsLoading(false);
      } catch (error) {
        setErrorMessage("Failed to load customer data");
        setIsLoading(false);
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleFavorite = () => {
    const productToToggle = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      currentPrice: product.currentPrice,
      discount: product.discount,
      rate: product.rate,
    };

    dispatch(toggleLike(productToToggle));
  };

  const handleAddToCart = () => {
    const productToAdd: ProductType = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      currentPrice: product.currentPrice,
      discount: product.discount,
      rate: product.rate,
      quantity: quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
    };

    dispatch(addProduct(productToAdd));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        Loading product information...
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto py-6 text-red-500">{errorMessage}</div>
    );
  }

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
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="object-contain p-1"
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>

            <div className="relative rounded">
              <Image
                src={product.img}
                alt={product.name}
                className="object-contain"
                width={500}
                height={400}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <button
                onClick={toggleFavorite}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart
                  size={24}
                  className={
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>
            </div>
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
                selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
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

            <div className="mt-8 flex items-center gap-4 !h-[40px]">
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
                className="flex-1 !bg-black !h-[40px] !hover:bg-gray-800 !text-white rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <h3 className="text-2xl font-bold mb-6">Customers also bought</h3>
          <div className="grid grid-cols-3 gap-6">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <Rates />
                <div className="mt-3 flex items-center gap-2">
                  <h2 className="text-xl font-bold">{customer.name}</h2>
                  <Image
                    src="/check.svg"
                    alt="Verified"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="mt-2 text-gray-700 line-clamp-3">
                  {customer.decr}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Cards />
      </div>

      <div className="md:hidden">
        <div className="px-2 min-[300px]:px-3 py-2 text-[10px] min-[300px]:text-xs text-gray-500">
          <div className="flex items-center flex-wrap">
            <button className="hover:text-gray-700">Home</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">Shop</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">Men</button>
            <span className="mx-1">›</span>
            <button className="hover:text-gray-700">T-shirts</button>
          </div>
        </div>

        <div className="relative w-full h-48 min-[300px]:h-56 min-[400px]:h-64">
          <Image
            src={product.img}
            alt={product.name}
            className="object-contain"
            fill
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md"
          >
            <Heart
              size={16}
              className={
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }
            />
          </button>
        </div>

        <div className="flex justify-center gap-1 min-[300px]:gap-2 mt-2 px-2 min-[300px]:px-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`relative w-12 h-12 min-[300px]:w-14 min-[300px]:h-14 min-[400px]:w-16 min-[400px]:h-16 border rounded cursor-pointer ${
                selectedThumbnail === i ? "border-black" : "border-gray-200"
              }`}
              onClick={() => setSelectedThumbnail(i)}
            >
              <Image
                src={product.img}
                alt={product.name}
                className="object-contain p-0.5"
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>

        <div className="px-2 min-[300px]:px-3 py-3 min-[400px]:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg min-[300px]:text-xl min-[400px]:text-2xl font-bold">
              {product.name}
            </h1>
            <button
              onClick={toggleFavorite}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart
                size={18}
                className={
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                }
              />
            </button>
          </div>
          <div className="text-yellow-500 mt-1 flex items-center text-xs min-[300px]:text-sm">
            <Rates />
            <span className="text-gray-500 ml-1 text-[10px] min-[300px]:text-xs">
              {product.rate.toFixed(1)}/5
            </span>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-lg min-[300px]:text-xl font-bold">
              ${product.currentPrice}
            </span>
            <span className="ml-2 text-sm min-[300px]:text-base text-gray-400 line-through">
              ${product.price}
            </span>
            <span className="ml-2 text-xs min-[300px]:text-sm text-red-500">
              -{product.discount}%
            </span>
          </div>

          <p className="mt-2 min-[300px]:mt-3 text-xs min-[300px]:text-sm text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="mt-3 min-[300px]:mt-4">
            <h4 className="text-xs min-[300px]:text-sm font-medium mb-1 min-[300px]:mb-2">
              Select Colors
            </h4>
            <div className="flex gap-1 min-[300px]:gap-2">
              {product.color.map((color) => (
                <div
                  key={color}
                  className={`w-5 h-5 min-[300px]:w-6 min-[300px]:h-6 min-[400px]:w-7 min-[400px]:h-7 rounded-full cursor-pointer flex items-center justify-center ${
                    selectedColor === color
                      ? "ring-1 ring-offset-1 ring-black"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <div className="text-white text-[8px] min-[300px]:text-xs">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 min-[300px]:mt-4">
            <h4 className="text-xs min-[300px]:text-sm font-medium mb-1 min-[300px]:mb-2">
              Choose Size
            </h4>
            <div className="flex gap-1 min-[300px]:gap-2 flex-wrap">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`px-2 py-0.5 min-[300px]:px-3 min-[300px]:py-1 text-xs min-[300px]:text-sm rounded ${
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

          <div className="mt-4 min-[300px]:mt-5 flex items-center gap-2 min-[300px]:gap-3">
            <div className="flex items-center border rounded">
              <button
                className="px-1.5 py-0.5 min-[300px]:px-2 min-[300px]:py-1"
                onClick={decreaseQuantity}
              >
                <Minus size={12} className="min-[300px]:size-[14px]" />
              </button>
              <span className="px-2 min-[300px]:px-3 text-xs min-[300px]:text-sm">
                {quantity}
              </span>
              <button
                className="px-1.5 py-0.5 min-[300px]:px-2 min-[300px]:py-1"
                onClick={increaseQuantity}
              >
                <Plus size={12} className="min-[300px]:size-[14px]" />
              </button>
            </div>

            <Button
              className="flex-1 bg-black hover:bg-gray-800 text-white rounded text-xs min-[300px]:text-sm h-7 min-[300px]:h-8"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>

          <div className="mt-5 min-[300px]:mt-6 pt-2 min-[300px]:pt-3 border-t">
            <h3 className="text-base min-[300px]:text-lg font-bold mb-3 min-[300px]:mb-4">
              Customers also bought
            </h3>
            <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-2 min-[300px]:gap-3 min-[400px]:gap-4 max-[492px]:grid-cols-1">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="p-2 min-[300px]:p-3 min-[400px]:p-4 bg-white rounded-lg shadow-md max-[492px]:w-full"
                >
                  <Rates />
                  <div className="mt-1 min-[300px]:mt-2 flex items-center gap-1 min-[300px]:gap-2">
                    <h2 className="text-xs min-[300px]:text-sm min-[400px]:text-base font-bold truncate">
                      {customer.name}
                    </h2>
                    <Image
                      src="/check.svg"
                      alt="Verified"
                      width={16}
                      height={16}
                      className="h-3 w-3 min-[300px]:h-4 min-[300px]:w-4"
                    />
                  </div>
                  <p className="mt-1 text-[10px] min-[300px]:text-xs min-[400px]:text-sm text-gray-700 line-clamp-2 min-[300px]:line-clamp-3">
                    {customer.decr}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default ProductInfoComponent;
