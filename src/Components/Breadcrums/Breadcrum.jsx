import React from 'react';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='Breadcrum bg-white  text-red-600 flex flex-wrap items-center text-sm md:text-base p-2 md:p-4  rounded-md shadow-md'>
      <span className='mr-1'>HOME</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 md:w-4 md:h-4 mx-1' />
      <span className='mr-1'>SHOP</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 md:w-4 md:h-4 mx-1' />
      <span className='mr-1'>{product.category}</span>
      <img src={arrow_icon} alt="arrow" className='w-3 h-3 md:w-4 md:h-4 mx-1' />
      <span>{product.name}</span>
    </div>
  );
}

export default Breadcrum;
