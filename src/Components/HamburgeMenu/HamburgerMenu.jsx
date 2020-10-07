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
          Home
        </Link>
        <Link to="/aboutUs" className="bm-item" style={{ display: 'block' }}>
          O nas
        </Link>
        <Link to="/sale" className="bm-item">
          Sprzedaż
        </Link>
        <Link to="/fundraising" className="bm-item">
          Zbieranie funduszy
        </Link>
        <Link to="/coaching" className="bm-item">
          Treningi
        </Link>
        <Link
          to="/financialConsulting"
          className="bm-item"
          style={{ display: 'block' }}
        >
          Konsultacje finansowe
        </Link>
        <Link
          to="/humanResources"
          className="bm-item"
          style={{ display: 'block' }}
        >
          Zarządzanie zasobami ludzkimi
        </Link>
        <Link to="/insurance" className="bm-item" style={{ display: 'block' }}>
          Ubezpieczenia
        </Link>
        <Link to="/contact" className="bm-item" style={{ display: 'block' }}>
          Kontakt
        </Link>
      </Menu>
    );
  }
}

export default HamburgerMenu;
