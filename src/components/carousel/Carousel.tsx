import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import carouselData from "../../../data/carousel.json";
import CategoryRect from "../../assets/HomeAssets/Category Rectangle.png";
import { Rate } from "antd";
import "swiper/css";
type CarouselTypes = {
  image: string;
  price: number;
  id: number;
  title: string;
  firstPrice: number;
  defValue: number;
};
const Carousel = () => {
  return (
    <React.Fragment>
      <div className="mx-[5%]">
        <div className="flex flex-col gap-3 font-Monseratt pb-5">
          <div className="flex items-center gap-2">
            <img src={CategoryRect} alt="Category Rectangle" />
            <h2 className="text-red-600 text-sm font-bold leading-3 tracking">
              Today's
            </h2>
          </div>
          <h1 className="text-3xl font-medium tracking-wide">Flash Sales</h1>
        </div>
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
                <div className="flex flex-col items-start font-Monseratt gap-2 pt-10">
                  <h1 className=" font-bold text-[14px]">{item.title}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-red-600 text-xs">${item.price}</p>
                    <p className="text-xs line-through opacity-60 text-black text-bold">
                      ${item.firstPrice}
                    </p>
                  </div>
                  <Rate allowHalf defaultValue={item.defValue} />
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
