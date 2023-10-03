import React from 'react'
import Link from 'next/link';
import { Button } from './Button';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-[40px] sm:text-[50px] leading-10  font-bold'>I don&apos;t know how to put</p>
      <p className='text-[50px] leading-[65px]  font-black text-[#009EFD] '>NEXUS CLUB</p>
      <div className='mt-5'>
  
        <Button className="px-[22px] mx-5 text-black bg-white " href='/about'>click me</Button>
        <Button href='/about'>click button</Button>

      </div>
    </div>
  )
}

export default Hero