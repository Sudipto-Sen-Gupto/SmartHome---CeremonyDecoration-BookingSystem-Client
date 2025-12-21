import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseSecureAxios from '../../customHook/UseSecureAxios';

const Successpayment = () => {

    const [searchParams]=useSearchParams();
      const axiosSecure=UseSecureAxios()
     const sessionId= searchParams.get('session_id');
     console.log(sessionId);

     useEffect(()=>{
                     
            if(sessionId){
                 axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res=>{
                    console.log(res.data);
                 })
            }
     },[sessionId,axiosSecure])
    return (
        <div>
            <h1>Payment successfull</h1>
        </div>
    );
};

export default Successpayment;