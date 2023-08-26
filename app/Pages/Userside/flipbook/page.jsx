'use client'
import React from 'react';
import Image from 'next/image';
import PageFlip from 'react-pageflip';
import pdf from '@/public/assets/Flipbook/pdf.png'
import read from '@/public/assets/Flipbook/read.png'
import LefeBg from "public/assets/lefe1.png";
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'

import FlipbookPlayer from "@/app/components/FlipbookPlayer/page.jsx"
const Flipbook = () => {
    return (
        <div className="my-10 mx-auto  max-w-xl  rounded-xl border readbook py-10 px-4 text-center sm:px-10 lg:max-w-screen-xl max-h-screen-xl lg:flex-row lg:text-left">
            <Image className=" absolute z-0 bottom-20 left-0 w-16 " src={Leaf1} alt="" />
            <Image
                className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
                src={LefeBg}
                alt=""
            />
            <div className="flex flex-row my-36">

                <div className="mx-20  ">
                    <div className="bg-[#015464] p-6 rounded-2xl shadow-md m-auto mt-12">
                        <div className="flex flex-col items-center py-10">
                            <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
                                <Image src={pdf} />
                            </div>
                            <span className="my-10  text-center font-medium capitalize font-graphikBold text-white text-4xl">This is the end of
                                the sample.</span>
                            <button
                                type="button"
                                className="w-full h-10 sm:w-50 items-center rounded-full bg-[white]  text-[#015464] font-graphik  p-2 text-center  text-xs "
                            >
                                For Download Buy Now!
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-20  ">
                    <div className="bg-[#015464] p-6 rounded-2xl shadow-md m-auto mt-12">
                        <div className="flex flex-col items-center py-10">
                            <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
                                <Image src={pdf} />
                            </div>
                            <span className="my-10  text-center font-medium capitalize font-graphikBold text-white text-4xl">This is the end of
                                the sample.</span>
                            <button
                                type="button"
                                className="w-full h-10 sm:w-50 items-center rounded-full bg-[white]  text-[#015464] font-graphik  p-2 text-center  text-xs "
                            >
                                Continue Reading Subscribe Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <label for="default-range" className="block mb-2 text-xs text-right font-medium  text-white">100</label>



        </div>



    );
};

export default Flipbook;
