import React, { Suspense, useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';


const Homelayout = () => {

 

  

  return (
    <div className='max-w-[1600px] mx-auto'>
      {/* Navbar is full width */}
      <header>
        <Navbar />
      </header>

      {/* Main content centered */}
      <main className="max-w-[1600px] mt-24 mx-auto px-4 md:px-6">
        <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer full width */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Homelayout;