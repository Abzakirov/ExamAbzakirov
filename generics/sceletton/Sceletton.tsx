import React from "react";

const SkeletonCard = () => (
  <div className="container2">
    <div className="flex flex-row justify-between overflow-x-auto py-4 px-2">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[250px] max-[600px]:w-full rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"></div>
              <div className="h-3 w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mt-2 animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default SkeletonCard;
