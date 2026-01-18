import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxios from '../../customHook/UseAxios';
import Decorcard from '../decorCard/Decorcard';

const Decorcards = () => {
    const[totalPackages,setTotalPackages]=useState(0);
    const [page,setPage]=useState(0);
    const [currentPage,setCurrentPage]=useState(0);

    const limit=5;

     const axiosInstance=UseAxios();

    const {data:decorPackages=[]}=useQuery({
        queryKey:['decorationPackage',totalPackages,currentPage],
        queryFn:async()=>{
                
            const res=await axiosInstance.get(`/decorPack?limit=${limit}&skip=${currentPage*limit}`);
            const totalPage=Math.ceil(res.data.total/limit);
            setPage(totalPage)
            setTotalPackages(res.data.total)
            return res.data.result;
        }
    })


    return (
       <div>

        <div>
            <h1>
                Total Decoration Packages={totalPackages}
            </h1>
        </div>
         <div className='grid grid-cols-1 gap-10 p-5 md:grid-cols-3'>
            {
                decorPackages.map(decorPackage=><Decorcard key={decorPackage._id} decorPackage={decorPackage}></Decorcard>)
            }
        </div >
               <div>
                <div className='flex justify-center gap-4 p-5'>
                    
                    {
                        currentPage>0 &&  <button className='btn btn-primary'onClick={()=>setCurrentPage(currentPage-1)}>Prev</button>
                    }

                    {
                [...Array(page).keys()].map(n=><button className={`btn ${currentPage===n&&'btn-secondary'}`} onClick={()=>setCurrentPage(n)}>{n+1}</button>)
               }

                {
                        currentPage<page-1 &&  <button className='btn btn-primary'onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
                    }
                </div>
               </div>
       </div>
    );
};

export default Decorcards;