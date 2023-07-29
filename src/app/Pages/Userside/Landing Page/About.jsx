import Image from 'next/image'
import React from 'react'
import aboutObject from 'public/assets/LandingPage/about object.png'
import about1 from 'public/assets/LandingPage/about1.png'
import about2 from 'public/assets/LandingPage/about2.png'
import LeafBg from 'public/assets/LandingPage/Leaf-Bg.png'


const About = () => {
    return (
        <section className="relative pt-80 ">
            <Image className='absolute pt-96 -left-48' src={aboutObject} alt='' />
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">

                    <Image className=' absolute top-14  w-[90px] h-[102px]' src={about2} alt='' />


                    <div className="">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <div className=' ml-52 h-[200]'>
                                    <Image className=' left-56 top-[130px] w-[350px]' src={about1} alt='' />
                                </div>
                            </div>
                            <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 pl-20 md:mb-0 items-center text-center">
                                <div className=' ml-20'>
                                    <Image className=' absolute ml-[570px] w-28 mt-0' src={LeafBg} alt='' />
                                    <h2 className=' text-[#015464] text-lg font-bold top-[251px] left-[965px] w-[143px] h-[16px]'>WHO WE ARE</h2>
                                    <h1 className=' text-[#015464] font-extrabold text-4xl mt-8'>About ENOOL</h1>
                                    <p className=' text-[#015464] mt-10 text-sm font-medium left-[965px] w-[500px] h-[146px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                    <button className=' bg-[#14adad] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white '>Get Started</button>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default About


