import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper 
      style={{ height: "100vh" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="" style={{ width: "100%", height: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" style={{ width: "100%", height: "100%" }} /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" style={{ width: "100%", height: "100%" }} /></SwiperSlide>
      </Swiper>
    </>
  );
}