import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Items/item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category p-4 md:p-8 bg-white'>
      <img src={props.banner} className='w-full mx-auto mb-8' />
      <div className="shopcategory_indexSort flex flex-col md:flex-row justify-between items-center mb-6">
        <p className='flex flex-col md:flex-row mx-4 md:mx-8 mb-4 md:mb-0 text-black '>
          <span className='font-semibold mr-2'>
            Showing 1-12
          </span>
          <span>Out of 36 Products</span>
        </p>
        <div className="showcategory-sort flex items-center justify-between bg-white rounded-3xl border border-red-500 px-4 py-2 cursor-pointer text-black">
          <span>Sort by</span>
          <img src={dropdown_icon} className='ml-2' alt='Sort Dropdown Icon'/>
        </div>
      </div>
      <div className="shopcategory-products collections mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      <div className="load-more flex justify-center items-center m-auto w-60 h-14 rounded-3xl bg-red-500 border-black text-black mt-16 font-bold cursor-pointer text-lg ">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
