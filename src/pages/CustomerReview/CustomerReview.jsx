import React,{useEffect} from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <section className="h-screen mx-auto font-poppins">
      <div className=" flex flex-col md:flex-row lg:flex-row items-center justify-center mx-auto px-10 md:gap-20 lg:gap-44 gap-16">
        <div 
        data-aos = "fade-left"
   
        className=" relative hover:scale-105 duration-300 lg:pl-32 lg:pb-32">
          <img
            className=" lg:w-60 lg:h-[16rem] lg:left-8 md:w-40 w-60 relative"
            src="./src/assets/rectangles/Rectangle 149.png"
            alt="rectangle"
          />
          <img
            className="lg:max-w-sm  lg:top-10 top-8 right-6 lg:right-0  absolute "
            src="./src/assets/rectangles/Rectangle 148.png"
            alt="rectangle"
          />
          <img 
          className="lg:w-40 w-32 left-6 lg:left-20 top-[15rem] absolute lg:top-[23rem]
          "
          src="./src/assets/customers/Frame 49.png" alt="customers" />
        </div>

        <div 
        data-aos = "fade-right" 
        className="flex flex-col items-center gap-2 ">
          <p className="text-3xl  md:text-4xl lg:text-5xl py-2 font-bold">
            Customer Reviews
          </p>
          <div className="relative flex flex-col lg:items-start items-center gap-2 justify-center">
            <FaQuoteLeft size={60} className="text-[#FFE6E6]" />
            <p className="text-xl grayColor max-w-md text-center lg:text-start">
              Overall, my visit to FoodBox exceeded all expectations. I highly
              recommend it to anyone looking for an extraordinary culinary
              adventure.
            </p>
            <div className="flex items-end justify-end">
            
            </div>
            <img
              className=" w-40 py-4 lg:pl-0 md:pl-0  "
              src="./src/assets/rate/Frame 50.png"
              alt="rate"
            />
            <div className="flex gap-6">
              <img
                className="w-14 md:w-16 lg:w-16"
                src="./src/assets/customer-review/Frame 44.png"
                alt="profile"
              />
              <div className="flex flex-col  justify-center items-start">
                <p className="text-md md:text-xl lg:text-2xl font-bold">
                  Samantha Smith
                </p>
                <p className="grayColor text-sm md:text-md lg:text-md">
                  Food Lover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
