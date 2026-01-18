import React from 'react';
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { useQuery } from '@tanstack/react-query';


const Usermanagement = () => {

    const axiosSecure=UseSecureAxios();

    const {data:users=[]}=useQuery({
          
          queryKey:['userdetails'],
          queryFn:async()=>{
                 const res=await axiosSecure.get('/user');
                 console.log(res.data);
                //  return res.data
          }
    })

    return (
        <div>
            <h1>User entrance : {users.length}</h1>
        </div>
    );
};

export default Usermanagement;