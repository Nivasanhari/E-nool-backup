import React from 'react'
import Image from 'next/image'
import gettingstarted from 'public/assets/LandingPage/gettingstarted.png'
const ProcessFlow = () => {
    return (
        <section className="bg-[#015464] py-10">

            <h1 className="font-bold text-[#F1F1F6] text-2xl text-center">Our Simple Process</h1>
            <div className="container  py-24 mx-auto h-screen  ">

                <ol className=" sm:flex justify-center">

                    <li className="relative mb-6 sm:mb-0 ">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-3 h-3 bg-white rounded-full ring-0 ring-white  sm:ring-8  shrink-0">

                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8 text-justify w-96">
                            <h3 className="text-lg font-semibold text-white dark:text-white">Complete the Singup</h3>
                            <p className="text-sm font-normal text-white dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0 ">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-3 h-3 bg-white rounded-full ring-0 ring-white  sm:ring-8  shrink-0">

                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8 text-justify w-96">
                            <h3 className="text-lg font-semibold text-white dark:text-white">Complete the Singup</h3>
                            <p className="text-sm font-normal text-white dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                    </li> <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center  w-3 h-3 bg-white rounded-full ring-0 ring-white  sm:ring-8  shrink-0">

                            </div>

                        </div>
                        <div className="mt-3 sm:pr-8 text-justify">
                            <h3 className="text-lg font-semibold text-white dark:text-white">Complete the Singup</h3>
                            <p className="text-sm font-normal text-white dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        </div>
                    </li>


                </ol>
                <div className="lg:w-full py-24 mx-auto flex ">

                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="text-4xl text-[#F1F1F6]">Ready to start Reading ! Subscribe Now
                            </h1>
                            <p className=" text-[#F1F1F6] mt-8 font-medium">Ready to start Reading ! Subscribe Now
                            </p>
                            <div className="flex justify-center pt-10">
                                <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                            </div>
                        </div>

                    </div>
                    <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={gettingstarted} />
                </div>
            </div>
        </section>
    )
}

export default ProcessFlow