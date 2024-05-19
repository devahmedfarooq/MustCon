"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';

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
    <main>





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
