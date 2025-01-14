import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // const handleScroll = (id, path) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start',  });
  //   }
  //   setNav(false);
  // };

  const handleScroll = (id, path) => {
    if (location.pathname != '/ ') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setNav(false);
  };
  

  const navItems = [
    { id: "home", text: 'Home', path: '/' },
    { id: "products", text: 'Products', path: '/products' },
    { id: "services", text: 'Services', path: '/services' },
    { id: "about-us", text: 'About Us', path: '/about-us' },
    { id: 5, text: 'Contact Us', path: '/contact-us' },
  ];

  const handleClick = (path) => {
    navigate(path);
    handleNav();
  };

  return (
    <div className='z-50 mx-auto w-full sm:px-16 px-4 py-0 flex justify-between sticky top-0 bg-white shadow-customShadow' ref={dropdownRef}>
      <div
        className='flex items-center py-2'
        // onClick={() => handleScroll('home')}
        onClick={() => {
          navigate('/');
        }}
      >
        <img
          src='/images/Logo.png'
          alt='Logo'
          className='w-30 h-10 sm:w-52 sm:h-14 max-w-52 hover:cursor-pointer'
        />
      </div>

      {/* Desktop Navigation */}
      <ul className={`hidden sm:flex ${nav ? 'overflow-x-hidden' : ''}`}>
        {navItems.map((item) =>
          item.text === 'Contact Us' ? (
            <li
              onClick={() => navigate('/contact-us')}
              // onClick={() => handleScroll(item.id)}
              key={item.id}
              className='sm:px-4 sm:py-2 bg-[#d2b48c] text-white hover:bg-KPrimary rounded-xl mx-2 my-auto cursor-pointer duration-300 flex items-center'
            >
              {item.text}
            </li>
          ) : (
            <li
              key={item.id}
              // onClick={() => handleClick(item.path)}
              onClick={() => handleScroll(item.id)}
              className={`sm:px-1 md:px-4 md:py-2 mx-2 my-auto cursor-pointer duration-300 flex items-center text-base font-medium leading-normal tracking-wide
              ${location.pathname === item.path ? 'text-KPrimary underline underline-offset-4' : 'text-slate-900 hover:text-yellow-500'}`}
            >
              {item.text}
            </li>
          )
        )}
      </ul>

      {/* Mobile Navigation */}
      <button type='button' onClick={handleNav} className='block sm:hidden text-KPrimary'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[100%] h-full border-r border-r-KSecondary bg-white ease-in-out duration-500 overflow-y-auto'
            : 'ease-in-out w-[100%] duration-500 fixed top-0 left-[-100%]'
        }
      >
        <div className='flex justify-between items-center px-4 py-0 border-b border-b-KPrimary'>
          <div className='flex items-center py-2'>
            <img src='/images/Logo.png' alt='Logo' className='w-30 h-10' />
          </div>
          <button type='button' onClick={handleNav} className='block sm:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) =>
          item.text === 'Contact Us' ? (
            <li
              onClick={() => navigate('/contact-us')}
              // onClick={() => handleScroll(item.id)}
              key={item.id}
              className='sm:px-4 sm:py-2 p-2 w-fit bg-[#d2b48c] text-white hover:bg-KPrimary rounded-xl mx-2 my-auto cursor-pointer duration-300 flex items-center'
            >
              {item.text}
            </li>
          ) : (
          <li
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className='p-4 rounded-xl hover:bg-KPrimary duration-300 cursor-pointer my-2'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
