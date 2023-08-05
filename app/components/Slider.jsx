import React from 'react';
import Image from 'next/image';

export default function Slider({ slides }) {
  return (
    <div id='gallery'>
      <h1>Gallery</h1>
      {slides.map((slide, index) => {
        return (
          <Image
            key={index}
            className="image"
            src={slide}
            alt={index}
            placeholder="blur"
            draggable="false"
            width='1440'
            height='600'
            style={{ objectFit:'cover' }}
          />
        );
      })}
    </div>
  );
}
