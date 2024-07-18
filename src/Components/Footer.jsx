import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#17033B] footerbg bg-contain bg-no-repeat bg-left-bottom">
        <div className="w-[1280px] mx-auto">
        <div className=" flex border-b-[2px] border-[#4949495E]">
          <div className="w-[33%] pt-5 pr-10">
            <img src="./public/img/logo.png" alt="" />
            <p className="text-sm font-poppins text-white leading-6 pt-5">
              Association for Gender Awareness and Human Empowerment (AGAHE) is
              a Non-Government Social Development Organization established in
              2007, registered under the Societies Act, 1860 at the Punjab
              Province level.
            </p>
          </div>
          <div className="w-[33%] pt-7 pl-5">
            <h1 className="font-bold text-sm text-white font-poppins  pt-5">
              For Information & Queries
            </h1>
            <div className="flex justify-start items-center gap-3 pt-3">
              <img src="./public/img/asset 40.svg" alt="" />
              <h1 className="text-sm font-poppins text-white">
                info@agahe.org.pk
              </h1>
            </div>
            <h1 className="font-bold text-sm text-white font-poppins  pt-12">
              For For Suggestions & Complaints
            </h1>
            <div className="flex justify-start items-center gap-3 pt-5">
              <img src="./public/img/asset 41.svg" alt="" />
              <h1 className="text-sm font-poppins text-white">
                complaints@agahe.org.pk
              </h1>
            </div>
            <div className="flex justify-start items-center gap-3 pt-5">
              <img src="./public/img/asset 42.svg" alt="" />
              <h1 className="text-sm font-poppins text-white">0332-3030022</h1>
            </div>
            <div className="flex justify-start items-center gap-3 pt-5">
              <img src="./public/img/asset 43.svg" alt="" />
              <h1 className="text-sm font-poppins text-white">042-35957916</h1>
            </div>
          </div>
          <div className="w-[30%] pt-5 bg-[#E96F2D] p-10 ml-10 -mt-16">
            <h1 className="font-poppins font-semibold text-2xl text-white">
              Get In tuch
            </h1>
            <form className="pt-3 flex flex-col gap-3">
              <div className="">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300  w-full p-3"
                  required
                />
              </div>
              <div className="">
                <input
                  type="tel"
                   placeholder="Phone Number"
                  className="border border-gray-300  w-full p-3"
                  required
                />
              </div>
              <div className="">
                <input
                  type="email"
                   placeholder="Email"
                  className="border border-gray-300  w-full p-3"
                  required
                />
              </div>
              <div className="">
                <textarea
                  id="message"
                  name="message"
                   placeholder="Message"
                  className="border border-gray-300  w-full p-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#422477] text-white  py-[10px] px-4 font-poppins font-medium"
              >
                Sumbit
              </button>
            </form>
          </div>
        </div>
        <div className=" flex justify-between items-center py-2">
            <h1 className="text-white font-poppins text-sm">Copyrights © 2024 All Rights Reserved</h1>
            <h1 className="text-white font-poppins text-sm">Powered by Websouls</h1>
        </div>

        </div>
      </div>
    </>
  );
}