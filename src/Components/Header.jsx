import React, { useRef } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() { 
  gsap
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".socialicon > span", {
      x:40,
      opacity:0,
      duration:1,
      stagger:0.3,
    });
    tl.from(".logo", {
      y:-30,
      opacity:0,
      duration:1,
      stagger:0.3,
    });
    tl.from(".nav>li", {
      y:-30,
      opacity:0,
      duration:1,
      stagger:0.3,
    });
  });

  return (
    <>
      <div className="bg-[#FFFAF8] py-1">
        <div
        
          className="socialicon flex gap-3 text-2xl justify-end w-[1280px] mx-auto px-20"
        >
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
      <div className=" w-[1280px] mx-auto flex justify-between items-center">
        <div>
          <img className="logo w-[120px]" src="./public/img/logo.png" alt="" />
        </div>
        <div className="flex gap-10 items-center">
          <ul className="nav font-poppins flex font-medium text-lg text-[#422675] gap-10">
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
          <button className="nav-button px-6 py-2 bg-[#EC642D] text-white rounded-full font-poppins">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
