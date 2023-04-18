import React from 'react'
import { Navbar } from './navbar';
import { Footer } from './footer';
import { NavbarInterface } from '@/utils/interface/NavbarInterface';

export const Homepage = ({children}: NavbarInterface) => {
  return (
    <div className='grid'>
        <Navbar>
            {children}
        </Navbar>
        <Footer />
    </div>
  )
}
