import React from "react";
import MsiGe66Raider from "../public/images/MSI_GE66_Raider.png";
import Image from "next/image";
import HeroGradient from "./HeroGradient";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 rel ">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 ">
        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 text-5xl xs:text-5xl sm:text-6xl md:text-7xl">
            <span className="block bg-gradient-to-bl from-[#647DEE] to-[#7F53AC] text-transparent bg-clip-text">
              Welcome
            </span>
            <span className="mr-2"></span>

            <span className="block">To Takealot</span>
          </h1>
        </div>
        <div
          className="space-x-8 mt-8 "
          style={{
            zIndex: -1,
          }}
        >


            
        </div>
        <button className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium  transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 "
        style={{
          zIndex:-1
        }}>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-Takealotblue via-ElectricPurple to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-sky-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Shop now</span>
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 ">
        <Image
          src={MsiGe66Raider}
          alt="Fortnite Hero Image"
          width={900}
          height={900}
          quality={100}
          style={{ objectFit: "contain" }}
          priority
        />
        <div className="hidden md:flex">
          <HeroGradient />
        </div>
      </div>
    </section>
  );
};

export default Hero;
