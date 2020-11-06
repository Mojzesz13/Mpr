import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';
import NavList from './NavList';
import Hamburger from '../../common/hamburger';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

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
    <header className={'header-container'}>
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
