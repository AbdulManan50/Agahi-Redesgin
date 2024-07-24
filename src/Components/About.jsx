import React from "react";

export default function About() {
  return (
    <>
      <div className="md:w-[1280px] sm:w-[95%] w-full  mx-auto flex flex-col sm:flex-row -mt-[90px] pb-10 flex-wrap ">
        <div className="sm:w-1/2 w-full bg-white md:p-10 p-5 border-[2px] border-[#ec642d]">
          <h1 className="text-[#ec642d] font-poppins font-semibold text-2xl sm:text-left text-center">
            <span className="text-[#422675]">ABOUT</span> US
          </h1>
          <p className="font-poppins font-light text-base sm:text-left text-center">
            Association for Gender Awareness and Human Empowerment (AGAHE) is a
            Non-Government Social Development Organization established in 2007,
            registered under the Societies Act, 1860 at the Punjab Province
            level.
          </p>
          <div className="flex flex-col sm:flex-row items-center  md:gap-5 gap-2 pt-5">
            <div className="w-[18%]">
              <img
                className="w-[345px] md:p-5 p-2 border-[2px] border-[#D4D4D4]"
                src="./public/img/vision.svg"
                alt=""
              />
            </div>
            <div className="sm:w-[82%] w-full text-center sm:text-left">
              <h1 className="text-[#ec642d] font-poppins font-semibold md:text-2xl text-xl">
                <span className="text-[#422675]">Our</span> Vision
              </h1>
              <p className="font-poppins  font-light text-base">
                To create an enabling environment for vulnerable segments of
                society, where they can utilize their full potential for
                improvement in their lives and have equal opportunities to
                safeguard their rights.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center  md:gap-5 gap-2 pt-5">
            <div className="w-[18%]">
              <img
                className="w-[350px] md:p-5 py-2 px-1 border-[2px] border-[#D4D4D4]"
                src="./public/img/mission.png"
                alt=""
              />
            </div>
            <div className="m:w-[82%] w-full text-center sm:text-left">
              <h1 className="text-[#ec642d] font-poppins font-semibold md:text-2xl text-xl">
                <span className="text-[#422675]">Our</span> Mission
              </h1>
              <p className="font-poppins  font-light text-base">
                To optimize the intangible resources of individuals,
                organizations, and institutions to achieve maximum efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full md:p-10 p-5 bg-[#E96F2D]">
          <div className="flex md:gap-5 gap-2 justify-center md:items-center items-start pb-10">
            <div className="w-[18%] md:-mt-10 mt-7">
              <img
                className="w-[350px] md:p-5 p-2 border-[1px] border-white"
                src="./public/img/Vector.svg"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="font-bold md:text-xl text-lg tracking-widest text-white font-poppins">
                GOLAS
              </h1>
              <ul className="font-normal list-disc text-white font-poppins text-[14px] pl-5 pb-3">
                <li>
                  Social development of marginalized communities through
                  mobilization, group formation, and capacity development.
                </li>
                <li>
                  Improve participation and representation of marginalized
                  communities in local governance systems, structures, and other
                  policy forums.
                </li>
              </ul>
              <button className="md:px-7 px-4 md:py-2 py-1 border-[2px] border-white rounded-full font-poppins text-white text-[13px]">
                Read More
              </button>
            </div>
          </div>
          <div className="flex md:gap-5 gap-2 justify-center md:items-center items-start pb-10">
            <div className="w-[18%] md:-mt-10 mt-7">
              <img
                className="w-[350px] md:p-5 p-2 border-[1px] border-white"
                src="./public/img/object.svg"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="font-bold md:text-xl text-lg tracking-widest text-white font-poppins">
                OBJECTIVES
              </h1>
              <ul className="font-normal list-disc text-white font-poppins text-[14px] pl-5 pb-3">
                <li>
                  To bring positive behavioral change amongst the community
                  through awareness programs
                </li>
                <li>
                  To help children get a better education and play an active
                  role in the social development process.
                </li>
              </ul>
              <button className="md:px-7 px-4 md:py-2 py-1 border-[2px] border-white rounded-full font-poppins text-white text-[13px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
