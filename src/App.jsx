import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function App() {
  gsap;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".main-section>h1", {
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    tl.from(".main-section-btn", {
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    tl.to(".scroll-animate > h1", {
      transform: "translateX(-160%) ",
      duration: 1,
      scrollTrigger: {
        trigger: ".scroll-animate > h1",
        scroller: "body",
        start: "top 10%",
        end: "top -200%",
        scrub: true,
        pin: true,
      },
    });
  });
  return (
    <>
      <Header />
      <div className="bgsection1 h-[90vh] flex justify-center items-center border-t-2 border-[#422675]">
        <div className="main-section w-[1280px] mx-auto flex flex-col gap-0">
          <h1 className="text-[#ec642d] font-semibold text-[32px] font-poppins">
            CHARITY IS PRIORITY
          </h1>
          <h1 className="text-[#422675] font-extrabold text-[85px] font-poppins leading-[80px] -mb-6">
            GIVING HELP
          </h1>
          <h1 className="text-[#ec642d] text-[62px] font-bold">
            <span className="text-[#422675] text-4xl font-light font-poppins">
              TO THOSE
            </span>{" "}
            HOW NEED IT
          </h1>
          <div>
            <button className="main-section-btn px-6 py-2 bg-[#422675] text-white rounded-full font-poppins">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <About />
      <div className="border-[2px] rounded-full border-black w-[20px] h-[20px] flex justify-center items-center">
        <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
      </div>
      <div className=" overflow-hidden scroll-animate">
        <h1 className="text-[30vw] uppercase font-poppins font-semibold text-[#ec642d]">
          Agahi<span className="text-[#422675]">Donation</span>
        </h1>
      </div>
      <Slider />
      <div className="w-[1280px] flex mx-auto h-[90vh]">
        <div className="w-[48%] pt-10">
          <h1 className="text-4xl font-semibold text-[#e96f2d] font-poppins">
            <span className="text-[#422675]">Geographical</span> Outreach
          </h1>
          <p className="font-poppins text-[15px] leading-[30px] pt-5">
            AGAHE has been operating in Khyber Pakhtunkhwa, Sindh, and Punjab.{" "}
            <br />
            The map below highlights the specific districts within Punjab <br />
            <b>Grey areas:</b> Previously worked <br />
            <b>Grey areas:</b> Currently working
          </p>
        </div>
        <div className="w-[52%]">
          <img
            className="max-w-[140%] -ml-[230px]"
            src="./public/img/asset 8.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#F6F4F8] areabg bg-contain bg-center">
        <div className="w-[1280px] mx-auto flex flex-col h-[110vh] justify-between py-7">
          <div>
            <h1 className="font-poppins font-semibold text-[#422675] text-5xl pt-4 text-center">
              Thematic
              <span className=" text-[#e96f2d] font-extrabold">Areas</span>
            </h1>
          </div>
          <div>
            <div className=" flex">
              <div className="w-[33%] flex flex-col gap-16 ">
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 27.png')",
                  }}
                  className="bg-[#407F46] boxShadow transition-all duration-200 flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain border-[1px] border-[#b1ddb7]"
                >
                  <img
                    className="w-[18%]"
                    src="./public/img/asset 9.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Disaster Risk Resilience & Climate Change
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 28.png')",
                  }}
                  className="bg-[#C5192D] boxShadow transition-all duration-200 flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#6f0b17]"
                >
                  <img
                    className="w-[13%]"
                    src="./public/img/asset 10.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Quality Education
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 29.png')",
                  }}
                  className="bg-[#4C9F38] boxShadow transition-all duration-200 flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#215914]"
                >
                  <img
                    className="max-w-[13%]"
                    src="./public/img/asset 11.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Health & Nutrition
                  </h1>
                </div>
              </div>
              <div className="w-[33%] flex justify-center items-center px-11">
                <div className="flex flex-col justify-start items-center text-center border-[2px] border-[#407f46] rounded-full px-7 py-16 bg-[#F6F4F8] ">
                  <img src="./public/img/asset 12.png" alt="" />
                  <h1 className="font-poppins text-xl text-[#407f46] font-medium">
                    Disaster Risk Resilience & Climate Change
                  </h1>
                  <h1 className="font-semibold text-4xl text-[#407f46] font-poppins">
                    3,051, 020 <br />
                    <span className="text-xl font-normal">
                      PEOPLE SUPPORTED
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-[33%] flex flex-col gap-16">
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 30.png')",
                  }}
                  className="bg-[#26BDE2] flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#1787a3] boxShadow transition-all duration-200"
                >
                  <img
                    className="max-w-[13%]"
                    src="./public/img/asset 13.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Water, Sanitation, and Hygiene (WASH)
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 31.png')",
                  }}
                  className="bg-[#136A9F] flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#0f4f76] boxShadow transition-all duration-200"
                >
                  <img
                    className="w-[11%]"
                    src="./public/img/asset 14.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Governance
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 29.png')",
                  }}
                  className="bg-[#58BA47] flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#37782CFF] boxShadow transition-all duration-200"
                >
                  <img
                    className="w-[13%]"
                    src="./public/img/asset 15.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Health & Nutrition
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-10">
              <div className="w-[32%]">
                <div
                  style={{
                    backgroundImage: "url('./public/img/asset 30.png')",
                  }}
                  className="bg-[#DDA83A] flex px-5 py-[10px] gap-4 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#86621A] boxShadow transition-all duration-200"
                >
                  <img
                    className="max-w-[13%]"
                    src="./public/img/asset 16.png"
                    alt=""
                  />
                  <h1 className="text-xl text-white font-medium font-poppins leading-6">
                    Food Safety & Security
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1280px] mx-auto py-10 flex gap-5 items-center">
        <div className="w-[28%]">
          <h1 className=" text-4xl font-semibold text-[#422675] font-poppins">
            Cross <br />
            Cutting <span className="text-[#e96f2d]">Themes</span>
          </h1>
        </div>
        <div className=" flex flex-col w-[24%]">
          <img
            className="px-20 py-7 border-[2px] border-[#422675]"
            src="./public/img/asset 37.svg"
            alt=""
          />
          <h1 className="bg-[#422675] font-poppins text-2xl font-semibold px-[10px] py-[10px] text-white text-center">
            Equity And Inclusion
          </h1>
        </div>
        <div className=" flex flex-col w-[24%]">
          <img
            className="px-24 py-7 border-[2px] border-[#E96F2D]"
            src="./public/img/asset 38.svg"
            alt=""
          />
          <h1 className="bg-[#E96F2D] font-poppins text-2xl font-semibold px-[10px] py-[10px] text-white text-center">
            Enviroment
          </h1>
        </div>
        <div className=" flex flex-col w-[24%]">
          <img
            className="px-20 py-7 border-[2px] border-[#422675]"
            src="./public/img/asset 39.svg"
            alt=""
          />
          <h1 className="bg-gradient-to-r from-[#E96F2D] to-[#422675] font-poppins text-2xl font-semibold px-[10px] py-[10px] text-white text-center">
            Gender
          </h1>
        </div>
      </div>
      <div className=" bg-[#F6F4F8] pb-20">
        <div className="w-[1280px] mx-auto py-10">
          <div className="flex justify-between items-center">
            <h1 className="font-poppins font-semibold text-[#422675] text-4xl pt-4">
              Latest News &{" "}
              <span className=" text-[#e96f2d] font-extrabold">EVENTS</span>
            </h1>
            <button className="px-5 py-1 rounded-full text-white font-poppins text-sm font-medium bg-[#e96f2d]">
              View All
            </button>
          </div>
          <div className=" flex flex-wrap gap-8 pt-5">
            <div className="w-[48%] flex border-[2px] border-[#422477]">
              <div className="w-[50%]">
                <img
                  className="w-[100%]"
                  src="./public/img/asset 17.png"
                  alt=""
                />
              </div>
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3">
                <h1 className="text-[#422477] font-medium text-xl">
                  HAPPY WORLD NGO DAY!{" "}
                </h1>
                <p className="text-[#422477] font-medium text-sm">
                  10/06/2024 10:16 am
                </p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim pariatur.
                </p>
              </div>
            </div>
            <div className="w-[48%] flex">
              <div className="w-[50%]">
                <img
                  className="w-[100%]"
                  src="./public/img/asset 19.png"
                  alt=""
                />
              </div>
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3">
                <h1 className=" font-medium text-xl">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim pariatur.
                </p>
              </div>
            </div>
            <div className="w-[48%] flex">
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3">
                <h1 className=" font-medium text-xl">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim pariatur.
                </p>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-[100%]"
                  src="./public/img/asset 18.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[48%] flex">
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3">
                <h1 className=" font-medium text-xl">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim pariatur.
                </p>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-[100%]"
                  src="./public/img/asset 20.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
