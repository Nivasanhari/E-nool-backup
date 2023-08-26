import React from 'react'
import bg from "public/assets/bg.png"
import Image from 'next/image'
import lefe1 from 'public/assets/lefe1.png'
import Staricon from '@/app/components/staricon/Staricon'
import DefaultLayout from '@/app/components/DefaultLayout/layout';


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

const page = () => {

  const star = Array(5).fill(0)
  return (<DefaultLayout>
    <div className=' justify-center items-center'>
      <div className=' m-auto'>
        {/* <Image className=' absolute rotate-12 mt-10 ml-60 h-[1578px] ' src={bg} alt='feedback-bg-img' /> */}
        <div className=' relative justify-center mb-20 flex'>
          <h1 className=' mt-48 text-4xl font-extrabold w-[500px] text-[#015464] font-graphikBold  text-center leading-loose'>Thank You For Subscribing! Write Your Feedback!</h1>
          <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={lefe1} alt="" />
        </div>
        <div className=' container bg-[#7CC9B5] rounded-3xl h-[550px] m-auto w-[800px]'>
          <div className=' ml-12 text-white '>
            <h3 className=' mb-4 pt-8 '>Your email address will not be published. Required fields are marked <span className=' text-red-500'>*</span> </h3>
            <div className=' flex gap-2'>
              <h3 className=' mb-5'>your rating <span className=' text-red-500'>*</span> </h3>
              <Staricon />
            </div>
            <h3>Your Review <span className=' text-red-500'>*</span> </h3>
            <textarea className=' outline-0 rounded text-black text-[11px] mb-3' type='type' cols="80" rows="9"></textarea>
            <div className=' flex gap-3 mb-5'>
              <input type='checkbox' />
              <h3>I agree with the term and condition.</h3>
            </div>
            <form className=' flex gap-16 mb-5'>
              <div className=' mb-2'>
                <h3>Name <span className=' text-red-500'>*</span>  </h3>
                <input className=' outline-0  p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='Name' />
              </div>
              <div>
                <h3>Email <span className=' text-red-500'>*</span>  </h3>
                <input className=' outline-0 p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='Email' />
              </div>
            </form>
            <div className=' flex gap-3 mb-5'>
              <input type='checkbox' />
              <h3>Save my name, email, and website in this browser for the next time I comment.</h3>
            </div>
            <button className=' text-sm p-1 rounded-xl bg-[#015464] px-5'>Submit</button>
          </div>

        </div>
        <div className=' mt-10 flex justify-center items-center'>
          <button className='  p-3 px-10 text-white rounded-3xl bg-[#7CC9B5]'>Back to Home</button>
        </div>
      </div>

    </div>
  </DefaultLayout>
  );
};


export default page
