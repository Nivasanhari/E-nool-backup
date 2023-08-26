import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>            <div className="font-graphik">

            <Navbar />
            <div className='m-auto'>
            </div>
            {children}
            <div className="w-full mt-96  md:mt-0 md:pt-0  ">
                <Footer />
            </div>
        </div>
        </div>
    );
};

export default DefaultLayout;