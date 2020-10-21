import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = ({title}) => {
  return (
    <div className="logo-container">
      <Link to="/">
        <h1>
          MPR <span>GROUP</span>
        </h1>
      </Link>
      <div className="slogan-section">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
export default Logo;
