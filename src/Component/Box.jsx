import React from "react";

export const Box = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-32 ">
      <div className="w-1/2 h-[50vh]">
        <div className="w-full h-full relative rounded-xl bg-[#004D43] flex justify-center items-center "> 
          <img className=" w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute border-2 py-1 px-5 border-zinc-200 rounded-full left-10 bottom-10">hey</button>
        </div>
      </div>
      <div className="w-1/2 h-[50vh] flex gap-5">
        <div className="w-1/2 h-full relative flex justify-center items-center rounded-xl bg-[#212121]">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className="absolute border-2 py-1 px-5 border-zinc-200 rounded-full left-10 bottom-10">RATING 5.0 ON  CLUTCH</button>
        </div>
        <div className="w-1/2 h-full relative flex justify-center items-center rounded-xl bg-[#212121]">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="absolute border-2 py-1 px-5 border-zinc-200 rounded-full left-10 bottom-10">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
};
