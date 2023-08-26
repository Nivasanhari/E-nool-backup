import React from 'react'
import Image from 'next/image'
import gettingStarted from '@/public/assets/LandingPage/getting-started.png'
import gettingStarted1 from '@/public/assets/LandingPage/getting-started1.png'
import gettingstartedbg from '@/public/assets/LandingPage/gettingstarted-bg.png'
import Link from 'next/link'
const GetStarted = () => {
  return (
    <section className=" relative  ">
  <div className="absolute z-0 h-full w-full">
    <Image className="h-full w-full object-cover object-center" src={gettingstartedbg} alt="" />
  </div>

  <div className="z-10 relative mx-auto justify-between items-center sm:px-16 py-4">
    <div className="md:container md:mx-auto flex pt-14 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center">
        <Image className="object-cover object-center rounded" alt="hero" src={gettingStarted} />
      </div>

          <div className="relative lg:w-full md:w-1/2 w-5/6 lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <h1 className="text-4xl font-graphikBold  text-white w-3/4">Become an Enool Publisher Partner</h1>
            <p className="text-white mt-8 font-medium">Start selling beautiful, accessible eBooks on ENOOL</p>

            <div className="flex justify-center pt-10">
              <Link href='/Pages/Userside/publisher'>
              <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 focus:outline-none  rounded-[23px] text-lg px-10 ">Get Started</button>
              </Link>
            </div>
            {/* <div className="flex justify-center mt-28"></div> */}

            <Image className="hidden xl:block absolute  lg:-bottom-16 -right-16 object-cover object-center rounded " alt="hero" src={gettingStarted1} />
          </div>

    </div>
  </div>
</section>

  )
}

export default GetStarted