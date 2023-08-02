import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href='/'>
          <h1>DogArt</h1>
        </Link>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/#pictures'>Pictures</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li><Link href='/about'>About</Link></li>
        </ul>
      </div>


    </div>
  );
}
