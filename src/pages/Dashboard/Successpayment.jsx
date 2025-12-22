import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import UseSecureAxios from '../../customHook/UseSecureAxios';

const Successpayment = () => {

    const [searchParams]=useSearchParams();
      const axiosSecure=UseSecureAxios();
      const [paymentInfo,setPaymentInfo]=useState({});
     const sessionId= searchParams.get('session_id');
    //  console.log(sessionId);

     useEffect(()=>{
                     
            if(sessionId){
                 axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res=>{
                    // console.log(res.data);
                    
                    setPaymentInfo({trackingId:res.data.trackingId,transactionId:res.data.transactionId})
                 })
            }
     },[sessionId,axiosSecure])
    return (
        <div>
            <h1 className='text-3xl font-bold'>Payment successfull</h1>
            <p className='text-[20px]'> Your Tracking Id ={paymentInfo.trackingId}</p>
            <p className='text-[20px]'>Your Transaction Id = {paymentInfo.transactionId}</p>
          
        </div>
    );
};

export default Successpayment;