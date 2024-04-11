import React,{useEffect} from "react";
import bestfood from "../../assets/best-food/Group 38 (2).png"
import arrow from "../../assets/arrow-right/arrow-right 1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestFood = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500
        });
      }, []);
  return (
    <div className="min-h-screen font-poppins">
      <div className="flex flex-col items-center justify-center gap-10 px-10 pt-20 md:flex-row lg:flex-row md:gap-20 lg:gap-56 lg:pt-0">
        <div data-aos="fade-left" className="flex flex-col items-center justify-center max-w-md lg:items-start md:items-start">
          <p className="text-4xl font-bold text-center md:text-5xl lg:text-5xl lg:text-start">
            Order Your Best Food Any Time
          </p>
          <p className="py-6 leading-6 text-center grayColor md:text-start lg:text-start">
            Whether you're a seasoned chef or a kitchen novice, our
            user-friendly platform caters to all levels of expertise, ensuring
            everyone can savor the joy of creating delicious meals.
          </p>
          <button className="flex items-center gap-4 px-6 py-3 text-sm text-white cursor-pointer customBg rounded-3xl md:items-center md:py-3 md:px-6 md:gap-1 lg:gap-4 lg:px-6 lg:py-3 hover:bg-[#8B8B8B] hover:scale-105 transform transition-transform duration-300">
            ORDER NOW
            <span className="">
              <img
                className="w-6 h-6 hover:text-[#FF2626]"
                src={arrow}
                alt="arrow"
              />
            </span>{" "}
          </button>
        </div>
        <div data-aos="fade-right">
          <img
            className="w-80 md:w-60 lg:w-[24rem]"
            src={bestfood}
            alt="Best food"
          />
        </div>
      </div>
    </div>
  );
};

export default BestFood;
