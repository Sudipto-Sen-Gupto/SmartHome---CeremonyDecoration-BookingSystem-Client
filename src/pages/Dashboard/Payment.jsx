import React from 'react';
import UseAuthContext from '../../customHook/UseAuthContext';
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { FilePenLine, Trash, View } from 'lucide-react';
import Swal from 'sweetalert2';


const Payment = () => {

    const {user}=UseAuthContext();
    const axiosSecure=UseSecureAxios();

    const {data:payments=[],refetch}=useQuery({
          queryKey:['payment',user?.email],

          queryFn:async()=>{
            const res=await axiosSecure.get(`/packageDetails/email?email=${user?.email}`)
            
            return res.data
          }
         
    }) 


           const handleSearch=(payment)=>{



                     Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                            if (result.isConfirmed) {

                                axiosSecure.delete(`/packageRemove/${payment._id}`).then((res)=>{
                                    console.log(res.data);
                                      refetch()
                                      if(res.data.deletedCount){
                                           Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            }
                            });
                                      }

                   
                   
                 }).catch(err=>console.log(err.message))
                                 
           }

           const handlePay=async(payment)=>{
                    
                  const paymentInfo={
                            customer_email:payment.email,
                            packageId:payment._id,
                            totalCost:payment.totalCost,
                            packageName:payment.packageName
                     }

                     console.log(paymentInfo);

                   const res=await axiosSecure.post('/create-checkout-session',paymentInfo);
                   
                   window.location.href=res.data.url

           }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center p-10'> My Package Booking list:{payments.length}</h1>

            <div>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>

        
       
      <tr>

        <th></th>
        <th>Package Name</th>
        <th>Cost</th>
        <th>Customer District</th>
        <th>Payment_Status</th>
        <th>Booking date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

       {
            payments.map((payment,index)=>{

                return   <tr key={index}>
        <th>{index+1}</th>
        <td>{payment.packageName}</td>
        <td>{payment.totalCost}</td>
        <td>{payment.userDistrict}</td>
        <td><button className='btn btn-primary'onClick={()=>handlePay(payment)}>Pay here</button></td>
        <td>{payment.createdAt}</td>
        <td>
            <button> <FilePenLine /></button>
            <button className='mx-2'>  <View /></button>
            <button onClick={()=>handleSearch(payment)}>  <Trash /></button>
        </td>
      </tr>
            })
        }
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Payment;