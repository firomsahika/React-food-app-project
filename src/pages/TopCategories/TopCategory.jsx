import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TopCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="md:h-screen lg:h-screen  md:mt-0 lg:pt-2 pt-40 lg:mt-0 font-poppins ">
      <div className="flex flex-col items-center justify-center md:py-20 lg:py-10 md:px-10 ">
        <p className="text-5xl font-bold py-14">Top category</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 ">
          <div
            data-aos="fade-up" data-aos-delay="0"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-12 lg:px-14 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-150 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src="./src/assets/top-categories/Frame 28 (1).png"
              alt="fastFood"
            />
            <p>FastFood</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="200"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-12 lg:px-12 shadow-lg rounded-2xl customBg text-white hover:scale-105 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src="./src/assets/top-categories/Frame 28 (2).png"
              alt="fastFood"
            />
            <p>Salad</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="400"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-12 lg:px-12 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-105 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src="./src/assets/top-categories/Frame 28 (3).png"
              alt="fastFood"
            />
            <p>Chinese</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="600"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-12 lg:px-12 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-105 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src="./src/assets/top-categories/Frame 28 (4).png"
              alt="fastFood"
            />
            <p>Drink</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
