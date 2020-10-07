import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
      <div className="LogoContainer">
        <Link to="/">
          <h1>
            MPR <span>GROUP</span>
          </h1>
        </Link>
      </div>
    );
  }
}
export default Logo;
