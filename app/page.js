"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const slideInterval = useRef(null);
  const slideContainerRef = useRef(null);


  const images = [
    '/images/air.png',
    '/images/air.png',
    '/images/air.png',
    '/images/air.png',
    '/images/air.png'
  ];

  const updateSlidesToShow = () => {
    if (window.innerWidth > 1200) {
      setSlidesToShow(4);
    } else if (window.innerWidth > 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const showSlides = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const startSlideInterval = () => {
    slideInterval.current = setInterval(showSlides, 3000);
  };

  const moveSlide = (n) => {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex >= images.length) newIndex = 0;
      if (newIndex < 0) newIndex = images.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    startSlideInterval();
    return () => clearInterval(slideInterval.current);
  }, []);

  const handleMouseOver = () => {
    clearInterval(slideInterval.current);
  };

  const handleMouseOut = () => {
    startSlideInterval();
  };


  const containerWidth = 100 * images.length / slidesToShow;
  const translateX = -(slideIndex * (10 / slidesToShow));

  return (
    <main >

      <section className="flex px-4 py-6  md:px-4 min-h-[80vh] lg:justify-between lg:flex-row   flex-col justify-center items-start gap-8">
        <div className="flex flex-col items-start justify-center gap-12 flex-1" >
          <h1 className={"text-4xl font-bold " + poppins.className}>MUSTCON'24</h1>
          <h3 className={"text-2xl font-bold " + poppins.className}>Kashmir's largest technical Olympiad</h3>
          <p className={"text-lg font-medium " + poppins.className}>Air Tech ' 24 is designed to be the largest Technical Olympiad of Pakistan. It will encourage the practical implementation of engineering and applied sciences through a range of technical events in the fields of mechatronics, mechanical, electrical, computer sciences & applied sciences.</p>
          <div className="flex flex-row items-center justify-between lg:justify-start gap-4">
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-xl  font-medium px-4 lg:px-12 py-2 lg:py-4  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
            <Link href={'/'} className='text-md whitespace-nowrap lg:text-xl   font-medium px-4 lg:px-12 py-2 lg:py-4  rounded-md transition-all duration-300 bg-white text-slate-900 border-slate-900 border  hover:bg-white  hover:text-slate-900'>
              Register
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-center items-center">
          <img src="/images/dev.svg" className="w-full max-w-[500px]" />

        </div>

      </section>


      <section className="text-center my-8 w-full">
        <h6 className={"text-[#0e1d3d7e] w-full font-bold " + poppins.className}>COMPETITIION CATEGORIES</h6>
        <h1 className={"text-5xl font-bold w-full my-2 " + poppins.className}>Seven Competition Categories</h1>


        <div className="flex flex-wrap flex-col lg:flex-row my-8 justify-center gap-4 px-4 relative">
          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/robot-illustration.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Robotics</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>

          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/computer-illustration.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Computer Science</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>
          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/mechanical-illustration.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Mechanical</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>

          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/pcb-illustration.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Electrical</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>

          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/solar.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Physics</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>

          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/math-illustration.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Mathematics</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>

          <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" w-24 rounded-full" src="/icons/sports.svg" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>ESports</p>
            <Link href={'/events'} className='text-md whitespace-nowrap lg:text-md  font-medium px-4 lg:px-8 py-2 lg:py-3  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
              View Events
            </Link>
          </div>




        </div>

      </section>



      <section className="partnerships">
        <div className="partnerships-header">
          <h4>OUR PARTNERSHIPS</h4>
          <h1>Corporate Partnerships</h1>
          <div className="partnership-showcase-shape-1">
            <img src="Images/shape.png" width="40px" alt="shape" />
          </div>

        </div>
        <div className="slider" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div
            className="slider-container"
            style={{
              width: `${containerWidth}%`,
              transform: `translateX(${translateX}%)`
            }}
            ref={slideContainerRef}
          >
            {images.map((src, index) => (
              <div className="slide" key={index} style={{ width: `${100 / slidesToShow}%` }}>
                <img src={src} alt={`Partner ${index + 1}`} width="100%" />
              </div>
            ))}
          </div>
        </div>
        <div className="slider-buttons">
          <button className="prev" onClick={() => moveSlide(-1)}>❮</button>
          <button className="next" onClick={() => moveSlide(1)}>❯</button>
        </div>
      </section>
    </main>
  );
}
