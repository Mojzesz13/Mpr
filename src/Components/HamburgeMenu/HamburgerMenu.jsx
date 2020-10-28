import React from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';

  const navListItems= [{
    path: "/",
    name: "Strona główna",
    titleText: "Liczby się liczą"
  },
  {
    path: "/aboutUs",
    name: "O nas",
    titleText: "O nas"
  },
    {
    path: "/sale",
    name: "Dywizja sprzedażowa",
    titleText: "Dywizja sprzedażowa"
  },
  {
    path: "/energetic",
    name: "Dywizja energetyczna",
    titleText: "Dywizja energetyczna"
  },
  {
    path: "/photovoltaics",
    name: "Dywizja fotowoltaiczna",
    titleText: "Dywizja fotowoltaiczna"
  },
  {
    path: "/financial",
    name: "Dywizja finansowa",
    titleText: "Dywizja finansowa"
  },

    {
    path: "/fundraising",
    name: "Dywizja charytatywna",
    titleText: "Dywizja charytatywna"
  },
     {
    path: "/contact",
    name: "Kontakt",
    titleText: "Kontakt"
  },
];

const HamburgerMenu =({setTitle})=> {

  const handleSetTitle = (text) => {
    setTitle(text);
  }

    return (
      <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
       {navListItems.map((obj)=> (
          <Link 
            key={obj.titleText} 
            to={obj.path} 
            className="bm-item" 
            onClick={() => handleSetTitle(obj.titleText)} 
            style={{ display: 'block' }}>
              {obj.name}
          </Link>
       ))}
      </Menu>
    );
}

export default HamburgerMenu;
