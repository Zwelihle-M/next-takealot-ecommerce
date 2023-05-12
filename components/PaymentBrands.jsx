import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Visa from "../public/images/Visa-Svg.svg";
import Payflex from "../public/images/Payflex.svg";
import Payfast from "../public/images/Payfast.svg";
import Ozow from "../public/images/Ozow.svg";
import Mobicred from "../public/images/Mobicred.svg";
import MasterCard from "../public/images/MasterCard-SVG.svg";
import eBucks from "../public/images/ebucks.svg";
import DinnerClub from "../public/images/DinnersClub.svg";
import AmericanExpress from "../public/images/American-Express.svg";

export default function PaymentBrands() {
  SwiperCore.use([Autoplay]);
  const slides = [
    {
      img: AmericanExpress,
    },
    {
      img: DinnerClub,
    },
    {
      img: eBucks,
    },

    {
      img: Mobicred,
    },
    {
      img: Ozow,
    },
    {
      img: Payfast,
    },
    {
      img: Payflex,
    },
    {
      img: Visa,
    },
  ];

  return (
    <div className="bg-Takealotblue rounded-lg items-center justify-center text-center">
      <div className="hidden md:flex justify-center items-center mt-16 mb-8">
        <Swiper
          spaceBetween={150}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: false }}
        >
          {slides.map((slide, index) => (
        
              <SwiperSlide key={index}>
                <Image
                  src={slide.img}
                  alt="Logo image"
                  quality={200}
                  width={100}
                  height={64}
                  priority
                  className="mt-4 p-5"
                />
              </SwiperSlide>
           
          ))}
        </Swiper>
      </div>
    </div>
  );
}
