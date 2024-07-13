import React from 'react';
import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (

<div className="hero bg-purple-100 min-h-screen text-black ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
     src ={exclusive_image}
      className=" sm:max-w-sm md:max-w-sm lg:max-w-sm" />
    <div>
      <h1 className=" font-semibold text-4xl sm:text-7xl mb-4 ">Exclusive</h1>
      <h1 className="font-semibold text-4xl sm:text-7xl mb-4 ">Offers For You</h1>
      <p className="text-lg sm:text-xl font-semibold mb-8">
      ONLY ON THE BEST SELLERS PRODUCTS
      </p>
      <button className='w-full sm:w-64 h-16 rounded-full bg-red-600 border-none text-white text-xl sm:text-2xl font-medium mt-8 cursor-pointer mb-5 '>Check Now</button>
    </div>
  </div>
</div>
  )
}
export default Offers
