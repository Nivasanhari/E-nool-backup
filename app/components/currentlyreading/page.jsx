"use client"
import React from 'react'
import book from 'public/assets/book.png'
import img1 from 'public/assets/img1.png'
import Staricon from '@/app/components/staricon/Staricon'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div className=' container  mt-10 justify-start items-center ml-40 flex'>
                <Image className=' absolute top-[830px]  w-[350px]' src={img1} alt='' />
                <div className=' flex '>
                    <Image className=' mt-16 w-44' src={book} alt='book-img' />
                    <div className=' mt-28 ml-16 flex flex-col justify-center '>
                        <h2 className=' text-[#145464] text-2xl font-bold'>King of Battle and Blood</h2>
                        <div className=' flex items-center'>
                            <Staricon />
                            <p className=' ml-2 text-xs'>(27)</p>
                        </div>
                        <p className=' text-[#14adad] text-sm mt-'>by Scarlett St. Clair</p>
                        <p className=' text-[13px] mt-3 text-[#145464] font-bold max-w-md md:max-w-sm'>Describes what being a foster mom is really like, the effects of foster care on the whole family, and how the foster care system fails severely abused children.</p>
                        <div className=' mt-8'>
                            <button className=' bg-[#145464] rounded-3xl text-white px-8 py-2'>Read</button>
                            <button className=' bg-[#7CC9B5] rounded-3xl text-white px-6 py-2 ml-10'>Write Review</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default page
