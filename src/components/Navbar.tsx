"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
  useAnimate,
  useAnimationControls,
  easeInOut,
 
} from "framer-motion";

import { HamburgerI } from "@/ui/Hamburger";

const Navbar = () => {
  const scrollRef = useRef(null)
  const { scrollY } = useScroll();
  const [hideNav, setHideNav] = useState(false);
  const [scope, animate] = useAnimate();
  const [openNav, setOpenNav] = useState(false);

  const controls = useAnimationControls();

  const navMenuPVariants : Variants ={
    show: {
      
      transition: {duration: 0.3,ease: "easeOut"},
    },
    hide: {
      
      transition: {duration: 0.3,ease: "easeOut"},
    }
  }
  const navMenuVariants : Variants ={
    show: {
      x: 15,
      opacity: 1,
      transition: {duration: 0.3, delay:0.2,ease: "easeOut"},
    },
    hide: {
      x: 30,
      opacity: 0,
      transition: {duration: 0.3, ease: "easeOut"},
    }
  }

  const openMenuAni = async () =>{
    setOpenNav(!openNav);
    if (!openNav) {
      await controls.start("show")
    }
    else{
      await controls.start("hide")
    }
    
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious()!;
    if (latest > prev && latest > 150 && !openNav) {
      // setHideNav(true);
      controls.start("hidden")
    } else {
      // setHideNav(false);
      if (latest === 0)
        controls.start("visible")
      else{
        controls.start("chngBg")
      }

      
    }
  });

  return (
    <motion.nav
      ref={scrollRef}
      variants={{
        visible: { y: 0, backgroundColor: "transparent" },
        hidden: { y: "-100%" },
        chngBg: {y: 0, backgroundColor: "#ffffff"}
      }}
      initial={"visible"}
      animate={controls}

      transition={{ duration: 0.35, ease: easeInOut }}
      className={` px-mob-nav sm:px-sm-nav tablet:px-tablet-nav lg:px-lg-nav  font-inter w-full   flex flex-col tablet:h-[4.3rem]  sticky top-0 z-50   `}
    >
      <div
        className={`z-[1] flex justify-between items-center  h-[3rem] tablet:h-[4.3rem] px-1 ${!openNav? "text-my-black-950" :"text-white"} transition-colors duration-300 `}
      >
        <div className=" tablet:flex-1   font-cabin  text-[1rem] tablet:text-[1.2rem] font-[500]">
          <a href="/">SmartMenu</a>
        </div>
        <div className="hidden tablet:flex flex-1  justify-center gap-[3.2rem] tracking-wider font-[400] text-[0.95rem] text-my-black-950">
          <a href="/products" className=" px-2">Products</a>
          <a href="/features" className=" px-2">Features</a>
          <a href="/contact" className=" px-2">Contact</a>
        </div>
        <div className=" flex-1  flex justify-end items-center gap-[3.2rem] tracking-wider font-[400] text-sm tablet:text-[0.95rem]">
          <button className={`hidden sm:block ${!openNav ? "bg-my-black-950 text-white" : "bg-white text-my-black-950"} tablet:bg-my-black-950 tablet:text-white transition-[background-color,color] duration-300 ease-out rounded-[2rem] px-5 py-[0.5rem] tablet:py-[0.65rem] `}>
            Get Started
          </button>
          <div
            className="block tablet:hidden w-[2rem] h-[1.2rem] "
            onClick={openMenuAni}
          >
            <HamburgerI className="*:bg-my-black-900  " />
          </div>
        </div>
      </div>
      <motion.div variants={navMenuPVariants} animate={controls} initial={"hide"} className={`opacity-0 bg-my-black-950 ${!openNav? "invisible " : "visible opacity-100"} tablet:invisible z-[0] w-full h-screen  transition-[opacity_1s_linear,visibility_0s_linear_300ms] duration-300 absolute left-0 top-0 pt-[3rem] tablet:pt-[4.3rem] px-sm-nav tablet:px-tablet-nav flex flex-col gap-[1rem] text-white text-[1.6rem] md:text-[1.7rem] tablet:text-[2rem] tracking-widest`}>
        <motion.a href="/products" variants={navMenuVariants}   className="mt-[2rem]">Products</motion.a>
        <motion.a href="/features" variants={navMenuVariants}  >Features</motion.a>
        <motion.a href="/contact" variants={navMenuVariants} >Contact</motion.a>
        <motion.p variants={navMenuVariants}  >Get Started</motion.p>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
