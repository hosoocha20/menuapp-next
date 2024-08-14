'use client'

import React from 'react'

import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface ViewMoreUIProps {
    tag: string,
    body: string,
    className? : string
}

const ViewMoreUI = (props: ViewMoreUIProps) => {
  return (
    <div className={`group h-[150px] tablet:h-[300px] lg:h-[370px]  flex flex-col items-center justify-center gap-[2rem] font-inter cursor-pointer ${props.className}`}>
      
        <p className='font-cabin uppercase text-center font-medium text-my-black-300 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em]'>{props.tag} </p>
        <div className='group-hover:gap-x-[4.5rem] gap-x-[2.8rem] flex items-center justify-center  transition-[column-gap] duration-300 ease-out'>
            <p className='tracking-wide  text-[1.05rem]  md:text-[1.2rem] lg:text-[1.3rem] font-normal text-my-black-950'>{props.body}</p>
            <LiaLongArrowAltRightSolid className='text-[1.9rem] text-my-black-900'/>
        </div>
    </div>
  )
}

export default ViewMoreUI