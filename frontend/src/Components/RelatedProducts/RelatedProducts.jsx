import React from 'react'
import data_product from '../assets/data'
import Item from '../Items/item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-4 h-full p-4 bg-white'>
      <h1 className="text-2xl font-bold mb-4 text-black">Related Products</h1>

      <hr className="w-1/2 md:w-52 h-1.5 rounded-xl bg-red-900"/>
      <div className="relatedproducts-item mt-12 flex flex-wrap justify-center gap-4 md:gap-8 ">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
