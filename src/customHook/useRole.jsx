import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuthContext from './UseAuthContext';
import UseSecureAxios from './UseSecureAxios';


const useRole = () => {
        
    const{user}=UseAuthContext();
    const axiosSecure=UseSecureAxios()

    const {isLoading,data:personRole="user"}=useQuery({
        queryKey:['personRole',user?.email],
          enabled: !!user?.email,
        queryFn:async()=>{
                  const res=await axiosSecure.get(`users/${user.email}/role`)
                  console.log(res.data.role);
                  return res.data.role
        }
    })
    return ({personRole,isLoading})
}
export default useRole;