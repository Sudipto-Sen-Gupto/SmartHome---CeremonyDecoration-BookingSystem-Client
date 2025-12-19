import React from 'react';
import UseAuthContext from '../../customHook/UseAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../loading/Loading';

const Privateroute = ({children}) => {
     
    const location=useLocation()
    
    const {user,loader}=UseAuthContext();

    if(loader){
        return <Loading></Loading>
    }

    if(!user){
     return   <Navigate state={location.pathname} to={'/authlayout/login'}></Navigate>
    }
    return children;
};

export default Privateroute;