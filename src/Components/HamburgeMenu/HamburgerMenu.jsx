import React from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';
import { MenuItems } from '../Navigation/MenuItems';

const test2 = (
  <div className="division-list"> 
      {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
  </div>
)

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
    path: "/divisions",
    name: "Dywizje",
    titleText: "Dywizje",
    test: test2
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
              {obj.test}
          </Link>
          
       ))}
      </Menu>
    );
}

export default HamburgerMenu;
