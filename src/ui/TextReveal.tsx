import React from 'react'
import {  motion } from 'framer-motion'

interface Props{
    children: JSX.Element;
    className?: string;
    once? : false | boolean;
}
//clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
//[clipPath:polygon(0_100%,100%_100%,100%_100%,0_100%)]
const TextReveal = (props: Props) => {
  return (
    <motion.div 
    variants={{hidden: {opacity: 0, y: 25, clipPath:'polygon(0% 100%,100% 100%,100% 100%,0% 100%)'}, visible: {opacity:1, y:0, clipPath:'polygon(0% 100%,100% 100%,100% 0%,0% 0%)'}}}
    initial="hidden"
    whileInView="visible"
    viewport={{once: props.once}}
    
    transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
    className={`relative  ${props.className}`}>
        {props.children}
    </motion.div>
  )
}

export default TextReveal