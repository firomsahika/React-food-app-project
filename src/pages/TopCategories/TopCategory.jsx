import React, { useEffect } from "react";
import fastfood from "../../assets/top-categories/Frame 28 (1).png"
import salad from "../../assets/top-categories/Frame 28 (2).png"
import chinese from "../../assets/top-categories/Frame 28 (3).png"
import drink from "../../assets/top-categories/Frame 28 (4).png"



import AOS from "aos";
import "aos/dist/aos.css";

const TopCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="pt-40 md:h-screen lg:h-screen md:mt-0 lg:pt-2 lg:mt-0 font-poppins ">
      <div className="flex flex-col items-center justify-center md:py-20 lg:py-10 md:px-10 ">
        <p className="text-5xl font-bold py-14">Top category</p>
        <div className="grid grid-cols-2 gap-10 lg md:grid-cols-4 lg:grid-cols-4 lg:gap-14">
          <div
            data-aos="fade-up" data-aos-delay="0"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-14 lg:px-16 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-150 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src={fastfood}
              alt="fastFood"
            />
            <p>FastFood</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="200"
            className="flex flex-col items-center gap-4 px-8 py-8 text-white duration-300 shadow-lg md:px-12 md:py-12 lg:py-14 lg:px-16 rounded-2xl customBg hover:scale-105"
          >
            <img
              className="w-14 lg:w-20"
              src={salad}
              alt="fastFood"
            />
            <p>Salad</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="400"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-14 lg:px-16 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-105 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src={chinese}
              alt="fastFood"
            />
            <p>Chinese</p>
          </div>
          <div
            data-aos="fade-up" data-aos-delay="600"
            className="flex flex-col  items-center gap-4 px-8 py-8 md:px-12 md:py-12 lg:py-14 lg:px-16 shadow-lg rounded-2xl hover:bg-[#FF2626] hover:scale-105 duration-300"
          >
            <img
              className="w-14 lg:w-20"
              src={drink}
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
