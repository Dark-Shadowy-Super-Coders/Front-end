import React, { useState } from 'react';
import {BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill} from 'react-icons/bs';

const CaseStudy = ({ index, org, category, details }) => {

  return (
    <div className="h-[31rem] md:h-80 w-full flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xxl bg-gradient-to-r from-[#941b52] to-[#443ba5] p-1 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="h-[31rem] md:h-80 w-full flex flex-col justify-center bg-[#061418] px-8 py-10 lg:h-[28rem]">
        <p className="text-5xl text-yellow-300 font-semibold pb-4">{index}</p>
        {/* <p className="text-sm text-yellow-300 pb-2">{category}</p> */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row">{org}
          <span className="text-sm text-[#e11d5b] ml-2 pt-2">|</span>
          <span className="text-base text-yellow-300 pb-2 pt-2 ml-2">{category}</span>
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pt-2">{details}</p>
      </div>
    </div>
  );
}

const CaseStudyList = ({ casestudies }) => {
  const [selectedCasestudyIndex, setSelectedCasestudyIndex] = useState(0);
  
  const handlePrevClick = () => {
    setSelectedCasestudyIndex(
      selectedCasestudyIndex === 0
        ? casestudies.length - 1
        : selectedCasestudyIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedCasestudyIndex(
      selectedCasestudyIndex === casestudies.length - 1
        ? 0
        : selectedCasestudyIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setSelectedCasestudyIndex(index);
  };


  return (
    <div className='flex flex-col items-center justify-center bg-[#05070D] w-full h-screen' id='casestudies'>
      <div className='text-white text-center justify-center pt-0 sm:pt-0 md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 items-center'>
        Case Studies
      </div>
      <div className="flex flex-wrap justify-center relative pt-[8rem]">
        {casestudies.map((casestudy, index) => (
          <div
            className={`w-full lg:w-1/3 px-4 mb-8 ${
              index === selectedCasestudyIndex ? 'opacity-100' : 'opacity-0 absolute'
            } transition-opacity duration-300`}
            key={index}
          >
            <CaseStudy {...casestudy} />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center mt-[0.1rem] z-1">
        {casestudies.map((casestudy, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-5 h-1 mx-2 cursor-cell ${
              index === selectedCasestudyIndex ? 'bg-yellow-300' : 'bg-gray-300'
            }`}
          />
        ))}
        <div className='absolute flex flex-col items-center justify-center'>
          <button
            className="text-yellow-300 absolute mt-[3.75rem] pr-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
            onClick={handlePrevClick}
          >
            <BsFillArrowLeftSquareFill className='scale-[1.3]'/>
          </button>
          <button
            className="text-yellow-300 absolute mt-[3.75rem] pl-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
            onClick={handleNextClick}
          >
            <BsFillArrowRightSquareFill className='scale-[1.3]'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyList;
