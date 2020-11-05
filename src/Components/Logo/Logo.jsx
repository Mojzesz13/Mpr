import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import logo from '../../assets/mprLogo.svg'

const Logo = ({title}) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="mprLogo"/>
      </Link>
      <div className="slogan-section">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
export default Logo;
