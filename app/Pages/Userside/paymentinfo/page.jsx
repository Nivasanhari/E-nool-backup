'use client'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import bgimg from 'public/assets/bg1.png'
import downarrow from 'public/assets/downarrow.png'
import Book from 'public/assets/book.png'
import Paymentmethod from '@/app/components/paymentmethod/page'
import DefaultLayout from "@/app/components/DefaultLayout/layout";

const page = () => {
    const [showModal, setShowModal] = useState(false);
    return (<DefaultLayout>
        <Fragment>
            <div className='  ml-28 top-[-500px] rounded-3xl mb-[800px]'>
                {/* <Image className=' absolute ml-72' src={bgimg} alt='bgimg' /> */}
                <div className=' ml-10 pt-10 pb-8'>
                    <h3 className=' text-[#015464] text-3xl font-extrabold mt-32 ml-20 font-graphikBold'>Payment Info</h3>
                    <div className=' flex '>
                        <div className=' ml-20 flex gap-20 mt-6 bg-gray-300 w-[200px] bg-opacity-30 px-2 py-2 rounded'>
                            <h2 className=' text-[#14adad] font-semibold text-sm' >Show : All</h2>
                            <button className=''>
                                <Image src={downarrow} alt='downarrow' /></button>
                        </div>
                        <div className=' items-center mt-7 ml-auto mr-52'>
                            <button className=' bg-green-500 p-2 px-8 rounded-3xl text-white ' onClick={() => setShowModal(true)}>Add Payment Method</button>
                        </div>
                    </div>
                    <div className=" z-0 h-[2px] max-w-7xl bg-[#0FBF61] opacity-20 rounded mt-14"></div>
                    <div className=' mt-10 ml-20'>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div className=' text-[#015464] font-semibold'>Card details
                            </div>
                            <div className=' text-[#015464] font-semibold'>Billing Address</div>
                            <div className=' text-[#015464] font-extrabold'>5432**** **** **32</div>
                            <div className=' max-w-md text-[#14adad]' >
                                1St Cross. Chocolate Factory Rd, Tavarekere, Cashier Layout,
                                1St Cross. Chocolate Factory Rd, Tavarekere, Cashier Layout,

                            </div>
                        </div>
                    </div>
                    <div className=" z-0 h-[2px] max-w-7xl bg-[#0FBF61] opacity-20 rounded mb-5"></div>
                </div>
            </div>
            <Paymentmethod isVisivle={showModal} onClose={() => setShowModal(false)}/>
        </Fragment>
        </DefaultLayout>
    )
}

export default page;
