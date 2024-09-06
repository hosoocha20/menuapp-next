import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";

interface Props{
  className?: string;
  heightLine?: string;
}
export const HamburgerI = (props: Props) => {
  const [open, setOpen] = useState(false);
  const variantsT: Variants = {
    open: {
      top: "50%",
      translateY: "-50%",
      backgroundColor: "#ffffff",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openI: {
      rotate: "40deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    close: {
      rotate: "0deg",
      backgroundColor: "#3d3d3d",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      top: 0,
      translateY: "50%",
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsM: Variants = {
    open: {
      scale: 0,
      backgroundColor: "#ffffff",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    closeI: {
      scale: 1,
      backgroundColor: "#3d3d3d",
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const variantsB: Variants = {
    open: {
      bottom: "50%",
      translateY: "50%",
      backgroundColor: "#ffffff",
      transition: { duration: 0.25, ease: "easeOut" },
    },
    openI: {
      rotate: "140deg",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    close: {
      rotate: "0deg",
      backgroundColor: "#3d3d3d",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closeI: {
      bottom: "0%",
      translateY: "-50%",
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
  const controls = useAnimationControls();

  const openNav = async () => {
    if (open) {
      await controls.start("open");
      await controls.start("openI");
    } else {
      await controls.start("close");
      await controls.start("closeI");
    }
  };

  useEffect(() => {
    openNav();
  }, [open]);
  return (
    <button
      className={`h-full *:h-[0.1rem] ${props.heightLine} w-full *:w-full  relative  *:rounded-md ${props.className}`}
      onClick={() => setOpen(!open)}
    >
      <motion.div
        variants={variantsT}
        animate={controls}
        
        className="absolute top-0  left-0"
      ></motion.div>
      <motion.div
        variants={variantsM}
        animate={controls}
        initial={{top: "50%", translateY: "-50%", scale: 1}}
        className={`absolute    left-0`}
      ></motion.div>
      <motion.div
        variants={variantsB}
        animate={controls}
        className="absolute  bottom-0 left-0"
      ></motion.div>
    </button>
  );
};