import React, { useState, useEffect } from 'react';
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs';

const Testimonial = ({ text, author, image }) => {
  return (
    <div className='relative h-full'>
      <div className="bg-[#262A55] rounded-[16px] shadow-lg overflow-hidden mx-auto mb-4 max-w-lg h-64 relative">
        <div className="px-8 py-12">
          <p className="text-white font-medium text-lg mb-2">{text}</p>
          <p className="text-sm ml-0 m-3 font-bold text-[#ffeb06]">- {author}</p>
        </div>
      </div>
      <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-[#080c15] rounded-full p-1">
        <img src={image} alt="testimonial author" className="rounded-full border-4 border-[#0F172A]/30 w-16 h-16"/>
      </div>
    </div>
  );
};

const TestimonialList = ({ testimonials }) => {
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedTestimonialIndex(
      selectedTestimonialIndex === 0
        ? testimonials.length - 1
        : selectedTestimonialIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedTestimonialIndex(
      selectedTestimonialIndex === testimonials.length - 1
        ? 0
        : selectedTestimonialIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setSelectedTestimonialIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonialIndex(
        selectedTestimonialIndex === testimonials.length - 1
          ? 0
          : selectedTestimonialIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedTestimonialIndex, testimonials.length]);

  return (
    <div className='bg-[#07001B] w-screen h-full py-32 px-4'>
      <div className='text-white text-center justify-center pt-0 sm:pt-0 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
        Testimonials
      </div>
      <div className="flex flex-wrap justify-center relative pt-[4rem]">
        {testimonials.map((testimonial, index) => (
          <div
            className={`w-full lg:w-1/3 px-4 mb-8 ${
              index === selectedTestimonialIndex ? 'opacity-100' : 'opacity-0 absolute'
            } transition-opacity duration-300`}
            key={index}
          >
            <Testimonial {...testimonial} />
          </div>
        ))}
        <button
          className="text-yellow-200 absolute left-[15rem] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
          onClick={handlePrevClick}
        >
        <BsFillArrowLeftCircleFill className='scale-[1.3]'/>
        </button>
        <button
          className=" text-yellow-200 absolute right-[15rem] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
          onClick={handleNextClick}
        >
          <BsFillArrowRightCircleFill className='scale-[1.3]'/>
        </button>
      </div>
      <div className="flex justify-center mt-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 mx-2 cursor-cell rounded-full ${
            index === selectedTestimonialIndex ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
        />
      ))}
      </div>
    </div>
  )
}

export default TestimonialList;