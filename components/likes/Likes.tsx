"use client";
import { useSelector } from "react-redux";
import Rates from "@/generics/rate/Rate";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleLike, selectLikedProducts } from "@/store/likeSlice/LikeSlice";
import { ProductType } from "@/store/productSlice/ProductSlice";
import Image from "next/image";

const Likes = () => {
  const likedProducts = useSelector(selectLikedProducts);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (product: ProductType) => {
    dispatch(toggleLike(product));
  };

  return (
    <>
      {likedProducts.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl font-medium text-gray-500">
            You haven&apos;t liked any products yet
          </h2>
          <p className="mt-2 text-gray-400">
            Browse our shop and click the heart icon to add products to your
            favorites.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {likedProducts.map((product: ProductType) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-1.5 shadow-md"
                onClick={() => handleRemoveFromFavorites(product)}
              >
                <Heart size={20} className="fill-red-500 text-red-500" />
              </button>

              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={250}
                className="w-full object-contain h-[250px] object-center rounded-md mb-3"
              />
              <h2 className="font-medium text-lg mt-2 truncate">
                {product.name}
              </h2>
              <Rates />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-lg font-semibold text-black">
                  ${product.currentPrice}
                </p>
                <p className="text-lg font-semibold text-gray-300 line-through">
                  ${product.price}
                </p>
                <p
                  style={{ backgroundColor: "rgba(255, 51, 51, 0.10)" }}
                  className="text-[#F33] text-sm font-semibold px-2 py-1 rounded-md"
                >
                  {product.discount}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Likes;
