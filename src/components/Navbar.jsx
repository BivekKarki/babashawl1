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

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Services', path: '/services' },
    { id: 3, text: 'About', path: '/about-us' },
    { id: 4, text: 'Project', path: '/projects' },
    { id: 5, text: 'Blog', path: '/blogs' },
    { id: 6, text: 'Contact', path: '/contact-us' },
  ];

  const handleClick = (path) => {
    navigate(path);
    handleNav();
  };

  return (
    <div className='z-50 mx-auto w-full sm:px-16 px-4 py-0 flex justify-between sticky top-0 bg-white shadow-customShadow' ref={dropdownRef}>
      <div
        className='flex items-center py-2'
        onClick={() => {
          navigate('/');
        }}
      >
        <img
          src='https://gayatripashmina.com/wp-content/uploads/2021/04/cropped-Header-LOGO.png'
          alt='Logo'
          className='w-10 h-10 sm:w-14 sm:h-14 max-w-14 hover:cursor-pointer'
        />
      </div>

      {/* Desktop Navigation */}
      <ul className={`hidden sm:flex ${nav ? 'overflow-x-hidden' : ''}`}>
        {navItems.map((item) =>
          item.text === 'Contact' ? (
            <li
              onClick={() => navigate('/contact-us')}
              key={item.id}
              className='sm:px-4 sm:py-2 bg-KSecondary text-white hover:bg-KPrimary rounded-xl mx-2 my-auto cursor-pointer duration-300 flex items-center'
            >
              {item.text}
            </li>
          ) : (
            <li
              key={item.id}
              onClick={() => handleClick(item.path)}
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
            ? 'fixed md:hidden left-0 top-0 w-[100%] h-full border-r border-r-KSecondary bg-KSecondary ease-in-out duration-500 overflow-y-auto'
            : 'ease-in-out w-[100%] duration-500 fixed top-0 left-[-100%]'
        }
      >
        <div className='flex justify-between items-center px-4 py-0 border-b border-b-KPrimary'>
          <div className='flex items-center py-2'>
            <img src='https://gayatripashmina.com/wp-content/uploads/2021/04/cropped-Header-LOGO.png' alt='Logo' className='w-10 h-10' />
          </div>
          <button type='button' onClick={handleNav} className='block sm:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.path)}
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
