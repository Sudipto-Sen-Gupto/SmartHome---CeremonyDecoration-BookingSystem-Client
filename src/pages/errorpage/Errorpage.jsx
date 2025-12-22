import React from 'react';
 
import error from './error.jpg'
import { Link } from 'react-router';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
const Errorpage = () => {
    return (
        <div className='max-w-400 mx-auto'>

            <Navbar></Navbar>
            
             <div className='relative'>
            <img src={error} alt="" />

            <Link  to={'/'} className='btn btn-primary absolute top-1/2 right-1/2'>go to home</Link>
        </div>
         <Footer></Footer>
        </div>

       

       
    );
};

export default Errorpage;