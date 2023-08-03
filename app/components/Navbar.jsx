'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  // nav is true when showing mobile menu
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(prev => !prev);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('white');
        setTextColor('black');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-20 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{color: `${textColor}` }} className='font-bold text-4xl'>DogArt</h1>
        </Link>
        <ul style={{color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'><Link href='/'>Home</Link></li>
          <li className='p-4'><Link href='/#pictures'>Pictures</Link></li>
          <li className='p-4'><Link href='/contact'>Contact</Link></li>
          <li className='p-4'><Link href='/about'>About</Link></li>
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className='block sm:hidden z-20'>{
          nav
            ? <AiOutlineClose size={20} style={{color: `${textColor}` }} />
            : <AiOutlineMenu size={20} style={{color: `${textColor}` }} />
        }
        </div>

        {/* mobile menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/'>Home</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/#pictures'>Pictures</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/contact'>Contact</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/about'>About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
