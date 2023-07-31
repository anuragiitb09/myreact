import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const isWhiteNavbar = location.pathname !== '/';
  const isHomePage = location.pathname === '/';

  return (
    <div className={`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ${isWhiteNavbar ? 'bg-white text-black' : 'bg-transparent text-black'}`}>
      <Link to="/" className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</Link>
      <ul className='hidden md:flex'>
        <li className={`p-4 ${isHomePage ? 'text-green-300' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4'>
          <Link to="/about">AboutUs</Link>
        </li>
        <li className='p-4'>
          <Link to="/analytics">Services</Link>
        </li>
        <li className='p-4'>
          <Link to="/query">Queries</Link>
        </li>
        <li className='p-4'>
          <Link to="/contact">ContactUs</Link>
        </li>
        {/* Additional link using regular anchor tag */}
        <li className='p-4'>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className={`w-full text-3xl font-bold text-[#00df9a] m-4 ${isWhiteNavbar ? 'text-black' : 'text-white'}`}>REACT.</h1>
        <li className={`p-4 border-b border-gray-600 ${isWhiteNavbar ? 'text-black ' : 'text-white'}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`p-4 border-b border-gray-600 ${isWhiteNavbar ? 'text-black' : 'text-white'}`}>
          <Link to="/about">AboutUs</Link>
        </li>
        <li className={`p-4 border-b border-gray-600 ${isWhiteNavbar ? 'text-black' : 'text-white'}`}>
          <Link to="/analytics">Services</Link>
        </li>
        <li className={`p-4 border-b border-gray-600 ${isWhiteNavbar ? 'text-black' : 'text-white'}`}>
          <Link to="/query">Queries</Link>
        </li>
        <li className={`p-4 ${isWhiteNavbar ? 'text-black' : 'text-white'}`}>
          <Link to="/contact">ContactUs</Link>
        </li>
        {/* Additional link using regular anchor tag */}
        <li className={`p-4 ${isWhiteNavbar ? 'text-white' : 'text-black'}`}>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
