import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pricing1 from 'public/assets/LandingPage/pricing1.png'
import arrow from 'public/assets/LandingPage/arrow.png'
import plan1 from '@/public/assets/LandingPage/plan1.png'
import plan2 from '@/public/assets/LandingPage/plan2.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import aboutobject from '@/public/assets/LandingPage/hero-bg-1.png';
export default function Pricing() {


  return (
      <section className=" w-full  mt-15  md:mb-96 sm:pb-0 container mx-auto  ">
          <Image className=" hidden md:block absolute  left-10 mt-20 w-56 " src={plan1} alt="" />
          <Image className=" hidden md:block absolute w-36 right-0 mt-20 " src={plan2} alt="" />
          <div className="max-w-md mx-auto  pt-10  text-center">
              <h1 className="text-4xl  mb-6 lg:text-4xl text-[#015464] font-graphikBold">Choose Your Plan</h1>
              <p className="text-sm text-[#015464] font-graphik">We can optimize your site so you’ll get more and more traffic
                  leads and sales in no time.</p>
          </div>
          <div className=" mx-auto flex  sm:px-16" >
              <div className="  md-px-24 container  mx-auto ">
                  <div className="grid grid-cols-1   md:grid-cols-1  lg:grid-cols-3 font-nunito ">
                      {/* Card 1 */} 
                      <div className="w-80 h-96 lg:w-72 lg:h-72  lg:pt-14  m-auto lg:mt-16  max-w-sm -top-10">
                          <Image src={pricing1} alt=""
                              className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white" />
                          <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                              <div className="w-5/6 m-auto ">
                                  <h2 className="text-center text-[#015464] text-2xl  pt-6">SILVER PLAN</h2>
                                  <p className="lg:hidden text-center text-gray-500 pt-5 text-sm font-graphik">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>

                                  <p className="text-center pt-2 text-5xl text-[#015464] font-bold ">
                                      <span className="text-2xl mt-2 ">₹</span> 50
                                  </p>


                                  <p className="text-center text-[#0E80AC] pt-1 text-sm">PER MONTH</p>
                                  <Link href='/Pages/Userside/subscription'>
                                  <button
                                      className="lg:text-sm  text-lg  relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                                  </Link>
                              </div>



                          </div>
                      </div>
                      {/* Card 2 */}
                      <div className=" w-80 h-96 lg:w-72 lg:h-72 mt-96  mx-auto lg:mt-16 max-w-sm "> 
                          <Image src={pricing1} alt=""
                              className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-80 object-cover bg-white" />
                          <div className="bg-white shadow-2xl rounded-b-3xl  justify-center">

                              <div className="w-5/6 m-auto">
                                  <h2 className="text-center text-[#015464] text-2xl  pt-6">PLATINUM PLAN</h2>
                                  <p className="text-center text-gray-500 pt-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>
                                  <p className="text-center pt-5 text-5xl text-[#015464] font-bold"> <span className="text-2xl mt-2 ">₹</span> 100</p>
                                  <p className="text-center text-[#0E80AC] pt-1 text-sm">PER MONTH</p>
                                  <Link href='/Pages/Userside/subscription'>
                                  <button
                                      className="lg:text-sm  text-lg  relative -bottom-10 left-1/2 transform -translate-x-1/2  px-4  text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                                  </Link>
                              </div>



                          </div>
                      </div>
                      <div className="w-80 h-96 lg:w-72 lg:h-72 mt-96 lg:py-14  m-auto lg:mt-16 max-w-sm">
                          <Image src={pricing1} alt=""
                              className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white" />
                          <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">

                              <div className="w-5/6 m-auto">
                                  <h2 className="text-center text-[#015464] text-2xl  pt-6">GOLD PLAN</h2>
                                  <p className="lg:hidden text-center text-gray-500 pt-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt quia doloremque saepe consequuntur veritatis repellat earum assumenda, nihil aspernatur, </p>
                                  <p className="text-center pt-5 text-5xl text-[#015464] font-bold"> <span className="text-2xl mt-2 ">₹</span> 300</p>
                                  <p className="text-center text-[#0E80AC] pt-1 text-sm">PER MONTH</p>
                                  <Link href='/Pages/Userside/subscription'>
                                  
                                  <button
                                      className="lg:text-sm  text-lg  relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                                      <Image src={arrow} alt="" />
                                  </button>
                                  </Link>
                              </div>



                          </div>
                      </div>
                  </div>
              </div>


          </div>
      </section>   
    );
}






