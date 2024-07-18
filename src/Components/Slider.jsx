import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="w-[1280px] mx-auto pb-20">
        <h1 className="font-semibold text-4xl font-poppins text-[#422675] pb-5">AGAHE’s Contribution To <span className="text-[#e96f2d]">SDGs</span></h1>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          slidesPerView={7} 
          loop={true} 
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false, 
          }}
        >
          <SwiperSlide><img src="./public/img/asset 7.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 6.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 5.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 4.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 3.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 2.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 1.png" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./public/img/asset 7.png" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
