import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const navigate = useNavigate();

  return (
    <>
      <nav className='bg-black px-4 md:px-20 sticky top-0 flex justify-between py-8 items-center'>
        <div>
          <img src={logo} alt="Logo" className='w-48' />
        </div>

       
        <div className="hidden md:block">
          <ul className='flex font-semibold gap-10 text-white'>
            <li className='list-none cursor-pointer text-md' onClick={() => navigate("/")}>Home</li>
            <li className='list-none cursor-pointer text-md' onClick={() => navigate("/shop")}>Shop</li>
            <li className='list-none cursor-pointer text-md' onClick={() => navigate("/pages")}>Pages</li>
            <li className='list-none cursor-pointer text-md' onClick={() => navigate("/blog")}>Blog</li>
            <li className='list-none cursor-pointer text-md' onClick={() => navigate("/contact")}>Contact us</li>
          </ul>
        </div>

 
        <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

   
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} sticky top-0`}>
        <ul className='flex flex-col items-center font-semibold gap-6 text-black'>
          <li className='list-none cursor-pointer text-md' onClick={() => navigate("/")}>Home</li>
          <li className='list-none cursor-pointer text-md' onClick={() => navigate("/shop")}>Shop</li>
          <li className='list-none cursor-pointer text-md' onClick={() => navigate("/pages")}>Pages</li>
          <li className='list-none cursor-pointer text-md' onClick={() => navigate("/blog")}>Blog</li>
          <li className='list-none cursor-pointer text-md' onClick={() => navigate("/contact")}>Contact us</li>
        </ul>
      </div>
    </>
  );
};
