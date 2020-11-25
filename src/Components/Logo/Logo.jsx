import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logo from '../../assets/mprLogo.svg';

const Logo = ({ title, setTitle, isTablet }) => {
  const handleSetTitle = () => {
    setTitle('Liczby się liczą');
  };

  if (isTablet) {
    return (
      <div className='logo-container'>
        <Link to='/'>
          <img src={logo} alt='mpr-logo' />
        </Link>
      </div>
    );
  }
  return (
    <div className='logo-container'>
      <Link to='/' onClick={() => handleSetTitle()}>
        <img src={logo} alt='mpr-logo' />
      </Link>
      <div className='slogan-section'>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export default Logo;
