import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxios from '../../customHook/UseAxios';
import Decorcard from '../decorCard/Decorcard';
import DecorCardSkeleton from '../Skeleton/DecorCardSkeleton';
import { useDebounce } from 'use-debounce';

const Decorcards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const [debouncedSearch] = useDebounce(search, 500);

  const limit = 5;
  const axiosInstance = UseAxios();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['decor-pack', currentPage, category, debouncedSearch],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/decorPack?limit=${limit}&skip=${currentPage * limit}&category=${category}&search=${debouncedSearch}`
      );

      return res.data;
    },
    keepPreviousData: true
  });

  const decorPackages = data?.result || [];
  const totalPackages = data?.total || 0;
  const pageCount = Math.ceil(totalPackages / limit);

  if (isLoading) {
    return (
      <div className="max-w-8xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[...Array(5)].map((_, i) => (
            <DecorCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto px-4">

      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2">
          Decoration Packages
        </h1>
        <p className="text-gray-500 text-[18px]">
          Total Packages: {totalPackages}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-base-200 p-4 rounded-xl shadow mb-10">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(0); // 🔥 reset page FIX
          }}
        />

        {/* CATEGORY */}
        <select
          className="select select-bordered w-full md:w-1/3"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(0); // 🔥 reset page FIX
          }}
        >
          <option value="">All Categories</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="corporate">Corporate</option>
        </select>

      </div>

      {/* Loading update */}
      {isFetching && (
        <p className="text-center text-primary mb-4">
          Updating...
        </p>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {decorPackages.map((item) => (
          <Decorcard key={item._id} decorPackage={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 my-10">
        {[...Array(pageCount).keys()].map((n) => (
          <button
            key={n}
            onClick={() => setCurrentPage(n)}
            className={`btn ${n === currentPage ? 'btn-secondary' : 'btn-outline'}`}
          >
            {n + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Decorcards;