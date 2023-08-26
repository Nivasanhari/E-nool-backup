"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'



export default function Example() {
    const [open, setOpen] = useState(true)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Sliver Plan</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 place-items-end ml-56"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        x
                                                    </button>
                                                </div>


                                            </div>
                                            <div className=' container mt-10 outline rounded-lg'>
                                                <h3>Choose Your Subscription</h3>
                                                <div className=' flex ml-2 mb-5'>
                                                    <input type='checkbox' />
                                                    <p className=' pl-3'>1 Month</p>
                                                    <span className=' ml-52'>₹5/month</span><br />
                                                </div>
                                                <div className=' flex ml-2 mb-5'>
                                                    <input type='checkbox' />
                                                    <p className=' pl-3'>3 Month</p>
                                                    <span className=' ml-52'>₹5/month</span><br />
                                                </div>
                                                <div className=' flex ml-2 mb-5'>
                                                    <input type='checkbox' />
                                                    <p className=' pl-3'>6 Month</p>
                                                    <span className=' ml-52'>₹5/month</span><br />
                                                </div>
                                                <div className=' flex ml-2 mb-5'>
                                                    <input type='checkbox' />
                                                    <p className=' pl-2'>12 Month</p>
                                                    <span className=' ml-52'>₹5/month</span><br />
                                                </div>
                                            </div>
                                            <div className=' flex ml-2 mt-10 text-[#14adad]'>
                                                <p className=' '>1 Month</p>
                                                <span className=' ml-40'>Subtotal: ₹5/month</span><br />
                                            </div>
                                            <hr className=' bg-[#14adad] p-[1px] bg-opacity-25' />

                                            <div className=' flex flex-col mt-9'>
                                                <button className=' bg-[#015464] text-white p-1 rounded '>continue to cart</button>
                                                <button className=' bg-[#14adad] text-white p-1 rounded mt-4'>continue to Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div >
                </div >
            </Dialog >
        </Transition.Root >
    )
}
