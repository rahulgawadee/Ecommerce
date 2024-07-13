import React from 'react'
import Item from '../Items/item'
import new_collection from '../assets/new_collections'

function NewCollections() {
  return (
    <div className='popular flex flex-col items-center gap-4 h-full p-4 bg-purple-200 sm:bg-purple-300 md:bg-purple-400 lg:bg-purple-200 '>
      <h1 className='text-black font-extrabold text-3xl md:text-3xl'>NEW COLLECTIONS</h1>
      <hr className='w-1/2 md:w-52 h-1.5 rounded-xl bg-red-900' />
      <div className="collections mt-12 flex flex-wrap justify-center gap-4 md:gap-8 ">
        {new_collection.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
        })}
      </div>
    </div>
  )
}

export default NewCollections
