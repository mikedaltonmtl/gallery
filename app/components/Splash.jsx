import React from 'react';

export default function Splash() {
  return (
    <main className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10' />
      <div className='p-5 text-white z-10 ml-[-10rem] mt-[-10rem]'>
        <h2>Gallery</h2>
      </div>
    </main>
  );
}
