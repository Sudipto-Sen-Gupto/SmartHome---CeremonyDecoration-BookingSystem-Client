import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import UseAuthContext from '../../customHook/UseAuthContext';
import { toast } from 'react-toastify';
import './nav.css'
import { LogOut, SquareChevronDown } from 'lucide-react';
import Themetoggle from '../Theme/Themetoggle';
import Logo from '../logo/Logo';
const Navbar = () => {
               
            const {user,logOut}=UseAuthContext();

            const handleLogout=()=>{
                logOut().then(()=>{
                  toast('Log Out successfully')
                })
            }

           


           const list= <nav className='flex flex-col gap-5 md:flex-row '>
                     
                     <NavLink to={'/'}>Home</NavLink>
                     <NavLink to={'/services'}>Services</NavLink>
                     <NavLink to={'/decorator'}>Be a decorator</NavLink>
                     <NavLink to={'/contact'}>Contact</NavLink>
                     <NavLink to={'/about'}>About</NavLink>

                     {
                      user? <NavLink to={'/dashboard'}>Dashboard</NavLink>: ''
                     }
                     
           </nav>
      
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {
          list
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        list
      }
    </ul>
  </div>
  <div className="navbar-end">

   {
       user?<> 
           <img src={user?user.photoURL:''} title={user.displayName}
          className="w-14 h-14 rounded-full mx-2" alt="" />  


          <div className=" dropdown dropdown-bottom dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1"><SquareChevronDown /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
    <li> <button className='btn btn-primary' onClick={handleLogout}><LogOut />Log Out</button></li>
    <li>Theme <Themetoggle></Themetoggle></li>
  </ul>
</div>                     
</> 
        :
        <>
        <Link className='btn btn-primary' to={'/authlayout/login'}>Login</Link>
   <Link className='btn btn-outline' to={'/authlayout/register'}>SingUp</Link>
       </>
   }

   
  </div>
</div>
        </div>
    );
};

export default Navbar;