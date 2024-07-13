import React from 'react'

function Newsletter() {
  return (
    <div className="hero bg-purple-100 min-h-screen flex items-center justify-center text-black">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between w-full max-w-5xl px-4">
        <div className="text-center lg:text-left lg:pl-8">
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Get Exclusive Offers On Your Email</h1>
          <p className="text-lg sm:text-xl font-semibold mb-8">Subscribe to our newsletter and stay Updated...</p>
          <div className="join flex justify-center lg:justify-start">
            <input className="input px-6 py-2 md:px-8 md:py-3 rounded-2xl join-item w-full max-w-xs md:max-w-sm bg-slate-50 " placeholder="Enter Your Email ID" />
            <button className="btn join-item rounded-2xl bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
