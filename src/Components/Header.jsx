import React, { useRef, useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="bg-[#FFFAF8] py-1">
        <div className="socialicon flex gap-3 text-2xl justify-end md:w-[1280px] w-[95%]  mx-auto md:px-20">
          <span className="text-[#3B5998]">
            <FaSquareFacebook />
          </span>
          <span className="text-[#007BB5]">
            <FaLinkedin />
          </span>
          <span>
            <FaSquareXTwitter />
          </span>{" "}
          <span className="text-[#CC181E]">
            <IoLogoYoutube />
          </span>
        </div>
      </div>
      <div className="md:w-[1280px] w-[95%]  mx-auto flex justify-between items-center">
        <div>
          <img className="logo w-[120px]" src="/img/logo.png" alt="" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="nav font-poppins md:flex font-medium text-lg text-[#422675] md:gap-10  gap-5 hidden">
            <li>
              <a href="#"></a>Home
            </li>
            <li>
              <a href="#"></a>How We Are
            </li>
            <li>
              <a href="#"></a>What We Do
            </li>
            <li>
              <a href="#"></a>Gallery
            </li>
            <li>
              <a href="#"></a>Pulications
            </li>
            <li>
              <a href="#"></a>Get Invloved
            </li>
          </ul>
          <div className="md:hidden flex">
            <GiHamburgerMenu
              className="text-3xl text-[#422675] z-50"
              onClick={toggle}
            />
          </div>
          <button className="nav-button hidden sm:flex md:px-6 px-3 py-1.5  md:py-2 bg-[#EC642D] text-white rounded-full font-poppins">
            Contact Us
          </button>
        </div>
      </div>
      <div
        className={`sm:hidden block fixed top-0 left-0 w-[80%] h-full  transform ${
          menu ? "-translate-x-[100%] overflow-hidden" : "-translate-x-0 "
        } transition-transform duration-500 z-20 bg-[#422675]`}
      >
        <ul className="nav font-poppins font-medium text-base block sm:hidden pt-[100px] text-white">
          <li className="hover:bg-[#ec642d] py-2 px-5">
            <a href="#"></a>Home
          </li>
          <li className="hover:bg-[#ec642d] py-2 px-5" >
            <a href="#"></a>How We Are
          </li>
          <li className="hover:bg-[#ec642d] py-2 px-5">
            <a href="#"></a>What We Do
          </li>
          <li className="hover:bg-[#ec642d] py-2 px-5">
            <a href="#"></a>Gallery
          </li >
          <li className="hover:bg-[#ec642d] py-2 px-5">
            <a href="#"></a>Pulications
          </li >
          <li className="hover:bg-[#ec642d] py-2 px-5">
            <a href="#"></a>Get Invloved
          </li>
        </ul>
      </div>
    </>
  );
}
