import React, { useEffect, useState } from "react";

export const Eye = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className='w-full relative h-full bg-cover bg-center bg-[url("Component\img\bg-img.jpg")]'
      >
        <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-50">
            <div className="w-2/3 h-2/3 relative rounded-full bg-black">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotate})`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-50">
            <div className="w-2/3 h-2/3 relative rounded-full bg-black">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotate})`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
