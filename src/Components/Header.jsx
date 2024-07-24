import React, { useRef } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
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
          <img className="logo w-[120px]" src="./public/img/logo.png" alt="" />
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
            <GiHamburgerMenu className="text-3xl text-[#422675] " />
          </div>
          <button className="nav-button hidden sm:flex md:px-6 px-3 py-1.5  md:py-2 bg-[#EC642D] text-white rounded-full font-poppins">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
