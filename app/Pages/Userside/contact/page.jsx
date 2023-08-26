'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import imgbg from 'public/assets/contact-bg.png'
import Lefe from 'public/assets/lefe1.png'
import contactimg from "public/assets/contactimg.png"
import leaf2 from 'public/assets/leaf2.png'
import sideimg from 'public/assets/img1.png'
import circle from 'public/assets/Ellipse.png'
import call from 'public/icons/call.png'
import emailicon from 'public/icons/email.png'
import locationicon from 'public/icons/location.png'
import Contact1 from 'public/icons/contact1.png'
import Contact2 from 'public/icons/contact2.png'
import Contact3 from 'public/icons/contact3.png'
import Contact4 from 'public/icons/contact4.png'

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({}); // Initialize errors state

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error message when the user starts typing again
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Please provide a valid email address';
        }
        // ... (other validation checks)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors state if there are validation errors
        } else {
            console.log('Form submitted successfully');
            // You can make an API request or perform other actions here
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    return (<DefaultLayout >
        <div className='  bg-white '>
            <Image className=' relative h-[400px]' src={Aboutbg} />
            <Image className=' absolute ml-0 top-[100px] w-[45px]' src={Leaf} alt='' />
            <div className=' container justify-center flex items-center mx-36 left-1/4 max-w-2xl top-48 absolute '>
                <h1 className=' absolute   mt-5 text-[#015464] text-5xl font-extrabold font-graphikBold text-center'>Have Any Questions</h1>
                <Image className='h-44' src={imgbg} alt='imgbg' />
            </div>
            <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-14 w-28 " src={Lefe} alt="" />
            <div className=' container justify-center items-center flex top-20 mt-9 mb-24 lg:m-auto lg:w-auto md:m-auto sm:m-auto' >
                <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 " src={sideimg} />
                <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 left-28 w-32 " src={leaf2} />
                <Image className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 " src={circle} />
                <div className=' bg-[#015464] flex rounded-3xl h-[450px] w-[700px]'>
                    <div className=' sm:m-auto'>
                        <Image className=' mt-20 ml-20 w-[300px]' src={contactimg} alt='contactimg' />
                    </div>
                    <form className=' mt-12 px-12 gap-5 flex-col  flex sm:m-auto' onSubmit={handleSubmit}>
                        <div className='flex items-center'>
                            <Image className='absolute ml-3' src={Contact1} alt='Contact1-img' />
                            <input
                                className={`pl-10 outline-0 p-3 pr-28 text-[11px] rounded ${errors.name ? 'border-red-500' : 'border-[#14adad]'}`}
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                        </div>
                        {errors.email && <span className='text-red-500 text-xs'>{errors.name}</span>}
                        <div className=' flex items-center'>
                            <Image className=' absolute ml-3' src={Contact2} alt='Contact2-img' />
                            <input className=' pl-10 outline-0 p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text'
                                placeholder='Email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange} />
                        </div>
                        {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
                        <div className=' flex items-center'>
                            <Image className=' absolute ml-3' src={Contact3} alt='Contact3-img' />
                            <input className=' pl-10 outline-0 p-3 pr-28 text-[11px] rounded text-[#14adad]' type='text' placeholder='Subject' />
                        </div>
                        <div className=' flex mt-5 items-centre'>
                            <Image className=' absolute ml-3 mt-3' src={Contact4} alt='Contact3-img' />

                            <textarea className=' outline-0  rounded text-[11px] placeholder:pt-3 placeholder:pl-8' type='type' placeholder=' Send Message' cols="44" rows="5"></textarea>
                        </div>

                        <button className=' text-white bg-[#7CC9B5] text-[11px] rounded-xl mt-5 p-2'>Send Message</button>
                    </form>
                </div>
            </div>

            <div className=' conatiner justify-center items-center mt-44 m-auto flex'>
                <div className="w-72  mt-[50px] lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#015464] rounded-md p-2' src={call} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Call Us</h2>
                            <p className="text-center  text-[#14adad] font-semi">+91 1234567890</p>
                            <p className="text-center  text-[#14adad] font-semi">+91 1234567890</p>
                        </div>
                    </div>
                </div>

                <div className="w-72  mt-[50px] ml-14 lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#408080] rounded-md p-2' src={emailicon} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Email Us</h2>
                            <p className="text-center  text-[#14adad] ">sample@gmail.com</p>
                            <p className="text-center  text-[#14adad] ">sample@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-72  mt-[50px] ml-14 lg:mt-16 max-w-sm">
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                        <div className="w- m-auto flex">
                            <Image className=' bg-[#7CC9B5] rounded-md p-2' src={locationicon} alt='call-icon' />
                        </div>
                        <div className=' text-start'>
                            <h2 className=" text-[#015464] text-2xl font-bold pt-6">Find Us</h2>
                            <p className="text-center  text-[#14adad] ">Lorem Epsum @Lorem</p>
                            <p className="text-center  text-[#14adad] ">sample@gmail.com</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </DefaultLayout>
    )
}

export default page
