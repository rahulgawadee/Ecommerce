import React from 'react'
import { Link } from 'react-router-dom'
function item(props) {
  return (
    <div className='item w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-4 text-black'>
     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className='shadow-2xl w-full min-h-56 object-cover rounded-md mb-4 transform transition duration-600 hover:scale-105'/></Link> 
      <p className='m-1.5 text-lg font-extrabold'>{props.name}</p>
      <div className='item-prices flex gap-5'>
        <div className="ml-1.5 item-price-new font-bold text-xl text-gray-600">
            Rs.{props.new_price}
        </div>
        <div className="item-price-old text-gray-400 font-semibold text-lg line-through">
            Rs.{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default item
