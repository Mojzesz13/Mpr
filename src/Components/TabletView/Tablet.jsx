import React from 'react';
import './Tablet.scss';
import Home from '../Home/Home';

const Tablet = ({ isTablet }) => {
  return (
    <div className='tablet-container'>
      <Home isTablet={isTablet} />
    </div>
  );
};
export default Tablet;
