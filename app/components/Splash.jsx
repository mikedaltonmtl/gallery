import React from 'react';
import Link from 'next/link';

export default function Splash({ heading, message }) {
  return (
    <main className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 h-screen bg-black/70 z-10' />
      <div className='p-5 text-white z-10 ml-0 sm:ml-[-10rem] mt-[-10rem]'>
        <h2 className='text-5xl font-bold hover:translate-y-[-5px] transition-all duration-300 ease-in-out'>{ heading }</h2>
        <p className='py-5 text-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out'>{ message }</p>
        <Link href="/#gallery" passHref>
          <button className='slidebtn px-8 py-2 border'>View</button>
        </Link>
      </div>
    </main>
  );
}
