
import React from 'react'

const page = ({ isVisivle, onClose }) => {
    if (!isVisivle) return null;
    return (
        <div className=' fixed inset-0 bg-[#015464] bg-opacity-40 flex justify-center items-center'>
            <div className=' bg-white h-[750px] w-[1000px] rounded-2xl'>
                <div className=' flex text-white mt-8 '>
                    <h2 className=' text-xl text-[#015464] items-center ml-[400px]  text-center font-extrabold'>Add Payment Method</h2>
                    <button className=' text-xl mr-5 ml-auto bg-gray-400 rounded-full p-1 px-3 text-white place-items-end'
                        onClick={() => onClose()}
                    >
                        x
                    </button>
                </div>
                <hr className=' bg-[#7CC9B5] p-[0.5px] mt-5' />

                <div className=' mt-10'>
                    <h1 className=' ml-20 text-[#015464] font-extrabold text-xl'>Billing Address</h1>
                    <div className=' flex'>
                        <div className=' flex flex-col  mt-8 ml-20'>
                            <input type='text' placeholder='Address Line 1' className=' border border-gray-300 pr-32  p-3 rounded-2xl' />
                            <input type='text' placeholder='City' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                            <input type='text' placeholder='Postal Code' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                        </div>
                        <div className=' flex flex-col  mt-8 ml-40 '>
                            <input type='text' placeholder='Address Line 1' className=' border border-gray-300 pr-32  p-3 rounded-2xl' />
                            <input type='text' placeholder='City' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                            <input type='text' placeholder='Postal Code' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                        </div>
                    </div>
                </div>


                <div className=' mt-10'>
                    <h1 className=' ml-20 text-[#015464] font-extrabold text-xl'>Payment Method</h1>
                    <div className=' flex'>
                        <div className=' flex flex-col  mt-8 ml-20'>
                            <input type='text' placeholder='Address Line 1' className=' border border-gray-300 pr-32  p-3 rounded-2xl' />
                            <input type='text' placeholder='City' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                        </div>
                        <div className=' flex flex-col  mt-8 ml-40 '>
                            <input type='text' placeholder='Address Line 1' className=' border border-gray-300 pr-32  p-3 rounded-2xl' />
                            <input type='text' placeholder='City' className=' border border-gray-300 mt-8 p-3 rounded-2xl' />
                        </div>
                    </div>
                </div>
                <div className=' mt-10 ml-20'>
                    <button className=' bg-[#14adad] px-5 p-3 rounded-3xl text-white'>Add Payment Method</button>
                    <button className=' bg-[#015464] px-5 ml-10 p-3 rounded-3xl text-white'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default page
