'use client';

import React from 'react';

export default function Contact() {

  const handleSubmit = async function(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
  };

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen relative'>
      <div id='contact' className='absolute left-0 top-[-70px]' />
      <h1 className='text-4xl font-bold text-center p-4'>Let&apos;s work together</h1>

      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type='text' placeholder='Name' required />
          <input className='border shadow-lg p-3' type='email' placeholder='Email' required />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols='30' rows='10' placeholder='Message' />
        <button id='submit-btn' className='border shadow-lg p-3 w-full mt-2' type='submit'>Submit</button>
      </form>


    </div>
  );
}
