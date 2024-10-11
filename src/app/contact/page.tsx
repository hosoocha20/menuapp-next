'use client'
import React from 'react'
import { IoMdSend } from "react-icons/io";

const page = () => {
  return (
    <div className=" font-inter mt-[-3rem] tablet:mt-[-4.3rem] ">
        <section className="min-h-[100vh] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav  w-full bg-white  pt-[4rem] lg:pt-[5rem] pb-[2rem] lg:grid lg:grid-cols-[30%_auto] lg:gap-x-[15%]">
            <div className='*:font-monsterrat *:text-my-black-900  pt-0 pb-[2rem] md:py-[2rem] lg:py-[4rem]'>
                <h1 className=' text-[2rem] md:text-[2.5rem] font-medium '>Contact Us</h1>
                <p className='text-sm md:text-base '>Welcome to SmartMenu!</p>
                <p className='text-sm md:text-base  mt-[2rem] lg:mt-[3rem]'>At SmartMenu, we specialize in innovative table ordering solutions designed to streamline your restaurant operations and enhance the customer experience.</p>
                <p className='text-sm md:text-base mt-[1rem]'>Our technology empowers customers to order directly from their table using QR code menus. With our advanced menu management system, you can easily customize your menu, update pricing, and highlight special offers in real time.</p>
                <p className='text-sm md:text-base mt-[1rem]'>Have questions or need more information? Don't hesitate to contact us. We're here to help you streamline your restaurant operations and enhance your customer experience.</p>
            </div>
            <div className='flex-1  lg:pt-[4rem]'>
                <div className='w-full h-full flex flex-col  bg-my-primary-400 rounded-[2rem] px-[2rem] md:px-[4rem] py-[3rem] md:py-[4rem] '>
                   
                    <form className='justify-center flex-1 flex flex-col gap-8 text-white [&_.CONTACT-LABEL]:flex [&_.CONTACT-LABEL]:flex-col [&_.CONTACT-LABEL]:text-sm [&_.CONTACT-LABEL]:md:text-[0.9rem] [&_.CONTACT-LABEL]:tracking-wide [&_.CONTACT-INPUT]:bg-transparent [&_.CONTACT-INPUT]:placeholder-my-primary-200 [&_.CONTACT-INPUT]:border-b-2 [&_.CONTACT-INPUT]:border-my-primary-50 [&_.CONTACT-INPUT]:py-2 [&_.CONTACT-INPUT]:text-sm [&_.CONTACT-INPUT]:md:text-[0.9rem]'>
                            <label className=' CONTACT-LABEL'>
                                NAME
                                <input className="CONTACT-INPUT focus:outline-none" placeholder='Your Name' type='text'/>
                            </label>

                        <label className='CONTACT-LABEL'>
                            EMAIL
                            <input className="CONTACT-INPUT focus:outline-none" placeholder='Email Address'type='email'/>
                        </label>
                        <label className='CONTACT-LABEL'>
                            PHONE NUMBER
                            <input className="CONTACT-INPUT focus:outline-none" placeholder='Phone Number'type='text'/>
                        </label>
                        <label className='CONTACT-LABEL'>
                            RESTAURANT NAME
                            <input className="CONTACT-INPUT focus:outline-none" placeholder='Your restaurant name'type='text'/>
                        </label>
                        <label className='CONTACT-LABEL border-b-2 border-my-primary-50 pb-1'>
                            MESSAGE
                            <textarea className="placeholder-my-primary-200  py-2 bg-transparent focus:outline-none focus:border focus:border-my-primary-100 min-h-min" placeholder='Leave a message'/>
                        </label>
                        <button className='flex gap-3 bg-my-primary-50 hover:bg-white rounded-[0.3rem] text-my-primary-500 text-[0.97rem] font-bold w-min justify-center items-center px-9 py-[0.45rem]'>
                            SEND
                            <IoMdSend className='text-[0.875rem] flex'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default page