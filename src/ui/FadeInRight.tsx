import { motion, Variants } from 'framer-motion';
import React from 'react'

interface Props{
    children: JSX.Element;
    className?: string;
    once? : false | boolean;
}

const fadeInRightAni : Variants = {
    hidden: {
        opacity: 0, clipPath: 'polygon(0% 100%,0% 100%,0% 0%,0% 0%)', y: 10,
    },
    visible : {
        opacity: 1, clipPath:'polygon(0% 100%,100% 100%,100% 0%,0% 0%)', y: 0,
    }
}
const FadeInRight = (props: Props) => {
  return (
    <motion.div 
    variants={fadeInRightAni}
    initial="hidden" 
    whileInView={"visible"}
    viewport={{once: props.once}}
    transition={{duration: 0.6, ease: "easeOut"}}
    className={`${props.className}`}>{props.children}</motion.div>
  )
}

export default FadeInRight