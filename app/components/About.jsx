import React from 'react';
import Link from 'next/link';
import { BiSolidMapPin, BiMessageDetail } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { FiExternalLink, FiMail } from 'react-icons/fi';
import { GrContactInfo } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg';

export default function About() {
  return (
    <main className='max-w-[100%] sm:max-w-[1240px] m-auto p-4 min-h-screen relative'>
      <div id='about' className='absolute left-0 top-[-70px]' />
      <h1 className='text-4xl font-bold text-center p-4'>A little background</h1>
      <section className='p-4 flex sm:flex-row flex-col justify-evenly align-top'>
        <article className='w-auto sm:w-1/2'>
          <p className='py-2 text-justify'>Hi! I&apos;m the guy in the some of the photos above.</p>
          <p className='py-2 text-justify'>For a long time now I&apos;ve known that I want to be coding and I&apos;m currently looking for an opportunity to do so.</p>
          <p className='py-2 text-justify'>When we brought a new puppy home and I realized how many photos we were going to take of her, my first reaction was that it would be great to build some kind of gallery to collate them all ...and this is it.</p>
          <p className='py-2 text-justify'>I followed a You Tube <Link className="about before:bg-sky-500/30" href="https://www.youtube.com/watch?v=HVyct9EUNP8" target="_blank">tutorial</Link> by Clint Briley for the navigation and large image slider then added the rest myself. I tried to add a little animation and movement to some of the elements to keep it fun, with a stack of Next.js (13) and Tailwind.</p>
          <p className='py-2 text-justify'>If you would like to see more, please check out my <Link className="about before:bg-pink-500/30" href="https://github.com/mikedaltonmtl" target="_blank">GitHub</Link> and <Link className="about before:bg-indigo-500/30" href="https://portfolio-mikedaltonmtl.vercel.app/" target="_blank">Portfolio</Link> pages.</p>
        </article>
        <article className='w-auto sm:w-1/3'>
          <div className="flex py-2">
            <BiSolidMapPin className='text-red-600 select-none' size={30} />
            <p className='text-base sm:text-xl px-2 mt-1'>Location: Montreal</p>
          </div>
          <Link className="flex py-2" href="https://www.linkedin.com/in/mike-dalton-4a002224/" target="_blank">
            <BsLinkedin className='text-[#0A66C2] cursor-pointer select-none' size={30} />
            <p className='text-base sm:text-xl px-2 mt-1'>Linked in</p>
            <FiExternalLink className='mt-1' />
          </Link>
          <Link className="flex py-2" href="https://github.com/mikedaltonmtl" target="_blank">
            <VscGithub className='text-[#171515] cursor-pointer select-none' size={30} />
            <p className='text-base sm:text-xl px-2 mt-1'>GitHub</p>
            <FiExternalLink className='mt-1' />
          </Link>
          <Link className="flex py-2" href="https://resume.creddle.io/resume/imknszcecmu" target="_blank">
            <CgWebsite className='text-lime-500 cursor-pointer select-none' size={30} />
            <p className='text-base sm:text-xl px-2 mt-1'>Resume</p>
            <FiExternalLink className='mt-1' />
          </Link>
          <Link className="flex py-2" href="https://portfolio-mikedaltonmtl.vercel.app/" target="_blank">
            <GrContactInfo className='cursor-pointer select-none' size={30} />
            <p className='text-base sm:text-xl px-2 mt-1'>Portfolio</p>
            <FiExternalLink className='mt-1' />
          </Link>
          <div className="flex py-2">
            <FiMail className='text-pink-500/80 select-none' size={30} />
            <p className=' break-all text-base sm:text-xl px-2'>michael.j.dalton@gmail.com</p>
          </div>
          <div className="flex py-2">
            <BiMessageDetail className='text-indigo-500/80 select-none' size={30} />
            <p className='text-base sm:text-xl px-2 w-2/3 sm:w-auto'>+1 (514) 267-9278</p>
          </div>
        </article>
      </section>
    </main>
  );
}
