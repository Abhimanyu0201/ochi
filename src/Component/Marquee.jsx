import { motion } from "framer-motion";
import React from "react";

export const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap font-['Founders_Grotesk'] ">
        {[1, 2, 3].map((index) => (
          <motion.h1
            key={index}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 7, repeat: Infinity, repeatType: "loop" }}
            className="text-[17vw] leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold pt-10 mb-6"
          >
            WE ARE OCHI{" "}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};
