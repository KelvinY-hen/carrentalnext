"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lexend, Roboto } from "next/font/google";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

//images
import car1 from "../../../public/images/car1_slider.png";
import car2 from "../../../public/images/car2_slider.png";
import car3 from "../../../public/images/car3_slider.png";

const lexend300 = Lexend({
  weight: "300",
  subsets: ["latin"],
});

const roboto400 = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function slider() {
  return (
    <>
      <div className="w-full h-96 bg-[#F9F9F9]">
        <div>
          <h1 id="popular" className={`${lexend300.className}`}>
            Popular
          </h1>
        </div>
        <br/>
        <br/>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Link href="#popular">
                <Image src={car1} alt="car1" width={300} />

                <p className={`${roboto400.className}`}>
                  This car's perfect blend of style, performance, and...
                  <span className="text-[#717171]">more</span>
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#popular">
                <Image src={car2} alt="car2" width={300} />

                <p className={`${roboto400.className}`}>
                  This car's perfect blend of style, performance, and...
                  <span className="text-[#717171]">more</span>
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#popular">
                <Image src={car3} alt="car3" width={300} />

                <p className={`${roboto400.className}`}>
                  This car's perfect blend of style, performance, and...
                  <span className="text-[#717171]">more</span>
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#popular">
                <Image src={car1} alt="car1" width={300} />

                <p className={`${roboto400.className}`}>
                  This car's perfect blend of style, performance, and...
                  <span className="text-[#717171]">more</span>
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#popular">
                <Image src={car2} alt="car2" width={300} />

                <p className={`${roboto400.className}`}>
                  This car's perfect blend of style, performance, and...
                  <span className="text-[#717171]">more</span>
                </p>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default slider;
