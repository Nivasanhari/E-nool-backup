import Image from 'next/image'
import React from 'react'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import Aboutbg from 'public/assets/aboutbg.png'
import Lefe from 'public/assets/lefe1.png'
import img from 'public/assets/404img.png'
import img1 from 'public/assets/404.png'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import Link from 'next/link';


const page = () => {
  return (<DefaultLayout>
    <section className=" ">
      <Image className=' absolute h-[600px] w-full top-[-83px]' src={Aboutbg} />
      <Image className=" absolute z-0 top-20 w-16 " src={Leaf} alt="" />
      <div className="container flex justify-center items-center min-h-screen px-6 py-12 mx-auto">
        <div className=' ml-36 '>
          <Image className=' relative  mt-44 max-w-md' src={img1} />
          <h1 className=' text-[#015464] text-6xl font-extrabold'>Oooops!</h1>
          <h3 className=' ml-3  w-[260px] font-semibold text-lg'>We can't seem to find a page you are looking  for</h3>
          <div>
            <Link href='/Pages/Userside/landingPage'>
              <button className=' bg-[#7CC9B5] text-white ml-3 rounded-md p-4 mt-5'>Back to Home</button>
            </Link></div>

        </div>
        <Image className=' relative right-5 w-auto m-auto ' src={img} alt='img1-img' />
        <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={Lefe} alt="" />
      </div>
    </section>
  </DefaultLayout>
  )
}

export default page
