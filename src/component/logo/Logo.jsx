import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <div >
            <Link to={'/'} className='flex items-center'>
                       <img className='w-10 h-10' src={logo} alt="" />
            <h1>Home Decor Hub</h1>
            </Link>
        </div>
    );
};

export default Logo;