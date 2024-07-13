import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="navbar bg-white h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="red">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul tabIndex="0" className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              
              <li><Link to={'/mens'}>MEN</Link></li>
              <li><Link to={'/womens'}>WOMEN</Link></li>
              <li><Link to={'/kids'}>KIDS</Link></li>
              
            </ul>
          )}
        </div>
        <div className='container flex mx-auto max-sm:ml-0 '>
        <a className='mx-1 font-extrabold font-serif italic cursor-pointer ml-2 text-black m-auto'><Link to={'/'}>Rahul's</Link></a>
        <img className='w-auto h-8 sm:h-8 sm:w-8' src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className='flex justify-center align-middle gap-4 cursor-pointer'>
          <li onClick={() => { setMenu("shop")  }} ><Link to={'/'}>SHOP</Link>{menu === "shop" ? <hr className='border-none h-0.5 w-10 rounded-xl bg-red-700' /> : null}</li>
          <li onClick={() => { setMenu("men") }}><Link to={'/mens'}>MEN</Link>{menu === "men" ? <hr className='border-none h-0.5 w-8 rounded-xl bg-red-700' /> : null}</li>
          <li onClick={() => { setMenu("women") }}><Link to={'/womens'}>WOMEN</Link>{menu === "women" ? <hr className='border-none h-0.5 w-15 rounded-xl bg-red-700' /> : null}</li>
          <li onClick={() => { setMenu("kids") }}><Link to={'/kids'}>KIDS</Link>{menu === "kids" ? <hr className='border-none h-0.5 w-8 rounded-xl bg-red-700' /> : null}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="absolute top-0 right-0 mx-2 my-5 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</div>
        <Link to={'/login'}><button className="btn bg-red-500 text-white btn-xs mx-2 sm:btn-sm md:btn-md lg:btn-md">LOGIN</button></Link>
        <Link to={'/cart'}><img className='btn btn-xs sm:btn-sm lg:btn-sm bg-white border-white' src={cart} alt="cart" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
