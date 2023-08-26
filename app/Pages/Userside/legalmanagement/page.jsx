import Image from 'next/image'
import React from 'react'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
// import privacypolicy from 'public/assets/privacy policy.png'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import Aboutbg from 'public/assets/aboutbg.png'
import img1 from 'public/assets/img1.png'
import Ellipse from 'public/assets/Ellipse.png'
import Lefe from 'public/assets/lefe1.png'
import Terms from 'public/assets/terms.png'
// import Lefe2 from 'public/assets/lefe2.png'
import Legal from 'public/assets/Legal Managementbg.png'
import Leaf2 from 'public/assets/leaf2.png'

const LegalManagement = () => {
    return (<DefaultLayout>        <div className="min-[2000px]:container min-[2000px]:mx-auto">
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
                            Legal Management{" "}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className=' mb-10'>
            <Image className='  h-[400px] top-[-83px]' src={Aboutbg} />
            <Image className=" absolute z-0 top-24 w-16 " src={Leaf} alt="" />
            <div className='  justify-center items-center flex top-40 z-0 absolute '>
                <div className=' max-w-3xl ml-48'>
                    <Image src={Legal} alt='lega1-img' />
                    <h1 className=' text-[#015464] font-extrabold text-5xl'>Legal Management</h1>
                </div>
                <Image className=' max-w-md' src={Terms} alt='Terms' />
            </div>
            <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-14 w-28 " src={Lefe} alt="" />
        </div>
        <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 " src={img1} />
        <Image className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 " src={Ellipse} />
        <div className=' mt-40 mb-24 justify-center items-center flex flex-col m-auto '>
            <div className=' bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <div className=' mt-9 bg-white'>
                <h1 className=' text-[#015464] font-semibold text-2xl pb-5'>As of April 07th,2023</h1>
                <p className=' w-[700px] text-[#14adad] text-xs'>Lorem Ipsum је једноставно модел текста који се користи у штампарској и словослагачкој индустрији. Lorem ipsum је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге. Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.</p>
            </div>
            <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 right-0 w-28 " src={Leaf2} />
            {/* <Image className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-48 w-28 " src={Lefe2} /> */}
            <Image className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 " src={img1} />
            <Image className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 " src={Ellipse} />
        </div>
    </div>
    </DefaultLayout>
    )
}

export default LegalManagement
