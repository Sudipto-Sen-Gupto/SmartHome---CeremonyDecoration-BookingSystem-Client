import React from 'react';
import { Star, MapPin } from "lucide-react";
import { Link } from 'react-router';

const Decorcard = ({decorPackage:data}) => {
       
   
    // console.log(data);
    
    return (
       <div>
  <div className="w-full rounded-2xl overflow-hidden bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300">

    {/* Image */}
    <div className="relative">
      <img
        src={data?.image}
        alt={data?.title}
        className="w-full h-56 object-cover"
      />

      <span className="absolute top-3 left-3 bg-base-100 text-base-content px-3 py-1 text-xs font-semibold rounded-full shadow">
        {data?.decorationType}
      </span>
    </div>

    {/* Content */}
    <div className="p-5 space-y-3">

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-base-content">
            {data?.title}
          </h2>
          <p className="text-sm text-base-content/60">
            {data?.category}
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm font-medium text-base-content/70">
          <Star className="w-4 h-4 fill-warning text-warning" />
          {data?.rating}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-base-content/60">
        <MapPin className="w-4 h-4" />
        {data?.location}
        <span>• {data?.reviews} reviews</span>
      </div>

      <div className="flex items-center justify-between pt-3">
        <p className="text-base font-semibold text-base-content">
          ৳{data?.min_price.toLocaleString()} – ৳{data?.max_price.toLocaleString()}
        </p>

        <Link
          to={`/viewdetails/${data._id}`}
          className="btn btn-primary rounded-xl"
        >
          View Details
        </Link>
      </div>

    </div>
  </div>
</div>

   
   
    );
};

export default Decorcard;