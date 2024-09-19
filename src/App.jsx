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
      <div className="bg-[url('/public/img/bgsection1.png')] bg-no-repeat md:bg-cover bg-auto bg-center  h-[90vh]  flex justify-center items-center border-t-2 border-[#422675]">
        <div className="main-section md:w-[1280px] w-[95%] mx-auto flex flex-col gap-0">
          <h1 className="text-[#ec642d] font-semibold text-[32px]  font-poppins">
            CHARITY IS PRIORITY
          </h1>
          <h1 className="text-[#422675] font-extrabold md:text-[85px] sm:text-7xl text-5xl font-poppins md:leading-[80px] md:-mb-6 ">
            GIVING HELP
          </h1>
          <h1 className="text-[#ec642d] md:text-[62px] md:text-5xl text-3xl font-bold sm:mt-4">
            <span className="text-[#422675] sm:text-4xl text-3xl font-light font-poppins">
              TO THOSE
            </span>{" "}
            HOW NEED IT
          </h1>
          <div>
            <button className="mt-2 md:mt-0 px-6 py-2 bg-[#422675] text-white rounded-full font-poppins">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <About />
      {/* <div className="border-[2px] rounded-full border-black w-[20px] h-[20px] flex justify-center items-center">
        <div className="w-[5px] h-[5px] bg-red-500 rounded-full"></div>
      </div> */}
      {/* <div className=" overflow-hidden scroll-animate">
        <h1 className="text-[30vw] uppercase font-poppins font-semibold text-[#ec642d]">
          Agahi<span className="text-[#422675]">Donation</span>
        </h1>
      </div> */}
      <Slider />
      <div className="md:w-[1280px] w-[95%] flex sm:flex-row flex-col mx-auto md:h-[90vh] sm:h-[40vh]  h-[85vh]">
        <div className="md:w-[48%] sm:w-[60%] w-full md:pt-10">
          <h1 className="md:text-4xl text-2xl font-semibold text-[#e96f2d] font-poppins">
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
        <div className="md:w-[52%] sm:w-[40%] w-full">
          <img
            className="max-w-[100%] md:-ml-[230px] ml-0"
            src="/img/asset 8.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#F6F4F8] areabg bg-contain bg-center bg-no-repeat">
        <div className="md:w-[1280px] w-[95%] mx-auto flex flex-col sm:h-[110vh] h-auto justify-between py-7">
          <div>
            <h1 className="font-poppins font-semibold text-[#422675] md:text-5xl text-4xl pt-4 text-center mb-5">
              Thematic{" "}
              <span className=" text-[#e96f2d] font-extrabold">Areas</span>
            </h1>
          </div>
          <div>
            <div className="flex sm:flex-row flex-col mx-5 sm:mx-0 ">
              <div className="sm:w-[33%] w-full flex flex-col sm:gap-16 gap-8">
                <div
                  style={{
                    backgroundImage: "url('/img/asset 27.png')",
                  }}
                  className="bg-[#407F46] boxShadow transition-all duration-200 flex sm:flex-row flex-col  sm:gap-4 gap-0 items-center sm:items-start px-5 py-[10px]  bg-no-repeat bg-right bg-contain border-[1px] border-[#b1ddb7] "
                >
                  <img
                    className="md:w-[18%] w-[10%]"
                    src="/img/asset 9.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Disaster Risk Resilience & Climate Change
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('/img/asset 28.png')",
                  }}
                  className="bg-[#C5192D] boxShadow transition-all duration-200 flex sm:flex-row flex-col   px-5 md:py-[10px] sm:py-4 py-2 sm:gap-4  gap-0 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#6f0b17]"
                >
                  <img
                    className="md:w-[12%] w-[10%]"
                    src="/img/asset 10.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Quality Education
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('/img/asset 29.png')",
                  }}
                  className="bg-[#4C9F38] boxShadow transition-all duration-200 flex sm:flex-row flex-col px-5 md:py-[10px] py-1 sm:gap-4 gap-0 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#215914]"
                >
                  <img
                    className="max-w-[13%]"
                    src="/img/asset 11.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Health & Nutrition
                  </h1>
                </div>
              </div>
              <div className="sm:w-[33%] w-full sm:my-0  my-10 mt flex justify-center items-center md:px-11 px-5">
                <div className="flex flex-col justify-start items-center text-center border-[2px] border-[#407f46] rounded-full md:px-7 px-5  md:py-16 sm:py-3 py-14 bg-[#F6F4F8] ">
                  <img
                    className="w-[30%] md:w-[25%]"
                    src="/img/asset 12.png"
                    alt=""
                  />
                  <h1 className="font-poppins md:text-xl text-sm text-[#407f46] font-medium">
                    Disaster Risk Resilience & Climate Change
                  </h1>
                  <h1 className="font-semibold md:text-4xl text-3xl text-[#407f46] font-poppins">
                    84,692 <br />
                    <span className="text-xl font-normal">PEOPLE</span>
                  </h1>
                </div>
              </div>
              <div className="sm:w-[33%] w-full flex flex-col sm:gap-16 gap-8">
                <div
                  style={{
                    backgroundImage: "url('/img/asset 30.png')",
                  }}
                  className="bg-[#26BDE2] flex sm:flex-row flex-col  px-5 sm:py-[10px] py-2 sm:gap-4 gap-0  bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#1787a3] boxShadow transition-all duration-200"
                >
                  <img
                    className="max-w-[13%]"
                    src="/img/asset 13.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Water, Sanitation, and Hygiene (WASH)
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('/img/asset 31.png')",
                  }}
                  className="bg-[#136A9F] flex sm:flex-row flex-col  px-5 md:py-[10px] sm:py-4 sm:gap-4 py-1 gap-0 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#0f4f76] boxShadow transition-all duration-200"
                >
                  <img
                    className="w-[11%]"
                    src="/img/asset 14.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Governance
                  </h1>
                </div>
                <div
                  style={{
                    backgroundImage: "url('/img/asset 29.png')",
                  }}
                  className="bg-[#58BA47] flex sm:flex-row flex-col  px-5 md:py-[10px] sm:py-4 sm:gap-4 gap-0  bg-no-repeat py-1 bg-right bg-contain items-center border-[1px] border-[#37782CFF] boxShadow transition-all duration-200"
                >
                  <img
                    className="w-[13%]"
                    src="/img/asset 15.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Health & Nutrition
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-10 mx-5">
              <div className="sm:w-[32%] w-full">
                <div
                  style={{
                    backgroundImage: "url('/img/asset 30.png')",
                  }}
                  className="bg-[#DDA83A] flex sm:flex-row flex-col  px-5 md:py-[10px] sm:gap-4 gap-0 py-1 bg-no-repeat bg-right bg-contain items-center border-[1px] border-[#86621A] boxShadow transition-all duration-200"
                >
                  <img
                    className="max-w-[13%]"
                    src="/img/asset 16.png"
                    alt=""
                  />
                  <h1 className="md:text-xl text-sm text-white md:font-medium font-normal font-poppins md:leading-6">
                    Food Safety & Security
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[1280px] w-[95%] mx-auto py-10 flex flex-col sm:flex-row gap-5 sm:items-center">
        <div className="sm:w-[28%]">
          <h1 className="md:text-4xl text-3xl font-semibold text-[#422675] font-poppins">
            Cross <br />
            Cutting <span className="text-[#e96f2d]">Themes</span>
          </h1>
        </div>
        <div className=" flex flex-col sm:w-[24%] w-full">
          <img
            className="md:px-20 sm:px-5 px-28 md:py-7 py-3 border-[2px] border-[#422675]"
            src="/img/asset 37.svg"
            alt=""
          />
          <h1 className="bg-[#422675] font-poppins md:text-2xl sm:text-xs text-lg font-semibold px-[10px] py-[10px] text-white text-center ">
            Equity And Inclusion
          </h1>
        </div>
        <div className=" flex flex-col sm:w-[24%] w-full">
          <img
            className="md:px-20 sm:px-8 px-28 md:py-4 py-3 border-[2px] border-[#E96F2D]"
            src="/img/asset 38.svg"
            alt=""
          />
          <h1 className="bg-[#E96F2D] font-poppins md:text-2xl sm:text-xs text-lg font-semibold px-[10px] py-[10px] text-white text-center">
            Enviroment
          </h1>
        </div>
        <div className=" flex flex-col sm:w-[24%] w-full">
          <img
            className="md:px-20 sm:px-5 px-28 md:py-7 py-3 border-[2px] border-[#422675]"
            src="/img/asset 39.svg"
            alt=""
          />
          <h1 className="bg-gradient-to-r from-[#E96F2D] to-[#422675] font-poppins md:text-2xl sm:text-xs text-lg font-semibold px-[10px] py-[10px] text-white text-center">
            Gender
          </h1>
        </div>
      </div>
      <div className=" bg-[#F6F4F8] pb-10">
        <div className="md:w-[1280px] w-[95%] mx-auto py-10">
          <div className="flex justify-between items-center">
            <h1 className="font-poppins font-semibold text-[#422675] md:text-4xl text-2xl pt-4">
              Latest News &{" "}
              <span className=" text-[#e96f2d] font-extrabold">EVENTS</span>
            </h1>
            <button className="px-5 py-1 rounded-full text-white font-poppins text-sm font-medium bg-[#e96f2d]">
              View All
            </button>
          </div>
          <div className=" flex flex-wrap gap-6  md:gap-8  pt-5">
            <div className="sm:w-[48%] w-full flex border-[2px] border-[#422477]">
              <div className="w-[50%]">
                <img
                  className="w-[100%] h-[100%]"
                  src="/img/asset17.png"
                  alt=""
                />
              </div>
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3">
                <h1 className="text-[#422477] font-medium md:text-xl text-base">
                  HAPPY WORLD NGO DAY!{" "}
                </h1>
                <p className="text-[#422477] font-medium text-sm">
                  10/06/2024 10:16 am
                </p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="sm:w-[48%] w-full flex">
              <div className="w-[50%]">
                <img
                  className="w-[100%] h-[100%]"
                  src="/img/asset 19.png"
                  alt=""
                />
              </div>
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3 py-3">
                <h1 className=" font-medium md:text-xl text-base">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
            <div className="sm:w-[48%] w-full flex">
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3 py-2">
                <h1 className=" font-medium md:text-xl text-base">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-[100%] h-[100%]"
                  src="/img/asset 18.png"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:w-[48%] w-full flex">
              <div className="w-[50%]  bg-white flex flex-col justify-center px-3 py-2">
                <h1 className=" font-medium md:text-xl text-base">HAPPY WORLD NGO DAY! </h1>
                <p className=" font-medium text-sm">10/06/2024 10:16 am</p>
                <p className="font-light text-[13px] font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
              <div className="w-[50%]">
                <img
                  className="w-[100%] h-[100%]"
                  src="/img/asset 20.png"
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
