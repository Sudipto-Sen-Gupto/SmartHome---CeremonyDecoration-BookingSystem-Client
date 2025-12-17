import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {  useParams } from 'react-router';
import UseAxios from '../../customHook/UseAxios';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';
const ViewDetails = () => {
   
       const axiosInstance=UseAxios();
    const {id}=useParams();
    console.log(id);

    const {data:decor}=useQuery({
         queryKey:['decoration',id],
         queryFn:async()=>{
            const res=await axiosInstance.get(`/decorPack/${id}`);
            return res.data
         }
    })
    return (
        <div>
           

             <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6">
        <img src={decor.image} alt={decor.title} className="w-full md:w-1/2 h-auto rounded-2xl shadow-lg object-cover" />

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-orange-700">{decor.title}</h1>
          <p className="text-sm text-gray-500 font-medium">{decor.category}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              <Star className="w-5 h-5 fill-current" /> {decor.rating} ({decor.reviews} reviews)
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-5 h-5" /> {decor.location}
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-5 h-5" /> {decor.duration}
            </div>
          </div>

          <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full ${decor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <CheckCircle className="w-4 h-4" /> {decor.available ? 'Available' : 'Not Available'}
          </div>

          <p className="text-gray-700 whitespace-pre-line">{decor.description}</p>
        </div>
      </div>

      {/* Included Features */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Included in Decoration</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {decor.included.map((item, index) => (
            <li key={index} className="bg-white shadow rounded-lg p-4 flex items-center justify-center font-medium text-gray-700 hover:bg-orange-50 transition">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Price & Action */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-orange-100 rounded-2xl p-6 shadow-inner">
        <p className="text-2xl font-bold text-orange-800">
          ৳{decor.min_price.toLocaleString()} – ৳{decor.max_price.toLocaleString()}
        </p>
        <button className="px-6 py-3 text-white bg-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-700 transition">
          Book Now
        </button>
      </div>
    </div>
        </div>
    );
};

export default ViewDetails;


