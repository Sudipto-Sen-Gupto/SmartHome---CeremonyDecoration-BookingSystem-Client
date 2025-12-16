import React from 'react';
import UseAuthContext from '../../../customHook/UseAuthContext';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
         
   const{signUp}=UseAuthContext()

       const {register,handleSubmit,formState:{errors}}=useForm();

      const handleRegister=async(data)=>{
       
               const email=data.email;
               const pass=data.password;
               const userName=data.UserName;
               const imageFile=data.photoURL[0];
                 console.log(email,pass,userName);
               const formData=new FormData();
               formData.append('image',imageFile)

             const  image_URL=`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_PHOTOAPI}`

             const getImage=await axios.post(image_URL,formData);
             console.log(getImage.data.data.display_url);

            const photoURL= getImage.data.data.display_url;

             signUp(email,pass,userName,photoURL).then((res)=>{
                 
                console.log(res);
               toast('Registration is successfully done')     

             }).catch(err=>console.log(err.message))
        
      }
   
  return (
    <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" {...register('UserName',{required:true})} placeholder="Write your name" />

          <label className="label">Photo_URL</label>
          <input type="file" {...register('photoURL',{required:true})} className="file-input file-input-neutral" />

          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Write your email" />

          {
            errors.email?.type==='required'&& <p className='text-red-500'>Need a valid email</p>
          }

          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6, pattern:/^(?=.*[a-z])(?=.*[A-Z]).+$/})} className="input" placeholder="Password" />
             
            {
              errors.password?.type==='required' && <p className='text-red-500'>You should give password</p>
            }

            {
              errors.password?.type==='minLength'&& <p className='text-red-500'> At least 6 character need for password</p>
            }

            {
              errors.password?.type==='pattern' && <p className='text-red-500'> At least one uppercase letter and one lowercase letter must in password</p>
            }

          
          <button className="btn btn-neutral mt-4">Sign Up
          </button>
        </fieldset>

        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;