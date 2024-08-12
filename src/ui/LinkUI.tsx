import React from 'react'

 interface LinkUIProps{
    name: string
 }
const LinkUI = (props: LinkUIProps) => {
  return (
    <div className='group w-fit'>
        <a href='#' className='w-min'>
            <p className='px-[0.2rem] py-1 font-medium'>{props.name}</p>
            <div className='w-full h-[2px] bg-my-black-200 '>
                <div className=' scale-x-100 origin-[0_50%] h-full w-full bg-my-black-900 group-hover:scale-x-0 group-hover:origin-[100%_0] transition-transform duration-[250ms] ease-in-out'></div>
            </div>
        </a>
    </div>
  )
}

export default LinkUI