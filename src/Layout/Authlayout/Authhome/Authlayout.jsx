import React, { Suspense } from 'react';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';
import { Outlet } from 'react-router';

const Authlayout = () => {
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

export default Authlayout;