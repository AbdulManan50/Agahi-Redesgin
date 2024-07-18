import React from "react";

export default function About() {
  return (
    <>
      <div className="w-[1280px] mx-auto flex -mt-[90px] pb-10">
        <div className="w-[50%] bg-white p-10 border-[2px] border-[#ec642d]">
          <h1 className="text-[#ec642d] font-poppins font-semibold text-2xl">
            <span className="text-[#422675]">ABOUT</span> US
          </h1>
          <p className="font-poppins font-light text-base">
            Association for Gender Awareness and Human Empowerment (AGAHE) is a
            Non-Government Social Development Organization established in 2007,
            registered under the Societies Act, 1860 at the Punjab Province
            level.
          </p>
          <div className="flex gap-5 pt-5">
            <div className="w-[18%]">
              <img
                className="w-[350px] p-5 border-[2px] border-[#D4D4D4]"
                src="./public/img/vision.svg"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="text-[#ec642d] font-poppins font-semibold text-2xl">
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
          <div className="flex gap-5 pt-5">
            <div className="w-[18%]">
              <img
                className="w-[350px] p-5 border-[2px] border-[#D4D4D4]"
                src="./public/img/mission.png"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="text-[#ec642d] font-poppins font-semibold text-2xl">
                <span className="text-[#422675]">Our</span> Mission
              </h1>
              <p className="font-poppins  font-light text-base">
                To optimize the intangible resources of individuals,
                organizations, and institutions to achieve maximum efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-10 bg-[#E96F2D]">
          <div className="flex gap-5 justify-center items-center pb-10">
            <div className="w-[18%] -mt-10">
              <img
                className="w-[350px] p-5 border-[2px] border-white"
                src="./public/img/Vector.svg"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="font-bold text-xl text-white font-poppins">
                GOLAS
              </h1>
              <ul className="font-normal list-disc text-white font-poppins text-[14px] pl-5 pb-3">
                <li>
                  Social development of marginalized communities through
                  mobilization, group formation, and capacity development.
                </li>
                <li>
                Improve participation and representation of marginalized communities in local governance systems, structures, and other policy forums.
                </li>
              </ul>
                <button className=" px-7 py-2 border-[2px] border-white rounded-full font-poppins text-white text-[13px]">Read More</button>
    
            </div>

          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="w-[18%] -mt-10">
              <img
                className="w-[350px] p-5 border-[2px] border-white"
                src="./public/img/object.svg"
                alt=""
              />
            </div>
            <div className="w-[82%]">
              <h1 className="font-bold text-xl text-white font-poppins">
              OBJECTIVES
              </h1>
              <ul className="font-normal list-disc text-white font-poppins text-[14px] pl-5 pb-3">
                <li>
                To bring positive behavioral change amongst the community through awareness programs
                </li>
                <li>
                To help children get a better education and play an active role in the social development process. 
                </li>
              </ul>
                <button className=" px-7 py-2 border-[2px] border-white rounded-full font-poppins text-white text-[13px]">Read More</button>
    
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
