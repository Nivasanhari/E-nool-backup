"use client"
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import Addbook from '@/app/components/addBook/page'
import bgimg from 'public/assets/bg1.png'
import book from 'public/assets/book.png'
import Staricon from '@/app/components/staricon/Staricon'
import Lefe from 'public/assets/lefe1.png'
import img1 from 'public/assets/img1.png'
import Add from 'public/assets/Add.png'
import Ellipse from 'public/assets/Ellipse.png'
import CategoriesButton from '../CategoriesButton/CategoriesButton';
import { CardsGrid } from '../CardsGrid/Cards'
const dropdown = '/icons/dropdown.svg'
const gridEnabled = '/icons/grid-enabled.svg'
const gridDisabled = '/icons/grid-disabled.svg'
const listEnabled = '/icons/list-enabled.svg'
const listdisabled = '/icons/list-disabled.svg'


const page = () => {
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInput = () => {
        setInputVisible(!isInputVisible);
    }

    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const [showModal, setShowModal] = useState(false);
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

    return (
        <Fragment>
            <div className='  top-[-500px] rounded-3xl mb-80 '>
                {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
                <div className=' pt-10 pb-8'>
                    <div className=''>
                        <h3 className=' ml-10 text-[#015464] text-3xl font-extrabold mt-32 '>Browse</h3>
                    </div>
                    <div className=' mt-8'>

                        <div className="flex flex-row">
                            <button className=' mt-4 mb-4 ml-12 text-[#015464] text-sm font-semibold'>New Releases</button>

                            <button onClick={handleDropdownToggle}

                                className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                            >
                                Categories
                            </button>
                            <div className=" absolute right-2 mt-4">
                                <button onClick={enableGridView}>
                                    <Image
                                        src={isGridView ? gridEnabled : gridDisabled}
                                        alt='gridEnabled'
                                        className="px-2 w-10"
                                        width={10}
                                        height={10}
                                    />
                                </button>
                                <button onClick={enableListView}>
                                    <Image
                                        src={!isGridView ? listEnabled : listdisabled}
                                        alt='listdisabled'
                                        className="px-2 w-10 items-end"
                                        width={10}
                                        height={10}
                                    />
                                </button>
                            </div>
                        </div>



                        <div className="ml-36"> {isDropdownOpen && <CategoriesButton />}</div>

                        <hr className=' absolute w-24 p-1 bg-[#015464] mt-[-2]  ml-36' />
                        <hr className=' bg-[#14adad] bg-opacity-40 p-[1px]' />
                    </div>
                </div>

                <div className=' conatiner justify-center items-center mt-10  gap-10 flex'>

                </div>


            </div>
            <Addbook isVisivle={showModal} onClick={() => setShowModal(false)} />
        </Fragment>
    )
}

export default page
