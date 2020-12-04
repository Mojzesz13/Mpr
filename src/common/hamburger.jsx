import React from 'react';
import './hamburger.scss';

const Hamburger = ({ click }) => {
  return (
    <div className={click ? 'hamburger-menu open' : 'hamburger-menu'}>
      <div className='burger-btn' />
    </div>
  );
};

export default Hamburger;
