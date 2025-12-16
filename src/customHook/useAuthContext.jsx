import React from 'react';
import { AuthContext } from '../component/Authprovider/Authprovider';
import { useContext } from 'react';

const UseAuthContext = () => {

    const authContext=useContext(AuthContext)
    return authContext

};

export default UseAuthContext;