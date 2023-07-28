import React from 'react';
import AnuImage from '../assets/anu.jpg';
import AnuImage1 from '../assets/anu1.jpg';
import AnuImage2 from '../assets/anu2.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='text-black text-3xl font-bold text-center pb-8'>Our Services</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4'>
        {/* Website 1 */}
        <div className='flex flex-col justify-center mb-8'>
          <img className='w-full md:w-[500px] mx-auto my-4' src={AnuImage} alt='Website 1' />
          <h2 className='text-[#00df9a] font-bold text-center'>Website 1</h2>
        </div>
        {/* Website 2 */}
        <div className='flex flex-col justify-center mb-8'>
          <img className='w-full md:w-[500px] mx-auto my-4' src={AnuImage1} alt='Website 2' />
          <h2 className='text-[#00df9a] font-bold text-center'>Website 2</h2>
        </div>
        {/* Website 3 */}
        <div className='flex flex-col justify-center mb-8'>
          <img className='w-full md:w-[500px] mx-auto my-4' src={AnuImage2} alt='Website 3' />
          <h2 className='text-[#00df9a] font-bold text-center'>Website 3</h2>
        </div>
        {/* Data Analytics */}
        <div className='col-span-3 flex flex-col justify-center mb-8'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>
            Manage Data Analytics Centrally
          </h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className='text-center'>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
