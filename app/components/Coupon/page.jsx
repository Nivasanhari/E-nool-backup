"use client"
import React from 'react'

const page = ({ isVisivle, onClose }) => {
  if (!isVisivle) return null;
  return (
    <div className=' fixed inset-0 bg-[#015464] bg-opacity-25 flex justify-center items-center'>
      <div className=' fixed w-[800px]'>
        <div className=' bg-[#7CC9B5] w-[800px] h-[500px] p-2 rounded-3xl '>
          <div className=' flex'>
            <h3 className=' text-white ml-[330px] font-bold mt-4'>Available Offers</h3>
            <button className=' text-xl ml-32 mr-10 bg-[#7CC9B5] rounded-full p-1 px-3 text-white bg-opacity-25'
              onClick={() => onClose()}
            >
              x
            </button>
          </div>
          <div className=' flex'>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad] mt-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad]mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad] mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex'>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad] mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad] mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
            <div className=' bg-white w-[200px] rounded-xl ml-10 mt-8'>
              <div className=' ml-4 text-sm pb-5'>
                <h3 className=' text-[#015464] font-semibold pt-5'>Coupon Heading Save Upto 35%</h3>
                <p className=' text-[10px] text-[#14adad] mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className=' flex'>
                  <p className=' bg-[#7CC9B5] bg-opacity-50 font-semibold text-[#015464] w-20 text-center mt-4'>ENL35</p>
                  <button className=' mt-3 ml-16 text-[12px] font-bold text-[#015464] '>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
