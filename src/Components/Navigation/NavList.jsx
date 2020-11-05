import React from 'react';
import { Link } from 'react-router-dom';
import './NavList.scss';
import Dropdown from './Dropdown';
import arrow from '../../assets/downArrow.png'

const NavList = ({
  dropdown,
  handleDropdown,
  onMouseLeave,
  onMouseEnter,
}) => {
  return (
    <ul className="headerLinks ">
      <li className="navItem">
        <Link to="/" className="navLinks">
          Strona główna
        </Link>
      </li>
       <li className="navItem">
        <Link to="/aboutus" className="navLinks">
          O nas
        </Link>
      </li>
      <li
        className="navItem"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to="/divisions" className="navLinks" onClick={handleDropdown}>
          Dywizje
            <img src={arrow} alt="down-arrow"/>
        </Link>
        {dropdown && <Dropdown/>}
      </li>

      <li className="navItem">
        <Link to="/contact" className="navLinks">
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
