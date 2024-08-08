import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import carouselData from "../../../data/carousel.json";
import { Rate } from "antd";
import "swiper/css";
type CarouselTypes = {
  image: string;
  price: number;
  id: number;
  title: string;
  firstPrice: number;
};
const Carousel = () => {
  return (
    <React.Fragment>
      <div className="mx-[5%]">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {carouselData.map((item: CarouselTypes) => {
            return (
              <SwiperSlide key={item.id} className="pt-5">
                <img
                  src={item.image}
                  alt="image"
                  className="w-64 h-52 object-contain"
                />
                <div className="flex flex-col items-start font-Monseratt gap-2">
                  <h1 className=" font-bold text-[14px]">{item.title}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-red-600 text-xs">${item.price}</p>
                    <p className="text-xs">${item.firstPrice}</p>
                  </div>
                  <Rate allowHalf defaultValue={1} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
