import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxios from '../../customHook/UseAxios';
import Decorcard from '../decorCard/Decorcard';
import Loading from '../loading/Loading';

const Decorcards = () => {
  const [totalPackages, setTotalPackages] = useState(0);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState('asc');

  const limit = 5;
  const axiosInstance = UseAxios();

  const { data: decorPackages = [], isLoading } = useQuery({
    queryKey: ['decorationPackage', currentPage, order],
    keepPreviousData: true,
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/decorPack?limit=${limit}&skip=${currentPage * limit}&sort=minPrice&order=${order}`
      );

      setPage(Math.ceil(res.data.total / limit));
      setTotalPackages(res.data.total);

      return res.data.result;
    }
  });

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-8xl mx-auto px-4">
   
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2">
          Decoration Packages
        </h1>
        <p className="text-gray-500 text-[18px]">
          Total Packages: {totalPackages}
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-base-200 p-4 rounded-xl shadow mb-10">
        <input
          type="text"
          placeholder="Search package..."
          className="input input-bordered w-full md:w-1/3"
        />

        <select
          className="select select-bordered w-full md:w-1/4"
          defaultValue=""
          onChange={(e) => {
            setOrder(e.target.value);
            setCurrentPage(0); 
          }}
        >
          <option value="" disabled>
            Filter By
          </option>
          <option value="asc">Min-Low Price</option>
          <option value="desc">Min-High Price</option>
          <option value="asc">Max-Low Price</option>
          <option value="desc">Min-High Price</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {decorPackages.map((decorPackage) => (
          <Decorcard
            key={decorPackage._id}
            decorPackage={decorPackage}
          />
        ))}
      </div>

      

      
      <div className="flex justify-center flex-wrap gap-3 my-10">
        {currentPage > 0 && (
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}

        {[...Array(page).keys()].map((n) => (
          <button
            key={n}
            onClick={() => setCurrentPage(n)}
            className={`btn ${
              n === currentPage ? 'btn-secondary' : 'btn-outline'
            }`}
          >
            {n + 1}
          </button>
        ))}

        {currentPage < page - 1 && (
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Decorcards;
