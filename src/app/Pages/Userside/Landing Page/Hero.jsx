'use client'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Leaf from 'public/assets/Leaf.png'
import Hero from 'public/assets/LandingPage/hero.png'

export default function Home() {
    return (
        <section className="">
          
            <Image className=" absolute top-20 w-16" src={Leaf} alt=""/>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        showArrows={false}
                        interval={3000}
                        stopOnHover={false}
                        emulateTouch={true} // Keeps auto-play running even on hover
                    >
                        {/* Slide 1 */}
                        <div className="">
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="text-4xl text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                                        <span className=" font-bold text-[#015464]">Book.</span></h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                                    </p>
                                    <div className="flex justify-center pt-10">
                                        <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Button</button>

                                    </div>
                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <Image className="object-cover object-center rounded" alt="hero" src={Hero} />
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="">
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="text-4xl text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                                        <span className=" font-bold text-[#015464]">Book.</span></h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                                    </p>
                                    <div className="flex justify-center pt-10">
                                        <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Button</button>

                                    </div>
                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <Image className="object-cover object-center rounded" alt="hero" src={Hero} />
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div className="">
                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="text-4xl text-[#015464]">The <span className=" text-[#105464] font-bold">Easiest Way</span> to <br />Find Any
                                        <span className=" font-bold text-[#015464]">Book.</span></h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Unlimited reading for the world: millions of books in the browser, accessible to billions of people.
                                    </p>
                                    <div className="flex justify-center pt-10">
                                        <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Button</button>

                                    </div>
                                </div>
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                    <Image className="object-cover object-center rounded" alt="hero" src={Hero} />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

                <div className="carousel-controls left-0 top-0 h-full flex">
                    {/* Play button */}
                    <button
                        className="text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2"
                        onClick={() => {

                        }}
                    >

                    </button>
                </div>
            </div>
        </section>
    );
}
