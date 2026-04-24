import React from 'react';

const DecorCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300 rounded-t-xl"></div>

      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Description */}
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>

        {/* Price */}
        <div className="h-5 bg-gray-300 rounded w-1/3"></div>

        {/* Button */}
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default DecorCardSkeleton;