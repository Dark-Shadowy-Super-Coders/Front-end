import React from 'react';
import Typed from 'react-typed';
import hero from '../assets/hero.svg'

const Hero = () => {
  return (
    <div className='flex items-center w-screen h-screen'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white' id='home'>
        <img className='w-[500px] sm:scale-[1.5] md:scale-[1.5] lg:scale-[1.5] xl:scale-[1.5] xl:rounded-full mx-auto my-4' src={hero} alt='/' />

        <div className='flex flex-col justify-center'>
          {/* <div className='flex text-center justify-center pt-28 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
            Dark Shadowy Super Coders.
          </div> */}
          <div className='flex text-center justify-center pt-0 sm:pt-0 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
            Dark Shadowy Super Coders.
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-gray-500 md:text-3xl sm:text-4xl text-xl font-bold py-4'>
              for web3
            </p>
            <Typed
            className='md:text-3xl sm:text-4xl text-[#8b56c7] text-xl font-bold md:pl-4 pl-2'
              strings={['development', 'auditing', 'solutions']}
              typeSpeed={80}
              backSpeed={20}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


/* 
<div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-white'>
        <div className='max-w-[600px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center'>
          <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
            Dark Shadowy Super Coders.
          </h1>
          <div className='flex items-center'>
            <p className='text-gray-500 md:text-3xl sm:text-4xl text-xl font-bold py-4'>
              for web3
            </p>
            <Typed
            className='md:text-3xl sm:text-4xl text-[#6800df] text-xl font-bold md:pl-4 pl-2'
              strings={['development', 'auditing', 'solutions']}
              typeSpeed={80}
              backSpeed={20}
              loop
            />
          </div>
        </div>
        <div className='md:w-[500px]'>
          <img className='w-[500px] scale-125 mx-auto my-4 py-10 relative' src={hero} alt='/' />
        </div>
      </div>
    </div>
*/
