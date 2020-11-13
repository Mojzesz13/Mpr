import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = ({ width, path, text, setTitle }) => {
  // const handleSetTitle = (text) => {
  //   setTitle(text);
  // };

  return (
    <div className='button-container' style={{ width: width }}>
      <Link
        to={path}
        className='btn effect04'
        data-sm-link-text='PRZEJDŹ'
        // onClick={() => handleSetTitle(text)}
      >
        <span>{text}</span>
      </Link>
    </div>
  );
};
export default Button;
