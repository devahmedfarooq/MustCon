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
  const translateX = -(slideIndex * (20 / slidesToShow));

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





      <section className="min-h-screen flex flex-col justify-center py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2">
              <div className="mb-6">
                <h6 className={"text-[#0e1d3d7e] font-bold " + poppins.className}>Why Attend Mustcon</h6>
                <h1 className={"text-5xl font-bold my-2 " + poppins.className}>The Kashmir's largest technical Olympiad</h1>
              </div>
              <div className="mt-5 text-gray-600 ">
                <p className="text-justify">
                  <span> Mustcon will provide an opportunity to learn new concepts, improve problem-solving skills,
                    and develop familiarity with industrial automation and multi-disciplinary events.
                    It will improve the students' self-confidence, skill sets and their motivation towards technical development.
                  </span> <span>
                    Mustcon promises to be bigger and better than before. Apart from the usual technical events, the organizing team is working towards
                    some social events collections.
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex  flex-col lg:flex-row my-8 justify-between gap-4 px-4 relative">
                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/linkedin-dark.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Linkedin Page</p>
                    <Link href={"https://linkedin.com/airtech2024"} className={`${poppins.className} text-md text-slate-950 font-normal`}>linkedin.com/airtech2024</Link>
                </div>

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/phone-white.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Call Us</p>
                    <Link href={"tel:+923169322863"} className={`${poppins.className} text-md text-slate-950 font-normal`}>+92 316 9322863</Link>
                </div>

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/email.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Email</p>
                    <Link href={"mailto:ahmedfarooq.dev@gmail.com"} className={`${poppins.className} text-md text-slate-950 font-normal`}>ahmedfarooq.dev@gmail.com</Link>
                </div>

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/location.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Our Location
                    </p>
                    <Link href={"https://www.google.com/maps/dir/33.1511051,73.7382126/4PXW%2BQ2R+Mirpur+University+of+Science+and+Technology+(MUST),+College+Rd,+New+Mirpur+City,+Azad+Jammu+and+Kashmir+10250/@33.1504163,73.7362415,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391fec085ec688ef:0xd988766d3ccdd31c!2m2!1d73.7450184!2d33.149477?entry=ttu"} className={`${poppins.className} text-md text-slate-950 font-normal`}>Mirpur, AJK</Link>
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
            className="slider-container "
            style={{
              width: `${containerWidth}%`,
              transform: `translateX(${translateX}%)`
            }}
            ref={slideContainerRef}
          >
            {images.map((src, index) => (
              <div className="slide flex flex-row justify-center" key={index} style={{ width: `${100 / slidesToShow}%` }}>
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
