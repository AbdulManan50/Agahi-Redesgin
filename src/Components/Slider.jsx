import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slider() {
  return (
    <>
      <div className="md:w-[1280px] w-[95%] mx-auto pb-20 relative">
        <h1 className="font-semibold text-4xl font-poppins text-[#422675] pb-5">
          AGAHE’s Contribution To <span className="text-[#e96f2d]">SDGs</span>
        </h1>
        <Swiper
        
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // breakpoints={{
          //   // when window width is >= 640px
          //   426: {
          //     slidesPerView: 3,
          //   },
          //   // when window width is >= 768px
          //   769: {
          //     slidesPerView: 5,
          //   },
          //   // when window width is >= 1024px
          //   1024: {
          //     slidesPerView: 7,
          //   },
          // }}
        >
          <SwiperSlide>
            <img src="./public/img/asset 7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./public/img/asset 7.png" alt="" />
          </SwiperSlide>

        </Swiper>
        <div className="flex gap-5 absolute sm:top-0 right-0 top-12">
            <div className="swiper-button-prev">
              <FaArrowLeft />
            </div>
            <div className="swiper-button-next">
              <FaArrowRight />
            </div>
          </div>
      </div>
    </>
  );
}
