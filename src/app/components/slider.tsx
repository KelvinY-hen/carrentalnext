"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lexend } from "next/font/google";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const lexend400 = Lexend({
  weight: "400",
  subsets: ["latin"],
});

function slider() {
  return (
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </>
    );
  }

export default slider