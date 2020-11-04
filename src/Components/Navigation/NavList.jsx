import React from 'react';
import { Link } from 'react-router-dom';
import './NavList.scss';
import Dropdown from './Dropdown';
import downArrow from '../../assets/downArrow.png'

const NavList = ({
  dropdown,
  handleDropdown,
}) => {
  return (
    <ul className="header-links ">
      <li className="nav-item">
        <Link to="/aboutUs" className="nav-links">
          O NAS
        </Link>
      </li>
      <li
        className="nav-item"
      >
        <Link to="/dresses" className="nav-links" onClick={handleDropdown}>
          DYWIZJE
          <img src={downArrow} alt="downArrow"/>
        </Link>
        {dropdown && <Dropdown />}
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
