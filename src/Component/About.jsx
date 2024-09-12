    import React from "react";

    export const About = () => {
    return (
        <div
        data-scroll
        data-scroll-speed="-.1"
        className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
        >
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that need
            to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
            peo­ple.
        </h1>

        <div className="w-full border-t-[1px] border-[#a1b562] pt-10 mt-20 flex gap-5">
            <div className=" w-1/2  ">
            <h1 className="text-7xl">Our Approach</h1>
            <button className="bg-zinc-900  uppercase flex items-center gap-10 rounded-full px-10 py-5 mt-5 text-white">
                Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
            </div>

            <div className="w-1/2 h-[65vh]  rounded-3xl">
            <img
                className=" rounded-3xl bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt=""
            />
            </div>
        </div>
        </div>
    );
    };
