import React, { Component } from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';

class HamburgerMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <Link to="/" className="bm-item">
          <span>Home</span>
        </Link>
        <Link to="/aboutUs" className="bm-item" style={{ display: 'block' }}>
          <span>O nas</span>
        </Link>
        <Link to="/sale" className="bm-item">
          <span>Sprzedaż</span>
        </Link>
        <Link to="/fundraising" className="bm-item">
          <span>Zbieranie funduszy</span>
        </Link>
        <Link to="/coaching" className="bm-item">
          <span>Treningi</span>
        </Link>
        <Link
          to="/financialConsulting"
          className="bm-item"
          style={{ display: 'block' }}
        >
          <span>Konsultacje finansowe</span>
        </Link>
        <Link
          to="/humanResources"
          className="bm-item"
          style={{ display: 'block' }}
        >
          <span>Zarządzanie zasobami ludzkimi</span>
        </Link>
        <Link to="/insurance" className="bm-item" style={{ display: 'block' }}>
          <span>Ubezpieczenia</span>
        </Link>
        <Link to="/contact" className="bm-item" style={{ display: 'block' }}>
          <span>Kontakt</span>
        </Link>
      </Menu>
    );
  }
}

export default HamburgerMenu;
