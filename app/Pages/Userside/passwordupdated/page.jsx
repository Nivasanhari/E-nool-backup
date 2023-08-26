'use client'
import React from 'react';
import Link from 'next/link';
import NoDefaultLayout from '@/app/components/NoDefaultLayout/layout';
import Image from 'next/image';

const page = () => {
    const loginObject = '/assets/LoginPage/login-object.png'
    const check = '/assets/check.png'
   
  
    

    return (
        <NoDefaultLayout>
        <div className="bg-white ">
            <div className="flex justify-center h-screen">
                {/* Background Image */}
                <Image
                    className="hidden lg:block lg:w-1/2 lg:h-screen object-fill"
                    src={loginObject}
                    alt="Background"
                        width={1200} height={720}
                />
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center ">
                            
                            <p className="mt-3 text-[#015464] font-black text-4xl">
                                Password Updated
                            </p>
                            <div className="flex justify-center mx-auto m-12">
                                <Image
                                className=" h-25 sm:h-30"
                                src={check}
                                alt="" 
                                width={100}
                                height={70}
                                />
                            </div>
                            <p>Your Password Has been updated</p>

                        </div>
                        
                        
                        <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
                                <div className="mt-6">
                                    <Link href='/Pages/Userside/login'>
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 "
                                    >
                                        Login
                                    </button>
                                    </Link>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        </NoDefaultLayout>
    );
};

export default page;
