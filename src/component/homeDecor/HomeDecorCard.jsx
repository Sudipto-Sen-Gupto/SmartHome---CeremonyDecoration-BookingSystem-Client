import React from 'react';
import UseAxios from '../../customHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Decorcard from '../decorCard/Decorcard';
import { Link } from 'react-router';


const HomeDecorCard = () => {

    const axiosInstance=UseAxios();
    const {data:packages=[]}=useQuery({
         queryKey:['decoration'],
         queryFn:async()=>{
            const res=await axiosInstance.get('/decoration');
            return res.data
         }
    })
    return (

        <div className='bg-sky-100 p-5 my-4'> 
            <h1 className='text-3xl font-bold text-center mt-5'>Our Services</h1>
            <p className='text-center mb-5'>Turning ordinary spaces into extraordinary memories.</p>
            <div className='grid grid-col-1 gap-10 p-5 md:grid-cols-3'>
            {
                packages.map(decorPackage=><Decorcard key={decorPackage._id} decorPackage={decorPackage}></Decorcard>)
            }
        </div>
               <div className='flex justify-center' >
                 <Link className='btn btn-neutral' to={'/services'}><span>Show All</span> </Link>
               </div>
        </div>
        
    );
};

export default HomeDecorCard;