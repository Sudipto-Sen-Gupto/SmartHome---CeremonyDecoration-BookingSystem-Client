import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuthContext from './UseAuthContext';
import { useNavigate } from 'react-router';

 const instance=axios.create({
    baseURL:'http://localhost:3000/'
 })

const UseSecureAxios = () => {
   
    const {user,logOut}=UseAuthContext();
     const navigate=useNavigate();
    useEffect(()=>{
        const myReqInterceptors= instance.interceptors.request.use((config)=>{

            config.headers.Authorization=`Bearer ${user?.accessToken}`
            return config;
        })
         
         const myResInterceptors= instance.interceptors.response.use((response)=>{
            return response
         },(error)=>{
              console.log(error);
              if(error.status===401 || error.status===403){
                logOut().then(()=>{
                    navigate('/authlayout/login')
                })
              }

              return Promise.reject(error);
         })

        return()=>{
            instance.interceptors.request.eject(myReqInterceptors);
            instance.interceptors.response.eject(myResInterceptors);
        }
    },[user,navigate,logOut])

    return instance;
};

export default UseSecureAxios;