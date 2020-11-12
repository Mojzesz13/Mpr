import React from 'react';
import './Backdrop.scss';

function Backdrop({ click, setClick }) {
  const handleHideMenu = () => {
    setClick(false);
  };

  return (
    <div
      onClick={handleHideMenu}
      className={click ? 'backdrop-container show' : 'backdrop-container '}
    />
  );
}

export default Backdrop;
