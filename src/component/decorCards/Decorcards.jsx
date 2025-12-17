import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxios from '../../customHook/UseAxios';
import Decorcard from '../decorCard/Decorcard';

const Decorcards = () => {
     const axiosInstance=UseAxios();
    const {data:decorPackages=[]}=useQuery({
        queryKey:['decorationPackage'],
        queryFn:async()=>{
                
            const res=await axiosInstance.get('/decorPack');
            return res.data;
        }
    })


    return (
        <div className='grid grid-cols-1 gap-10 p-5 md:grid-cols-3'>
            {
                decorPackages.map(decorPackage=><Decorcard key={decorPackage._id} decorPackage={decorPackage}></Decorcard>)
            }
        </div>
    );
};

export default Decorcards;