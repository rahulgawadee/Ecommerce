import React from 'react';
import data_product from '../assets/data';
import Item from '../Items/item';

function Popular() {
  return (
    <div className='popular flex flex-col items-center gap-4 h-full p-4 bg-purple-200 sm:bg-purple-200 md:bg-purple-300 lg:bg-purple-200 '>
      <h1 className='text-black font-extrabold text-3xl md:text-3xl'>POPULAR IN WOMEN</h1>
      <hr className='w-1/2 md:w-52 h-1.5 rounded-xl bg-red-900' />
      <div className="product-item mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
