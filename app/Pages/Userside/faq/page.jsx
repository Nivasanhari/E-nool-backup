import Image from 'next/image'
import React from 'react'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import fqa from 'public/assets/fqa.png'
import FQAbg from 'public/assets/FAQbg.png'
import Aboutbg from 'public/assets/aboutbg.png'
import img1 from 'public/assets/img1.png'
import Ellipse from 'public/assets/Ellipse.png'
import Lefe from 'public/assets/lefe2.png'
import Leaf2 from 'public/assets/leaf2.png'
import lefe1 from 'public/assets/lefe1.png'


const FQA = () => {
    return (<DefaultLayout>
        <div className="min-[2000px]:container min-[2000px]:mx-auto">
            <div className="mx-auto absolute  mt-36 text-[#015464] md:ml-24 ">
                <nav>
                    <ul className="flex m-0 items-center p-0">
                        <li className="flex items-center text-left">
                            <a
                                href="#"
                                title=""
                                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                            >
                                {" "}
                                Home{" "}
                            </a>
                        </li>

                        <li className="flex items-center text-left">
                            <svg
                                className="block h-5 w-5 align-middle text-[#015464] "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                            </svg>

                            <a
                                href="#"
                                title=""
                                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                            >
                                {" "}
                                FAQ{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className=' mb-10'>

                <Image className='  h-[400px] top-[83px]' src={Aboutbg} />
                <Image className=" absolute z-0 top-20 w-16 " src={Leaf} alt="" />
                <div className=' container flex m-auto top-48 absolute justify-center items-center'>
                    <div className=' ml-[300px] w-auto '>
                        <Image className=' absolute w-96' src={FQAbg} />
                        <h2 className=' text-[#015464] mt-44 text-3xl font-graphikBold top-[351px]  h-[16px]'>Frequently Asked Questions </h2>
                        <h1 className=' text-[#015464] font-graphikBold text-xl mt-12'>Welcome to Enool!L</h1>
                        <p className=' text-[#015464] mt-8 text-[12px] font-medium left-[965px] w-[400px] h-[146px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className=' m-auto h-[250]'>
                        <Image className=' top-[130px] max-w-md lg:max-w-sm' src={fqa} alt='' />
                    </div>
                </div>
                <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-14 w-28 " src={lefe1} alt="" />
                <div className=' container flex justify-center items-center mt-[300px] mx-auto'>
                    <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 " src={img1} />
                    <Image className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 " src={Ellipse} />
                    <button className=' relative bg-[#015464] opacity-1 text-sm font-medium ml-[-50px] py-14 px-12 rounded-xl text-white '>General <hr className=' ' /></button>
                    <button className=' relative bg-[#408080] opacity-1 text-sm font-medium py-11 px-7 pb-9 pt-14 ml-10 w-[150px] rounded-xl text-white '>SUBSCRIPTION  & ACCOUNT</button>
                    <button className=' relative bg-[#7CC9B5] opacity-1 text-sm font-medium ml-10 py-14 px-12 rounded-xl text-white '>PAYMENT</button>
                </div>
            </div>

            <div className=' container flex justify-center items-center mt-28 md:items-center md:justify-center '>
                <div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>01. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>02. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>03. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>04. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>05. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>06. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden pb-3'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>07. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                    <div className=' relative w-[700px] overflow-hidden'>
                        <input className=' peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                        <div className=' h-12 w-full flex items-center'>
                            <h1 className=' text-lg font-semibold text-[#015464]'>08. Welcome to Enool!</h1>
                        </div>
                        <div className=' absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                            <div className=' text-[#14adad] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                            </div>
                        </div>
                        <hr className=' p-1' />
                    </div>
                </div>
                <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 right-0 w-28 " src={Leaf2} />
                <Image className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-48 w-28 " src={Lefe} />
                <Image className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 " src={img1} />
                <Image className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 " src={Ellipse} />
            </div>
        </div>
    </DefaultLayout>
    )
}

export default FQA
