import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';
import NavList from './NavList';
import Hamburger from '../../common/hamburger';
// import { useEffect } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', function () {
  //     let header = document.querySelector('#header');
  //     header.classList.toggle('sticky', window.scrollY > 0);
  //   });
  // });

  const handleOnClick = () => setClick(!click);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const onMouseEnter = () => {
    window.innerWidth > 1199 ? setDropdown(false) : setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 1199 ? setDropdown(false) : setDropdown(false);
  };

  return (
    <header className={'header-container'} id='header'>
      <Logo />
      <div className='menu-icon' onClick={handleOnClick}>
        <Hamburger click={click} />
      </div>
      <nav className='navbar' id='navbar'>
        <NavList
          click={click}
          dropdown={dropdown}
          Dropdown={handleDropdown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </nav>
    </header>
  );
};
export default Navbar;
