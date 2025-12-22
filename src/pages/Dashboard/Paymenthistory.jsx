import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuthContext from '../../customHook/UseAuthContext';
import { Axis3D } from 'lucide-react';
import UseSecureAxios from '../../customHook/UseSecureAxios';

const Paymenthistory = () => {
    const {user}=UseAuthContext();
    const axiosSecure=UseSecureAxios()
    const {data:history=[],refetch}=useQuery({
        queryKey:['paymenthistory',user?.email],
        queryFn:async()=>{
                const res =await axiosSecure.get(`/paymentHistory?email=${user.email}`);
                    
                refetch()
               return res.data
        }
    })
    return (
        <div>

            <h1> My booking package number={history.length}</h1>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Package Name</th>
        <th>My email</th>
        <th>Cost</th>
        <th>Transaction Id</th>
        <th>Tracking Id</th>
        <th>Payment Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        history.map((his,index)=>{
            return  <tr>
        <th>{index+1}</th>
        <td>{his.packageName}</td>
        <td>{his.customerEmail}</td>
        <td>{his.amount}</td>
        <td>{his.transactionId}</td>
        <td>{his.trackingId}</td>
        <td>{his.paidAt}</td>
      </tr>
        })
      }
      
     
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default Paymenthistory;