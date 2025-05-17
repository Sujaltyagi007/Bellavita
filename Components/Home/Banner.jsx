import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default function Banner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide2</SwiperSlide>
        <SwiperSlide>Slide3</SwiperSlide>
      </Swiper>
    </div>
  );
}
