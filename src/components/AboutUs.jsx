import React from 'react';
import AnuImage from '../assets/anu.jpg';

const AboutUs = () => {
  return (
    <div className='w-full bg-white py-16 px-4 flex flex-col items-center'>
      <h1 className='text-black text-3xl font-bold text-center pb-8'>About Us</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        {/* Director 1 */}
        <div className='flex flex-col justify-center items-center'>
          <img className='w-48 h-48 object-cover rounded-full mb-4' src={AnuImage} alt='Director 1' />
          <h2 className='text-[#00df9a] font-bold text-center'>Director 1</h2>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo vitae neque tincidunt consectetur.</p>
          <p className='text-center font-medium'>Experience: 10 years</p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
