import React from 'react';
import UseAuthContext from '../../customHook/UseAuthContext';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
     
    const location=useLocation()
    
    const {user,loader}=UseAuthContext();

    if(loader){
        return <p>data load</p>
    }

    if(!user){
     return   <Navigate state={location.pathname} to={'/authlayout/login'}></Navigate>
    }
    return children;
};

export default Privateroute;