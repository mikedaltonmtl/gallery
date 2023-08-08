'use client';

import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {

  // react-hook-form
  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    window.location.href = `mailto:michael.j.dalton@gmail.com?subject=${formData.subject}&body=Message From: ${formData.name}. ${formData.message} (${formData.email})`;
  };

  // submit button
  const submitButton = useRef();

  const handleSubmitClick = function() {
    submitButton.current.value = "thanks!";
  };




  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen relative'>
      <div id='contact' className='absolute left-0 top-[-70px]' />
      <h1 className='text-4xl font-bold text-center p-4'>Let&apos;s work together</h1>

      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-2'>
          <input {...register("name")} className='border shadow-lg p-3' type='text' placeholder='Name' required />
          <input {...register("email")} className='border shadow-lg p-3' type='email' placeholder='Email' required />
        </div>
        <input {...register("subject")} className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject' />
        <textarea {...register("message")} className='border shadow-lg p-3 w-full' cols='30' rows='10' placeholder='Message' />
        <button ref={submitButton} onClick={handleSubmitClick} id='submit-btn' className='border shadow-lg p-3 w-full mt-2' type='submit'>Submit</button>
      </form>

    </div>
  );
}
