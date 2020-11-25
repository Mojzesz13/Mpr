import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ width, path, text, setTitle, isTablet }) => {
  const handleSetTitle = (text) => {
    setTitle(text);
  };

  if (isTablet) {
    return (
      <div className='btn-container' style={{ width }}>
        <Link to={path} className='btn btn-effect'>
          <span>{text}</span>
        </Link>
      </div>
    );
  }
  return (
    <div className='btn-container' style={{ width }}>
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
