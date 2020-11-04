import React, { useState } from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdownContainer">
      <ul
        className={click ? 'dropdownMenu open' : 'dropdownMenu'}
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
