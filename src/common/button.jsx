import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ width, path, text, setTitle }) => {
  const handleSetTitle = (text) => {
    setTitle(text);
  };

  return (
    <div className='btn-container' style={{ width: width }}>
      <Link
        to={path}
        className='btn btn-effect'
        onClick={() => handleSetTitle(text)}
      >
        <span>{text}</span>
      </Link>
    </div>
  );
};
export default Button;
