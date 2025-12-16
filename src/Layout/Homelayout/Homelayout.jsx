import React, { Suspense } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Homelayout = () => {
    return (
        <div className='max-w-400 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Homelayout;