import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const VideoTest = () => {
  const [show, setShow] = useState(false);
  const [milk, setMilk] = useState(1);
  const [shot, setShot] = useState(1);
  const [decaf, setDecaf] = useState(false);
  const [size, setSize] = useState(1);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[900px] relative">
        <img src={"/phonemenudesign2222.svg"} className="h-[900px]" />
        <div className={`absolute bg-black  w-[90%] h-[95%] top-[27px] left-[22px] ${show ? "opacity-45" : "opacity-0"} transition-opacity duration-500`}></div>
        <div
          className={`videotest absolute border pl-5 py-4 w-[82%] h-[85%] top-[93px] left-[42px] rounded-[1rem]  overflow-y-auto bg-white ${
            show ? "opacity-1 z-[10]" : "opacity-0"
          } transition-opacity duration-500`}
        >
            <div className="w-full flex justify-end">
                <RxCross2 className=" text-[1.5rem] flex"/>
            </div>
          <p className="text-center font-medium mt-[-20px]">Flat White</p>
          <img src="/latte.jpeg" className="w-[120px] m-auto mt-3" />
          <hr className="mt-3"></hr>
          <p className="mt-5 text-[15px] font-semibold">+ Select Milk</p>
          <div className={`flex flex-wrap gap-2  *:rounded-[0.5rem] *:py-2 *:px-3 *:text-[15px] mt-2 *:transition-[background-color,border] *:ease-in-out *:duration-500 `}>
            <button className={`border ${milk === 1 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>Regular milk</button>
            <button className={`border ${milk === 2 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>
              Trim milk{" "}
              <span className=" text-[12px]">(+$0.5)</span>
            </button>
            <button className={`border ${milk === 3 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`} onClick={() => setMilk(3)}>
              Oat milk{" "}
              <span className=" text-[12px]">(+$0.5)</span>
            </button>
            <button className={`border ${milk === 4 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>
              Almond milk{" "}
              <span className=" text-[12px]">(+$0.5)</span>
            </button>
          </div>
          <p className="mt-5 text-[15px] font-semibold">+ Add extra shot</p>
          <div className={`flex gap-3 *:border *:rounded-[0.5rem] *:py-2 *:px-3 *:text-[15px] mt-2 `}>
            <button className={`border ${shot === 1 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>Single</button>
            <button className={`border ${shot === 2 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>
              Double{" "}
              <span className=" text-[12px]">(+$0.5)</span>
            </button>
            <button className={`border ${shot === 3 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>
              Triple{" "}
              <span className="text-[12px]">(+$1.0)</span>
            </button>
          </div>
          <p className="mt-5 text-[15px] font-semibold">+ Options</p>
          <div className="flex gap-3 *:border *:rounded-[0.5rem] *:py-2 *:px-3 *:text-[15px] mt-2">
            <button className={`border flex  gap-1 items-center ${decaf ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"} transition-[background-color,border] ease-in-out duration-500 `} onClick={() => setDecaf(!decaf)}>
              <p>
                  Decaf{" "}
                  <span className=" text-[12px]">(+$0.5)</span>
              </p>
              <RxCross2 className={`${decaf ? "block" : "hidden"}`}/>
            </button>
          </div>
          <p className="mt-5 text-[15px] font-semibold">+ Select Size</p>
          <div className="flex gap-3 *:border *:rounded-[0.5rem] *:py-2 *:px-3 *:text-[15px] mt-2 *:transition-[background-color,border] *:ease-in-out *:duration-500 ">
            <button className={`border ${size === 1 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`}>Regular</button>
            <button className={`border ${size === 2 ? "bg-my-black-900 border-my-black-900 text-white" : "bg-my-black-50"}`} onClick={() => setSize(2)}>
              Large{" "}
              <span className=" text-[12px]">(+$1.0)</span>
            </button>
          </div>
          <hr className="mt-5"></hr>
          <div className="grid grid-cols-2 mt-5 *:text-[15px]">
            <p className="font-semibold">Selected:</p>
            <p className="font-semibold">Amount</p>
            <p>Flat White</p>
            <p>$5.0</p>
            <p>+ Oat milk</p>
            <p>$0.5</p>
            <p>+ Single</p>
            <p>$0.0</p>
            <p>+ Decaf</p>
            <p>$0.5</p>
            <p>+ Large</p>
            <p>$1.0</p>
            <p className="font-bold text-[16px] mt-2">Total</p>
            <p className="font-bold text-[16px] mt-2">$7.0</p>
          </div>
          <button className="border py-2 px-3 rounded-[0.5rem] float-right flex items-center bg-[#14452f] text-white mt-5">
            <IoCheckmark />
            <p className="text-[15px]">Add to Cart</p>
          </button>
        </div>
        <div
          className="absolute  w-[150px] h-[150px] left-[130px] top-[180px] cursor-pointer"
          onClick={() => setShow(true)}
        ></div>
      </div>
    </div>
  );
};

export default VideoTest;
