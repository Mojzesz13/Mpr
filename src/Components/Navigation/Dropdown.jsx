import React, { useState } from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const [moveX, setMoveX] = useState('');
  const [moveY, setMoveY] = useState('');

  const handleClick = () => setClick(!click);

  const handleMouseMove = (e) => {
    setMoveX(e.nativeEvent.clientX * -0.02 + 'px');
    setMoveY(e.nativeEvent.clientY * -0.02 + 'px');
  };

  return (
    <div className="dropdownContainer">
      <ul
        className={click ? 'dropdownMenu open' : 'dropdownMenu'}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        style={{ backgroundPositionX: moveX, backgroundPositionY: moveY }}
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
