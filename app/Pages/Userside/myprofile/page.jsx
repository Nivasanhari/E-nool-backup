"use client"
import React, { useState } from 'react'
import bgimg from 'public/assets/bg1.png'
import Image from 'next/image'
import Staricon from '@/app/components/staricon/Staricon'
import Lefe from 'public/assets/lefe1.png'
import Profile from 'public/assets/profile.png'
import book from 'public/assets/book.png'
import img1 from 'public/assets/img1.png'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import Mylist from '@/app/components/mylist/page'
import Currentlyreading from '@/app/components/currentlyreading/page'



const page = () => {

    const [isGridView, setGridView] = useState(true);

    const enableGridView = () => {
        if (!isGridView) {
            setGridView(true);
        }
    };

    const enableListView = () => {
        if (isGridView) {
            setGridView(false);
        }
    };

    return (<DefaultLayout>
        <div className='  top-[-500px] rounded-3xl '>
            {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
            <div className=' container flex  justify-start ml-40 items-start'>
                <div className=' flex mt-40'>
                    <Image className='  bg-[#7CC9B5] rounded-full w-auto' src={Profile} alt='Profile-img' />
                    <div className=' ml-20 mt-10 '>
                        <h3 className=' text-[#015464] text-3xl font-extrabold font-graphikBold  '>Display Name</h3>
                        <p className=' mt-3 text-[#01adad] text-sm'>@UserName</p>
                        <div className=' mt-10'>
                            <button className=' bg-[#145464] p-3 px-8 text-white rounded-3xl'>Edit Profile</button>
                            <button className=' ml-8 bg-[#01adad] p-3 px-8 text-white rounded-3xl'>Share Profile</button>
                        </div>
                    </div>
                    <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={Lefe} alt="" />
                </div>

            </div>
            <div className=' mt-8 '>
                <hr className=' bg-[#14adad] text-sm bg-opacity-40 p-[1px]' />
                <button className=' text-[#015464] font-bold ml-28 font-graphikBold '
                    onClick={enableGridView}
                >
                    My List</button>
                <button className=' text-[#015464] font-bold ml-10 font-graphikBold '
                    onClick={enableListView}
                >
                    Currently Reading

                </button>
                <hr className=' bg-[#14adad] bg-opacity-40 p-[1px] ' />

                {isGridView ? (
                    <div>
                        <Mylist />
                    </div>
                ) : (
                    <div className=' ml-32'>
                        <div>
                            <Currentlyreading />
                        </div>
                    </div>
                )}


            </div>


        </div>
    </DefaultLayout>
    )
}

export default page
