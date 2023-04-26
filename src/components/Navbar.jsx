import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoOutline.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 w-screen mx-auto px-8 text-white'>
      <div className='w-full grid grid-flow-col justify-start'>
        <img src={logo} alt='logo' className='h-20'/>
        {/* <h1 className='text-3xl font-bold text-[#00df9a] p-5'>DSSC</h1> */}
      </div>
      <ul className='hidden cursor-pointer md:flex'>
        <li className='p-4'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='p-4'><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li className='p-4'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        <li className='p-4'><Link to="about" smooth={true} duration={500}>About</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed z-1 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <div className='w-full grid grid-flow-col justify-start'>
        <img src={logo} alt='logo' className='h-20'/>
      </div>
        <li className='p-4 border-b border-gray-600'><Link to="home" smooth={true} duration={500} onClick={handleNav}>Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="services" smooth={true} duration={500} onClick={handleNav}>Services</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="contact" smooth={true} duration={500} onClick={handleNav}>Contact</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="about" smooth={true} duration={500} onClick={handleNav}>About</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;