import React from 'react';
import AnuImage from '../assets/anu.jpg';

const AboutUs = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[300px] mx-auto my-4 rounded-full' src={AnuImage} alt='Director 1' />
        <div className='flex flex-col justify-center'>
          <h2 className='text-[#00df9a] font-bold text-center md:text-left'>Meet Our Visionary</h2>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left'>
            Director 1: Leading with Excellence
          </h1>
          <p className='text-center md:text-left'>
            Uncover the brilliance within our team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo vitae neque tincidunt consectetur.
          </p>
          <p className='text-center md:text-left font-medium'>Experience: A Decade of Profound Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
