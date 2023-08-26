"use client"
import React from 'react'
import Add from 'public/assets/Add.png'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div>
                <Image className=" rounded w-56 object-cover object-center mb-4" src={Add} alt="content" />
                <button className=' bg-[#015464] p-3 px-5 text-white rounded-xl items-center ' onClick={() => setShowModal(true)}>+ Add New</button>
            </div>
        </div>
    )
}

export default page
