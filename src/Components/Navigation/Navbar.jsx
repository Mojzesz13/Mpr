import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';
import NavList from './NavList';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

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
    <header className={'headerContainer'}>
      <Logo/>
      <nav
        className="navbar desktop"
        id="navbar"
     >
        <NavList
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
