import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuthContext from '../../customHook/UseAuthContext';
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { toast } from 'react-toastify';

const Decorator = () => {

    const {user}=UseAuthContext();
    const axiosSecure=UseSecureAxios()
  const { register, handleSubmit, formState: { errors }} = useForm();

  const handleDecor = (data) => {
    console.log('Decorator Registration:', data);
          axiosSecure.post('/decorators',data).then(()=>{
                    
                toast('Wait some time for approval')
          }).catch(err=>console.log(err.message))
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Become a Decorator</h2>

      <form onSubmit={handleSubmit(handleDecor)} className="flex flex-col gap-4">
        
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: "Name is required" })}
            defaultValue={user?.displayName}
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
            defaultValue={user?.email}
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* District */}
        <div>
          <label htmlFor="district" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            District
          </label>
          <input
            type="text"
            id="district"
            name="district"
            {...register("district", { required: "District is required" })}
            placeholder="Enter your district"
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
        </div>

        {/* Region */}
        <div>
          <label htmlFor="region" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Region
          </label>
          <input
            type="text"
            id="region"
            name="region"
            {...register("region", { required: "Region is required" })}
            placeholder="Enter your region"
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            {...register("experience", { required: "Experience is required" })}
            placeholder="E.g., 3 years"
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
        </div>

        {/* Services Offered */}
        <div>
          <label htmlFor="services" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Services Offered
          </label>
          <select
            id="services"
            name="services"
            {...register("services", { required: "Please select services" })}
            className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Services Offered</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="ceremony-decoration">Ceremony Decoration</option>
            <option value="both">Both</option>
          </select>
          {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
        </div>

        {/* About / Bio */}
        <div>
          <label htmlFor="about" className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Tell us about yourself
          </label>
          <textarea
            id="about"
            name="about"
            {...register("about", { required: "This field is required" })}
            placeholder="Write a short description about yourself..."
            className="w-full p-2 border rounded h-24 resize-none border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          ></textarea>
          {errors.about && <p className="text-red-500 text-sm">{errors.about.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Decorator;
