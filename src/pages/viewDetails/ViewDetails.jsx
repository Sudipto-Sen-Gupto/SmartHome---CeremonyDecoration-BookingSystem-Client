import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

import {format} from 'date-fns'
import UseAuthContext from "../../customHook/UseAuthContext";
import UseSecureAxios from "../../customHook/UseSecureAxios";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { id } = useParams();
  const { user } = UseAuthContext();
   
  const axiosSecure=UseSecureAxios();
  const modalRef = useRef();
  const [modal, setModal] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const { register, handleSubmit, setValue } = useForm();

 
  const { data: decor, isLoading } = useQuery({
    queryKey: ["decoration", id],
     enabled: !!user, 
     retry: false,
    queryFn: async () => {
      const res = await axiosSecure.get(`/decorPack/${id}`);
      return res.data;
    },
  });

  const handleModalOpen = (data) => {
    setModal(data);
    setSelectedPrice(null);
    setValue("price", "");
    modalRef.current.showModal();
  };

  const handleBooking = (formData) => {

     const cost=formData.price;
      const decoratorLocation=formData.decoratorLocation;
      const customerLocation=formData.userDistrict;
        
      let totalCost=0;
      if(decoratorLocation===customerLocation){
           totalCost=cost+(cost*.2)
          
      }
       
      else{
               totalCost=cost+(cost*.3);
               
      }
           
      const createdAt=format(new Date(), "dd MMM yyyy, hh:mm a")
          const status='pending'
      const bookingData={...formData,totalCost,createdAt,status}

    console.log("Booking Data:", bookingData);

        Swal.fire({
                    title: "Are you sure?",
                    text: `Your total cost will ${totalCost} TK by including decorator transport cost.`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                    confirmButtonText: "Yes,Confirm It"
                     }).then((result) => {
                      if (result.isConfirmed) {
                            
                      

                        axiosSecure.post('/packageDetails',bookingData).then((res)=>{

                             console.log(res.data);
                             if(res.data.insertedId){
                                    Swal.fire({
                                     title: "Done",
                                     text: "Your package is booked.",
                                          icon: "success"
                        });

                                 
                             }
                                
                         }).catch(err=>console.log(err.message))


                  
                           }
});

     modalRef.current.close();
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
      

  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl shadow-xl">
    
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={decor?.image}
          alt={decor?.title}
          className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-orange-700">{decor?.title}</h1>
          <p className="text-sm text-gray-500">{decor?.category}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1 text-yellow-500 font-semibold">
              <Star className="w-4 h-4 fill-current" />
              {decor?.rating} ({decor?.reviews})
            </span>

            <span className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" /> {decor?.location}
            </span>

            <span className="flex items-center gap-1 text-gray-600">
              <Clock className="w-4 h-4" /> {decor?.duration}
            </span>
          </div>

          <span
            className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full ${
              decor?.available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            {decor?.available ? "Available" : "Not Available"}
          </span>

          <p className="text-gray-700">{decor?.description}</p>
        </div>
      </div>

      {/* Included */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">
          Included in Decoration
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {decor?.included?.map((item, i) => (
            <li
              key={i}
              className="bg-white p-4 rounded-lg shadow text-center font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-orange-100 p-6 rounded-2xl">
        <p className="text-2xl font-bold text-orange-800">
          ৳{decor?.min_price} – ৳{decor?.max_price}
        </p>
        <button
          disabled={!decor?.available}
          onClick={() => handleModalOpen(decor)}
          className="px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 disabled:opacity-50"
        >
          Book Now
        </button>
      </div>

      {/* MODAL */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleBooking)} className="space-y-3">

             <label class="label">Your Email</label>
            <input
              {...register("email")}
              defaultValue={user?.email}
              readOnly
              className="input w-full"
            />
            
             <label class="label">Your Name</label>
            <input
              {...register("userName")}
              defaultValue={user?.displayName}
              readOnly
              className="input w-full"
            />
            
             <label class="label">Package Name</label>
            <input
              {...register("packageName")}
              defaultValue={modal?.title}
              readOnly
              className="input w-full"
            />

           
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priceOption"
                  className="radio radio-info"
                   checked={selectedPrice === modal?.min_price}
                  onChange={() => {
                    setSelectedPrice(modal?.min_price);
                    setValue("price", modal?.min_price);
                   
                  }}
                />
                Min Price
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priceOption"
                  className="radio radio-info"
                  checked={selectedPrice === modal?.max_price}
                  onChange={() => {
                    setSelectedPrice(modal?.max_price);
                    setValue("price", modal?.max_price);
                  }}
                />
                Max Price
              </label>
            </div>
             
              <label class="label">Package Price</label>
            <input
              {...register("price", { required: true })}
              defaultValue={selectedPrice}
              readOnly
              placeholder="Selected Price"
              className="input w-full"
            />
             
              <label class="label">Decorator Location</label>
            <input
              {...register("decoratorLocation")}
              defaultValue={decor?.location}
              readOnly
              className="input w-full"
            />
            
             <label class="label">Your region</label>
            <input
              {...register("userRegion", { required: true })}
              placeholder="Your Region"
              className="input w-full"
            />
             
              <label class="label">Your district</label>
            <input
              {...register("userDistrict", { required: true })}
              placeholder="Your District"
              className="input w-full"
            />

            <button
              disabled={!selectedPrice}
              className="btn btn-primary w-full"
           >
              Confirm Booking
            </button>
          </form>

          <form method="dialog" className="modal-action">
            <button className="btn">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ViewDetails;
