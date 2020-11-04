import React, { useState } from 'react';
import './Navbar.scss';
import NavList from './NavList';
import Logo from './Logo/Logo';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className='headerContainer'>
      <Logo navbar={navbar} />
      <nav
        className="navbar desktop"
        id="navbar"
      >
        <NavList
          dropdown={dropdown}
          Dropdown={handleDropdown}
        />
      </nav>
    </header>
  );
};
export default Navbar;
