import React from 'react';
import error from '../error/App-Error.png'
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                    <img src={error} alt="" />
                    <Link to={'/'} className='btn btn-primary text-black'>Go to  Home page</Link>
                </div>
        </div>
    );
};

export default Error;