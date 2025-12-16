import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuthContext from '../../../customHook/UseAuthContext';
import { toast } from 'react-toastify';
import Googlebutton from '../../../component/Googlebutton/Googlebutton';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
         
  const navigate= useNavigate();
  const location=useLocation();
  const {userLogin}=UseAuthContext()
  const {register,handleSubmit,formState:{errors}}=useForm();

  const handleLog=(data)=>{
               console.log(data);


               const email=data.email;
               const pass=data.password;

         userLogin(email,pass).then(()=>{


           toast('Logged in successfully')
              navigate(`${location.state ? location.state : '/'}`) 
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
        
             <form onSubmit={handleSubmit(handleLog)}>
                <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email",{required:true})} className="input" placeholder="Email" />
            
            {
              errors.email?.type==='required' && <p className='text-red-500'>Need a valid Email</p>
            }

          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-500'>Need password</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
             </form>

         <Googlebutton></Googlebutton>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;