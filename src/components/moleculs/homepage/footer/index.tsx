import Image from 'next/image';
import {image} from '@/images'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-l from-blue-500 to-cyan-500'>
      <div className='px-10 py-4 mx-auto'>
        <Image priority={true} src={image.logo} width={100} alt='logo.webp' />
      </div>
    </footer>
  );
};
