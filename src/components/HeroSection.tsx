

"use client";
import React from "react";
import Image from "next/image";
import TypingAnimator from "react-typing-animator";
import Typewriter from 'typewriter-effect';





const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">

<div className="col-span-5 place-self-center mb-10 mt-5 lg:mt-10">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/portfolio.jpg"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm{" "}
          </span>{" "}
          <br></br>
    <div className="text-3xl text-red-400">
    <Typewriter
  options={{
    strings: ['HAIDER JAAFER KAREEM', 'WEB DEVELOPER','MOBILE DEVELOPER','API DEVELOPER'],
    autoStart: true,
    loop: true,
    delay: 'natural',
    
  }}
/>
    </div>
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
        
        Welcome To My Curriculum Vitae Of Programming Development 

        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
   
    </section>
  );
};

export default HeroSection;