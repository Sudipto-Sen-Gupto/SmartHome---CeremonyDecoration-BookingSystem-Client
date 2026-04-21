import React, { useState } from 'react';
import UseSecureAxios from '../../customHook/UseSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { Ban, CircleUser, ShieldOff, ShieldUser } from 'lucide-react';
import { toast } from 'react-toastify';


const Usermanagement = () => {

    const axiosSecure=UseSecureAxios();
   
    const {data:users=[],refetch}=useQuery({
          
          queryKey:['userdetails'],
          queryFn:async()=>{
                 const res=await axiosSecure.get('/users');
                //  console.log(res.data);
                 return res.data
          }
    })
            
           
   const adminClick = async (user) => {
  const updateRole = user.role === "admin"?"user":"admin";

  try {
    const res = await axiosSecure.patch(`/users/${user._id}`, {
      role: updateRole
    });

    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Role updated successfully");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to update role");
  }
};

 

    return (
        <div>
            <h1>User entrance : {users.length}</h1>

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

        <td onClick={()=>adminClick(user)}> {user.role==="admin"?<ShieldUser />: <ShieldOff />}   </td>

        
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