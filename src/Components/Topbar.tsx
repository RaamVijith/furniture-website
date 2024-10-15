import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-white w-full h-[70px] flex items-center justify-between px-[3vw] ">
      {/* Left side: Social Media Icons */}
      <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white" size={24}/>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white" size={24}/>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-white" size={24}/>
        </a>
      </div>

      {/* Center: Marquee Text */}
      <div className="relative w-[700px] h-full overflow-hidden pt-6">
        <div className="absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div>
        <div className="absolute whitespace-nowrap animate-marquee text-center text-lg">
          <span className="mx-4">Join Our Scheme And Earn Rewards!</span>
          <span className="mx-4">Free Shipping On Order Over $100</span>
          <span className="mx-4">Free Shipping On Order Over $100</span>

        </div>
      </div>

      {/* Right side: Static Text */}
      <div className="flex items-center">
        <span className="mr-2">INR</span>
        <span>₹</span>
      </div>
    </div>
  );
};

export default TopBar;
