import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-4 bg-gray-200700  bg-purple-100 text-black">
      <div className="cartitems bg-white p-4 rounded-lg drop-shadow-xl">
        <div className="cartitems-format-main hidden md:flex md:flex-wrap text-center font-semibold mb-4">
          <div className="w-full flex justify-between">
            <p className="w-1/6">Product</p>
            <p className="w-1/6">Title</p>
            <p className="w-1/6">Price</p>
            <p className="w-1/6">Quantity</p>
            <p className="w-1/6">Total</p>
            <p className="w-1/6">Remove</p>
          </div>
        </div>
        <hr className="hidden md:block mb-4" />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id} className="cartitems-item mb-4">
                <div className="cartitems-format grid grid-cols-1 md:grid-cols-6 gap-4 items-center text-center md:text-left">
                  <div className="col-span-1 mx-auto">
                    <img src={e.image} alt="" className="cart-icon-product-icon w-24 h-24 object-cover mx-auto md:mx-0" />
                  </div>
                  <p className="col-span-1">{e.name}</p>
                  <p className="col-span-1 md:mx-auto ">Rs.{e.new_price}</p>
                  <div className="col-span-1">
                    <div className="cartitems-quantity bg-white border-2 border-red-600 py-1 px-3 text-center rounded-md">
                      {cartItems[e.id]}
                    </div>
                  </div>
                  <p className="col-span-1 px-4 md:mx-auto">Rs.{(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                  <div className="col-span-1 mx-auto flex justify-center">
                    <img
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      alt=""
                      className="cursor-pointer w-6 h-6"
                    />
                  </div>
                </div>
                <hr className="mt-4"/>
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down mt-6 flex flex-col lg:flex-row justify-between">
          <div className="cartitems-total bg-white border-2 drop-shadow-lg p-4 rounded-lg mb-6 lg:mb-0 lg:mr-6 w-full lg:w-2/5">
            <h1 className="text-xl font-bold mb-4">Cart Totals</h1>
            <div>
              <div className="cartitems-total-item flex justify-between mb-2">
                <p>SubTotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item flex justify-between mb-2">
                <p>Shipping Fees</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-items flex justify-between font-bold text-lg mt-4">
                <h3>Total</h3>
                <h3>Rs.{ getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-red-500 text-white rounded-md">PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode bg-white border-2 drop-shadow-lg p-4 rounded-lg w-full lg:w-2/5">
            <p>If you have a Promo code, Enter it here </p>
            <div className="cartitems-promobox flex flex-col sm:flex-row mt-2 ">
              <input
                type="text"
                placeholder="promo-code"
                className="flex-grow p-2 border rounded-t-lg sm:rounded-t-none sm:rounded-l-lg bg-transparent"
              />
              <button className="bg-black text-white p-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg mt-2 sm:mt-0 sm:ml-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
