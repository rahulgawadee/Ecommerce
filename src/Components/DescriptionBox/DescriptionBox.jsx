import React from 'react'

const DescriptionBox = () => {
  return (
    <div className="p-4 bg-purple-200 text-black">
      <div className="descriptionBox mx-8 my-12 md:mx-[170px] md:my-[120px] bg-white p-6 rounded-lg shadow-lg">
        <div className="descriptionbox-navigator flex border-b border-gray-300 pb-2 mb-4">
          <div className="descriptionbox-nav-box flex items-center justify-center font-semibold text-base w-1/2 h-12 border-r border-black cursor-pointer">
            Description
          </div>
          <div className="descriptionbox-nav-box flex items-center justify-center text-gray-400 w-1/2 h-12 cursor-pointer">
            Reviews(122)
          </div>
        </div>
        <div className="descriptionbox-description space-y-4 text-gray-700">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis et dolore molestiae magnam aliquam debitis culpa at fugiat natus nulla vero? Commodi eius dignissimos enim ut, incidunt officiis sint?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corrupti?
          </p>
        </div>
      </div>
    </div>
  )
}

export default DescriptionBox
