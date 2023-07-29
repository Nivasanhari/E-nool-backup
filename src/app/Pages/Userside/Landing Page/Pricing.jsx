import React from 'react'
import Image from 'next/image'
import pricing1 from 'public/assets/LandingPage/pricing1.png'
import arrow from 'public/assets/LandingPage/arrow.png'
export default function Pricing() {
    return (
        <section className="container mx-auto  px-5 py-24 md:flex-row flex-col items-center mb-96">
            <div className="max-w-md mx-auto mb-14 text-center">
                <h1 className="text-4xl font-extrabold mb-6 lg:text-4xl text-[#015464]">Choose Your Plan</h1>
                <p className="text-sm text-[#015464] font-medium">We can optimize your site so you’ll get more and more traffic leads and sales in no time.</p>
            </div>

            <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">

                <div className="w-80 h-96  mt-24 m-auto lg:mt-16 max-w-sm">
                    <Image src={pricing1} alt="" className="h-screen rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-96 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                        <div className="w-5/6 m-auto">
                            <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">Silver Plan</h2>
                            <p className="text-center pt-5 text-7xl text-[#015464] font-bold">₹ 50</p>
                            <p className="text-center text-gray-500 pt-5 text-sm">PER MONTH</p>
                        </div>



                    </div>
                </div>


                {/* Second card comes here */}
                <div className="w-80 h-96  mt-24 m-auto lg:mt-16 max-w-sm">
                    <Image src={pricing1} alt="" className="h-screen rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-96 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                        <div className="w-5/6 m-auto">
                            <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">Gold Plan</h2>
                            {/* <p className="text-center text-gray-500 pt-5 text-sm">lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
                            <p className=" text-center text-7xl text-[#015464] font-bold"><span className="text-4xl mt-6">₹</span> 50</p>
                            <p className="text-center text-gray-500 pt-5 text-sm">PER MONTH</p>
                            <button className="lg:text-sm text-lg font-bold relative bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-4  text-white rounded-xl">
                                <Image src={arrow} alt="" />
                            </button>

                        </div>
                    </div>
                </div>


                {/* Third Card comes here */}
                <div className="w-80 h-96  mt-24 m-auto lg:mt-16 max-w-sm">
                    <Image src={pricing1} alt="" className="h-screen rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-96 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                        <div className="w-5/6 m-auto">
                            <h2 className="text-center text-[#015464] text-2xl font-bold pt-6">Platinum Plan</h2>
                            <p className="text-center pt-5 text-7xl text-[#015464] font-bold">₹ 50</p>
                            <p className="text-center text-gray-500 pt-5 text-sm">PER MONTH</p>
                        </div>



                    </div>
                </div>


            </div>


        </section>
    )
}



