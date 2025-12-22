import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { UserCheck, UserRoundX } from 'lucide-react';
import Swal from 'sweetalert2';


const Approvedecorator = () => {
    const axiosSecure=UseSecureAxios()
    const {data:decorators=[],refetch}=useQuery({
        queryKey:['beDecor','pending'],
        queryFn:async()=>{
                const res=await axiosSecure.get('/decorators')
               
                return res.data
        }
    }) 
          

         const decoratorUpdate=(decor,status)=>{

            const updateInfo={status:status,email:decor.email}

                axiosSecure.patch(`/decorators/${decor._id}`,updateInfo).then((res)=>{
                    refetch()
                    console.log(res.data)

                    if(res.data.modifiedCount){
                        Swal.fire({
  position: "top-end",
  icon: "success",
  title: `Decorator ${status}`,
  showConfirmButton: false,
  timer: 1500
});
                    }

                })
            
         }

         const handleApprove=(decor)=>{
                 
            decoratorUpdate(decor,'approved')
                
                
         }


         const handleDecline=(decor)=>{
               decoratorUpdate(decor,'decline')
            }

    return (
        <div>
                  <h1 className='text-3xl font-bold'> Decorator pending list= {decorators.length}</h1>


                  <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Decorator Name</th>
        <th>Decorator Email</th>
        <th>Mobile no</th>
        <th>Decorator's district</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
   {
         decorators.map((decorator,index)=>{
             return     <tr key={decorator._id}>
        <th>{index+1}</th>
        <td>{decorator.name}</td>
        <td>{decorator.email}</td>
        <td>{decorator.phone}</td>
        <td>{decorator.district}</td>
        <td>{decorator.status}</td>
        <td className='flex gap-2'>
              <UserCheck onClick={()=>handleApprove(decorator)} />    <UserRoundX onClick={()=>handleDecline(decorator)}/>
        </td>
      </tr> 
         })
   }
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Approvedecorator;