import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen text-white cursor-cell' id='about'>
      <div className='text-white text-center justify-center pt-0 sm:pt-0 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
        About Us
      </div>
      <div className='max-w-5xl pt-4 text-white justify-center text-justify text-[18px] items-center'>
        Dark Shadowy Super Coders is a leading Web3 development firm specializing in smart contract creation, integration, and security audits. Our team of highly skilled developers and cybersecurity experts is dedicated to helping businesses unlock the full potential of blockchain technology. We provide tailored solutions for various industries, ensuring seamless functionality and robust security. Our mission is to empower businesses to innovate, build trust, and achieve growth in the Web3 space.
      </div>
    </div>
  )
}

export default About