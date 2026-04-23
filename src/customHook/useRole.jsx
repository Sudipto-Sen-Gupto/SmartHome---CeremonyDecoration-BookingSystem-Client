import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuthContext from './UseAuthContext';
import UseSecureAxios from './UseSecureAxios';


const useRole = () => {
        
    const{user}=UseAuthContext();
    const axiosSecure=UseSecureAxios()

    const {isLoading,data:personRole='user'}=useQuery({
        queryKey:['userRole'],
        queryFn:async()=>{
                  const res=await axiosSecure.get(`userDetails/${user.email}/role`)
                  return res.data.role
        }
    })
    return ({personRole,isLoading})
}
export default useRole;