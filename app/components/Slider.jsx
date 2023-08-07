'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Slider({ slides }) {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='w-[1240px] mx-auto relative'>
      <div id='gallery' className='absolute left-0 top-[-70px]' />
      <h1 className='text-4xl font-bold text-center p-4'>Gallery</h1>
      {/* thumbnail gallery */}
      <div className='flex justify-center align-middle'>
        <ul id="scrollboxPending" className="flex flex-nowrap overflow-scroll scroll-smooth scrollbar-hide w-1/3">
          {slides.map((thumb, index) => {
            return (
              <Image
                key={`thumb-${index}`}
                className="h-24 w-24"
                src={thumb}
                alt={index}
                placeholder="blur"
                draggable="false"
                style={{ objectFit:'cover' }}
              />
            );
          })}
        </ul>
      </div>

      {/* full sized image */}
      <div id='gallery' className='relative flex justify-center p-8'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
              <FaArrowCircleLeft
                className='absolute top-[50%] left-[6%] text-white/70 cursor-pointer select-none z-10'
                size={30}
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  className="max-h-[800px]"
                  src={slide}
                  alt={index}
                  placeholder="blur"
                  draggable="false"
                  style={{ objectFit:'cover' }}
                />
              )}
              <FaArrowCircleRight
                className='absolute top-[50%] right-[6%] text-white/70 cursor-pointer select-none z-10'
                size={30}
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
