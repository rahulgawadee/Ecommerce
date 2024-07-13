import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import arrow_image from '../assets/arrow.png'

function Hero() {
  return (
    
      <div className="hero  min-h-screen bg-purple-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={hero_image} className="cursor-pointer sm:max-w-sm md:max-w-sm lg:max-w-sm " />
    <div className='cursor-pointer text-black'>
      <h2 className=" text-2xl font-mono ">NEW ARRIVALS ONLY</h2>
        <h1 className='flex text-7xl'>new <img src={hand_icon} className='flex-row w-16 md:w-16 sm:w-12 lg:w-12'/></h1> 
        <h1 className='text-7xl'>collection</h1>
        <h1 className='text-7xl mb-7'>for you</h1>
<button className="btn bg-red-600 btn-wide mt-5 text-white">Latest Collection<img src={arrow_image} /></button>
    </div>
  </div>
</div>
    
  )
}

export default Hero
