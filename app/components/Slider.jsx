'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Slider({ slides }) {

  // Full-size image slider logic
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  // Thumbnails slider logic
  const scrollbox = useRef();

  const scrollLeft = () => {
    scrollbox.current.scrollLeft -= 151.5;
  };

  const scrollRight = () => {
    scrollbox.current.scrollLeft += 151.5;
  };

  // Return null if problem loading slides
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='w-[90%] max-w-[1240px] mx-auto relative min-h-screen'>
      <div id='gallery' className='absolute left-0 top-[-70px]' />
      <h1 className='text-4xl font-bold text-center p-4'>Gallery</h1>

      {/* full sized image */}
      <div className='hidden sm:flex relative justify-center py-4'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
              <FaArrowCircleLeft
                className='absolute top-[50%] left-[14%] text-black/50 cursor-pointer select-none z-10'
                size={30}
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  className="h-[600px] rounded"
                  src={slide}
                  alt={index}
                  placeholder="blur"
                  draggable="false"
                  loading = 'lazy'
                  style={{ objectFit:'contain' }}
                />
              )}
              <FaArrowCircleRight
                className='absolute top-[50%] right-[14%] text-black/50 cursor-pointer select-none z-10'
                size={30}
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>

      {/* thumbnail gallery */}
      <div className='flex justify-center align-middle relative pt-2'>
        <ul ref={scrollbox} className="flex flex-nowrap gap-2 overflow-scroll scroll-smooth no-scrollbar w-[100%] sm:w-[80%] shadow-xl rounded">
          {slides.map((thumb, index) => {
            return (
              <Image
                key={`thumb-${index}`}
                className="h-96 sm:h-auto sm:w-36 opacity-100 hover:opacity-70 hover:cursor-pointer rounded"
                src={thumb}
                alt={index}
                placeholder="blur"
                draggable="false"
                loading = 'lazy'
                style={{ objectFit:'cover' }}
                onClick={() => setCurrent(index)}
              />
            );
          })}
        </ul>
      </div>

    </div>
  );
}
