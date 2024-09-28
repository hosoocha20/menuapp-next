import React from 'react'

 interface LinkUIProps{
    name: string
    color?: string
    underlineColor?: string
 }
const LinkUI = (props: LinkUIProps) => {
  return (
    <div className='group w-fit'>
        <a href={`/${props.name.toLowerCase()}`} className='w-min'>
            <p className={`px-[0.2rem] py-1 font-medium text-[0.9rem] lg:text-base`} style={{color: props.color}}>{props.name}</p>
            <div className='w-full h-[2px] bg-my-black-200 ' style={{backgroundColor: props.underlineColor}}>
                <div className=' scale-x-100 origin-[0_50%] h-full w-full bg-my-black-900 group-hover:scale-x-0 group-hover:origin-[100%_0] transition-transform duration-[250ms] ease-in-out' style={{backgroundColor: props.color}}></div>
            </div>
        </a>
    </div>
  )
}

export default LinkUI