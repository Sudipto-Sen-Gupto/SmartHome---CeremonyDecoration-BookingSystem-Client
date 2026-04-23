
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { Ban, CircleUser, ShieldOff, ShieldUser } from 'lucide-react';
import { useState } from 'react';

import Swal from 'sweetalert2';


const Usermanagement = () => {

    const axiosSecure=UseSecureAxios();
    const [search,setSearch]=useState('')
     const {data:users=[],refetch}=useQuery({
          
          queryKey:['users',search],
          queryFn:async()=>{
                 const res=await axiosSecure.get(`/users?searchText=${search}`);
                //  console.log(res.data);
                 return res.data
          }
    })
            
           
//    const adminClick = async (user) => {
//   const updateRole = user.role === "admin"?"user":"admin";

//   try {
//     const res = await axiosSecure.patch(`/users/${user._id}`, {
//       role: updateRole
//     });

//     if (res.data.modifiedCount > 0) {
//       refetch();
//       toast.success("Role updated successfully");
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error("Failed to update role");
//   }
// };

 //admin role update
   const handleAdminGrant=async(userRole)=>{
             
                 const  updateRole={
                         role:'admin'
                    }              

             const roleUpdate=await axiosSecure.patch(`/users/${userRole._id}/role`,updateRole)
                   
            
            if(roleUpdate.data.modifiedCount){
                  
                Swal.fire({
                     position: "top-end",
                         icon: "success",
                      title:`${userRole.name} Role Update as admin Email:${userRole.email}`,
                     showConfirmButton: false,
                             timer: 2000
});
            }
             refetch()
   }

   const handleAdminCancel=async(userRole)=>{
                  const updateRole={role:'user'}
                  const roleUpdate=await axiosSecure.patch(`users/${userRole._id}/role`,updateRole)

                  if(roleUpdate.data.modifiedCount){
                 
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${userRole.name} role set as user Email:${userRole.email}`,
  showConfirmButton: false,
  timer: 2000
});
                    
   refetch();
                  }
   }

   //decorator role update
   const handleDecoratorGrant=(userRole)=>{
                   const updateRole={role:'decorator'}
                   axiosSecure.patch(`users/${userRole._id}/role`,updateRole).then(res=>{
                              if(res.data.modifiedCount){
                                  refetch()
                             
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${userRole.name} role sets as decorator. Email:${userRole.email}`,
  showConfirmButton: false,
  timer: 2000
});
                              }
                   })
                 
   }

   const handleDecoratorCancel=(userRole)=>{
              const updateRole={role:'user'}

              axiosSecure.patch(`users/${userRole._id}/role`,updateRole).then(res=>{
                refetch()
                      if(res.data.modifiedCount){
                        Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${userRole.name} role sets as user. Email:${userRole.email}`,
  showConfirmButton: false,
  timer: 2000
});
                       }
              })
             
   }
    return (
        <div>


         
                      <h1 className='text-center text-2xl py-5'>User entrance : {users.length}</h1>
             

 <div className='flex justify-center'> <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={(e)=>setSearch(e.target.value)} required placeholder="Search" />
</label></div>
        
        
           


            <div className="overflow-x-auto">
  <table className="table text-[18px]">
    {/* head */}
    <thead>
      <tr>
        <th>
             <span>#</span>          
        </th>
        
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Created At</th>
          <th>Admin Role Status</th>
          <th>Decorator Role Status</th>
          
      </tr>
    </thead>
    <tbody>
     {
        users.map((user,index)=>{
            return  <tr key={user._id}>

           <td>{index+1}</td>
        
        <td>
            <div className="flex items-center gap-3">
                  <div className="mask mask-squircle h-12 w-12">
                   <img src={user?.photoURL || "https://via.placeholder.com/50"}alt="user" />
                  </div>
                <div>
                 <h1 className="font-bold">{user?.name}</h1>
                        </div>
                         </div>
                      </td>

        
        <td>
        <h1>{user.email}</h1>
          
        </td>
        <td><h1> {user.role}</h1></td>
        
        <td><h1>{new Date(user.createdAt).toLocaleDateString()}</h1></td>

        <td > {user.role==='admin'? <button  onClick={()=>handleAdminCancel(user)}><ShieldOff /> </button>:<button onClick={()=>{handleAdminGrant(user)}}><ShieldUser /></button>} </td>
          
          <td>{user.role==='decorator'?<button onClick={()=>handleDecoratorCancel(user)}><Ban /></button>: <button onClick={()=>handleDecoratorGrant(user)}><CircleUser /></button>} </td>
       
      </tr>
        })
     }
     
      
    </tbody>
   
   
  </table>
</div>
        </div>
    );
};

export default Usermanagement;