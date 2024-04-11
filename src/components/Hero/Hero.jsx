import React, { useEffect } from 'react';
import '../../styles/style.css';
import { TypeAnimation } from 'react-type-animation';
import heroimg from "../../assets/hero-img/Group 35 (1).png"
import playbtn from "../../assets/button-play/Button Play.png"
import arrowright from "../../assets/arrow-right/arrow-right 1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <div className="min-h-screen font-poppins">
      <div className="flex flex-col items-center justify-center gap-10 pt-10 m-auto sm:px-10 md:flex-row lg:flex-row md:gap-10 ">
        <div data-aos="fade-left" className='flex flex-col items-center justify-center md:items-start lg:items-start '>
          <div>
            <button className="px-6 py-3 font-semibold duration-300 lightBg customRed rounded-3xl hover:scale-105 ">Feast Your Senses</button>
          </div>
          <div className='flex flex-col items-center md:items-start lg:items-start'>
            <h1 className="pt-8 text-3xl font-bold md:text-3xl lg:text-5xl ">Bon Appetit:</h1>
            <TypeAnimation
              sequence={[
                'Explore Culinary',
                1000,
                'Taste Adventure',
                1000,
                'Dive into Food',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              start={true}
              className="text-3xl font-bold lg:text-5xl md:text-3xl customRed"
            />
            <h1 className="text-3xl font-bold lg:text-5xl md:text-3xl">Creations</h1>
          </div>
          <div className="max-w-md lg:max-w-lg md:max-w-sm">
            <p className="py-8 pb-10 text-center grayColor md:text-start lg:text-start">
              Your ultimate destination for all things food! Explore our extensive collection of mouthwatering recipes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row md:justify-start">
            <div className="flex items-center justify-center ">
              <button className="flex items-center gap-4 px-6 py-3 text-sm text-white cursor-pointer customBg rounded-3xl md:items-center md:py-1 md:px-6 md:gap-1 lg:gap-4 lg:px-6 lg:py-3 hover:bg-[#1a1414] hover:scale-105 transform transition-transform duration-300">ORDER NOW <span className=""><img className="w-6 h-6 hover:text-[#FF2626]" src={arrowright} alt="arrow" /></span> </button>
            </div>
            <div className="flex items-center justify-center">
              <p className="px-4 text-sm font-bold md:text-sm md:text-nowrap">WATCH DEMO</p>
              <img className="w-10" src={playbtn} alt="play-button" />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="max-w-sm md:max-w-sm lg:max-w-lg">
          <img className="" src={heroimg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;