import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import img1 from '../assets/mega-menu-img-03.jpg';

const Navbar: React.FC = () => {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleWomenDropdown = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };

  const closeWomenDropdown = () => {
    setIsWomenDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray px-[3vw]  w-full h-[100px] z-[100] pt-10">
      <div className="  flex justify-between items-center w-full  z-[100]">
        {/* Logo */}
        <div className="text-[26px] font-semibold opacity-95 text-white z-10">YOUR LOGO</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Navbar Links - Hidden on mobile, shown on medium and above */}
        <ul
          className={`flex flex-row gap-10 items-center  z-[100] ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95 text-white">HOME</li>

          {/* Women's Dropdown */}
          <li
            className="relative group cursor-pointer "
            onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}
          >
            <div className="flex flex-row  items-center hover:text-[#C96868] text-lg font-semibold opacity-95 text-white">
              <span>BRAND</span>
              <FaAngleDown />
            </div>
            {/* Dropdown */}
            {isWomenDropdownOpen && (
              <div className="absolute left-0 mt-2 border-t-[#C96868] border-t-2 w-[45vw] p-[50px] rounded-xl bg-white shadow-xl grid grid-cols-4 md:grid-cols-4 gap-4">
                {/* Clothing */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">Clothing</h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Dresses</li>
                    <li className="hover:text-[#C96868] pb-1">T-shirts</li>
                    <li className="hover:text-[#C96868] pb-1">Jeans</li>
                    <li className="hover:text-[#C96868] pb-1">Shorts</li>
                    <li className="hover:text-[#C96868] pb-1">Jumpsuits</li>
                    <li className="hover:text-[#C96868] pb-1">Active Wear</li>
                  </ul>
                </div>

                {/* Lingerie & Nightwear */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">
                    Lingerie & Nightwear
                  </h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Sleepwear</li>
                    <li className="hover:text-[#C96868] pb-1">Undershorts</li>
                    <li className="hover:text-[#C96868] pb-1">Underskirt</li>
                    <li className="hover:text-[#C96868] pb-1">Panties</li>
                    <li className="hover:text-[#C96868] pb-1">
                      All Lingerie & Nightwear
                    </li>
                  </ul>
                </div>

                {/* Ethnic Wear */}
                <div>
                  <h3 className="text-base font-[400] text-[#C96868] pb-2">Ethnic Wear</h3>
                  <ul>
                    <li className="hover:text-[#C96868] pb-1">Saree</li>
                    <li className="hover:text-[#C96868] pb-1">Kurthis</li>
                    <li className="hover:text-[#C96868] pb-1">Shalwar Material</li>
                    <li className="hover:text-[#C96868] pb-1">All Ethnic Wear</li>
                  </ul>
                </div>

                <div>
                  <img
                    src= {img1}
                    alt="fashion model"
                    className="h-[221px] w-[128px] rounded-md shadow-sm"
                  />
                </div>
              </div>
            )}
          </li>

          <li className="hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95"  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row  items-center hover:text-[#C96868] text-white">
              <span>SHOP</span>
              <FaAngleDown />
            </div>
          </li>

          <li className="hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95"  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row text-white items-center hover:text-[#C96868]">
              <span>COLLECTION</span>
              <FaAngleDown />
            </div>
          </li>
          <li className="hover:text-[#C96868] cursor-pointer "  onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}>
            <div className="flex flex-row text-white items-center hover:text-[#C96868] text-lg font-semibold opacity-95">
              <span>CONTACT US</span>
              <FaAngleDown />
            </div>
          </li>
         
          <li className="hover:text-[#C96868] cursor-pointer text-lg text-white font-semibold opacity-95">ABOUT US</li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden md:flex space-x-4 items-center">
      
          <button className="p-2 text-white font-semibold opacity-95 z-10"><FiUser size={28} /></button>
          <button className="p-2 text-white font-semibold opacity-95 z-10"><FiHeart size={28}/></button>
          <button className="p-2 text-white font-semibold opacity-95 z-10"><CgShoppingCart size={28} color="white"/> </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="block md:hidden space-y-4 mt-4 text-center">
          <li className="hover:text-[#C96868] cursor-pointer">Home</li>
          <li className="hover:text-[#C96868] cursor-pointer">Women's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Men's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Kids</li>
          <li className="hover:text-[#C96868] cursor-pointer">Accessories</li>
          <li className="hover:text-[#C96868] cursor-pointer">Offers</li>
          <li className="hover:text-[#C96868] cursor-pointer">About Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
