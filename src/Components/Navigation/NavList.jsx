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
  click
}) => {
  return (
    <ul className={click ? 'header-links active' : 'header-links'}>
      <li className="nav-item">
        <Link to="/" className="nav-links">
          Strona główna
        </Link>
      </li>
       <li className="nav-item">
        <Link to="/aboutus" className="nav-links">
          O nas
        </Link>
      </li>
      <li
        className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to="/divisions" className="nav-links" onClick={handleDropdown}>
          Dywizje 
            <img src={arrow} alt="down-arrow"/>
        </Link>
        {dropdown && <Dropdown/>}
      </li>

      <li className="nav-item">
        <Link to="/contact" className="nav-links">
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
