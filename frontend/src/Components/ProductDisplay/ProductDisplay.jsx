import React, { useContext } from 'react';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
   const {addToCart} = useContext(ShopContext)

  return (
    <div className='ProductDisplay text-black flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-white'>
      <div className="productdisplay-left flex flex-col-reverse md:flex-row md:w-1/2 mb-4 md:mb-0 items-center justify-center">
        <div className="productdisplay-img-list flex flex-row md:flex-col md:mr-4 mt-4 md:mt-0 space-x-2 md:space-x-0 md:space-y-2">
          <img src={product.image} className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="product" />
          <img src={product.image} className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="product" />
          <img src={product.image} className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="product" />
          <img src={product.image} className="w-20 h-20 md:w-24 md:h-24 object-cover" alt="product" />
        </div>
        <div className="productdisplay-img w-full md:w-3/4">
          <img src={product.image} className="productdisplay-main-img w-full h-auto object-cover" alt="product" />
        </div>
      </div>
      <div className="productdisplay-right md:w-1/2 flex flex-col items-center md:items-start mt-4 md:mt-0 text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h1>
        <div className="product-right-star flex items-center mb-2 justify-center md:justify-start">
          <img src={star_icon} alt="star" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <img src={star_icon} alt="star" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <img src={star_icon} alt="star" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <img src={star_icon} alt="star" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <img src={star_dull_icon} alt="star" className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          <p className="text-gray-600 text-xs md:text-sm">(122)</p>
        </div>
        <div className="productdsi-right-prices mb-4">
          <div className="productdis-right-price-old line-through text-gray-500 text-sm md:text-base">
            Rs.{product.old_price}
          </div>
          <div className="productdis-right-price-new text-lg md:text-xl font-bold">
            Rs.{product.new_price}
          </div>
        </div>
        <div className="productdis-right-description mb-4 text-gray-700 text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum porro fuga, consequuntur quas velit iure! Veritatis quibusdam fugit laboriosam ea rerum at reprehenderit eveniet. Fugit nostrum aspernatur ex esse sit.
        </div>
        <div className="productdisplay-right-size mb-4">
          <h1 className="text-base md:text-lg font-bold mb-2">Select Size</h1>
          <div className="flex space-x-2 justify-center md:justify-start">
            <div className="border p-2 cursor-pointer text-xs md:text-sm">S</div>
            <div className="border p-2 cursor-pointer text-xs md:text-sm">M</div>
            <div className="border p-2 cursor-pointer text-xs md:text-sm">L</div>
            <div className="border p-2 cursor-pointer text-xs md:text-sm">XL</div>
            <div className="border p-2 cursor-pointer text-xs md:text-sm">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded mb-4">Add to cart</button>
        <p className='productdisplay-right-category mb-2 text-xs md:text-sm'><span className="font-bold font-serif">Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category text-xs md:text-sm'><span className="font-bold font-serif">Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
