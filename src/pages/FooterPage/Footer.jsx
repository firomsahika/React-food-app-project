import React from "react";
import logo from "../../assets/Logo/Frame 2.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-h-screen flex justify-center items-center font-poppins">
      <div className="flex flex-col gap-20 items-center justify-center">
        <div className="flex lg:flex-row flex-col items-center gap-14">
          <div className="max-w-sm mx-2 flex flex-col lg:items-start items-center justify-center">
            <img className="w-32" src={logo} alt="logo" />
            <p className=" py-4 lg:text-start text-center">
              Your ultimate destination for all things food! Explore our
              extensive collection of mouthwatering recipes.
            </p>
          </div>
         <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-14">
         <div className="flex flex-col mx-2">
            <p className="text-md md:text-xl lg:text-xl font-bold py-4">Menu</p>
            <p>About</p>
            <p className="py-2">Menu</p>
            <p>Event</p>
            <p className="py-2">Offer</p>
          </div>
          <div className="flex flex-col mx-2">
            <p className="text-md md:text-xl lg:text-xl font-bold py-4">
              Information
            </p>
            <p>Contact</p>
            <p className="py-2">Orders & Returns</p>
            <p>Videos</p>
            <p className="py-2">Reservation</p>
          </div>
          <div className="flex flex-col mx-2 ">
            <p className="text-md md:text-xl lg:text-xl font-bold py-4">
              Address
            </p>
            <p className="py-2">1234 Bay Ln, City</p>
            <p>State name, 23416</p>
            <p className="py-2">9:00 AM - 12:00 PM</p>
          </div>
         </div>
          
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-8">
            <FaFacebookF className="lightBg rounded-full p-4" size={60} />
            <FaInstagram className="lightBg rounded-full p-4" size={60} />
            <FaXTwitter className="lightBg rounded-full p-4" size={60} />
            <FaTiktok className="lightBg rounded-full p-4" size={60} />
          </div>
          <p >Copyright(c)2024 sitename | All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
