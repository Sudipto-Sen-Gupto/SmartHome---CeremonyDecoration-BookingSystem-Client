import React from 'react';
import { Link } from 'react-router';

const Cancelpayment = () => {
    return (
        <div>
            <h1 className='text-3xl '>Payment Cancelled. Try again</h1>
            <Link to={'/dashboard/payment'} className='btn btn-primary'>Try Again</Link>
        </div>
    );
};

export default Cancelpayment;