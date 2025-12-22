import axios from 'axios';
import React from 'react';


 const instance=axios.create({
        baseURL:'https://smart-home-and-ceremony-decoration-zeta.vercel.app'
    })
const UseAxios = () => {
    
    return instance
};

export default UseAxios;