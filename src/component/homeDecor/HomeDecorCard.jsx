import React from 'react';
import UseAxios from '../../customHook/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Decorcard from '../decorCard/Decorcard';


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
        <div className='grid grid-col-1 gap-10 p-5 md:grid-cols-3'>
            {
                packages.map(decorPackage=><Decorcard key={decorPackage._id} decorPackage={decorPackage}></Decorcard>)
            }
        </div>
    );
};

export default HomeDecorCard;