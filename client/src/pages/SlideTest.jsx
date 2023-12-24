import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import p1 from "../assets/1.jpg";

export default function SlideTest() {
  SwiperCore.use([Navigation]);
  const urlMap = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/201/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/202/300",
    "https://picsum.photos/200/302",
  ];
  return (
    <div className="myclass">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
      >
        {urlMap.map((url) => {
          return (
            <SwiperSlide key={url}>
              <img src={url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
