import React from 'react';
import { Star, MapPin } from "lucide-react";
import { Link } from 'react-router';

const Decorcard = ({decorPackage:data}) => {
       
   
    // console.log(data);
    
    return (
        <div>
             <div className="w-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-semibold rounded-full shadow">
          {data?.decorationType}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {data?.title}
            </h2>
            <p className="text-sm text-gray-500">{data?.category}</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {data?.rating}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          {data.location}
          <span>• {data?.reviews} reviews</span>
        </div>

        <div className="flex items-center justify-between pt-3">
          <p className="text-base font-semibold text-gray-800">
            ৳{data?.min_price.toLocaleString()} – ৳{data?.max_price.toLocaleString()}
          </p>
          <Link to={`/viewdetails/${data._id}`} className="btn btn-neutral text-white  rounded-xl hover:bg-gray-800 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
        </div>
   
   
    );
};

export default Decorcard;