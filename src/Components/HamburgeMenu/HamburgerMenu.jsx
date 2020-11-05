import React from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { scaleRotate as Menu } from 'react-burger-menu';
import { MenuItems } from '../Navigation/MenuItems';
import { useState } from 'react';

const HamburgerMenu =({setTitle})=> {
  const[showDivisionMenu, setShowDivisionMenu] = useState("none")

  const handleSetTitle = (text) => {
    setTitle(text);
  }

  const handleShowDivisionMenu = (e) => {
    e.preventDefault();
    setShowDivisionMenu("flex");
  }

  const handleHiddeDivisionMenu = (e)=> {
    setShowDivisionMenu("none");
  }


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
    showSideBar: handleShowDivisionMenu,
    hiddeSideBar: handleHiddeDivisionMenu,
  },
  {
    path: "/contact",
    name: "Kontakt",
    titleText: "Kontakt"
  },
];

  const divisionList = (
    <div className="division-list" 
       style={{display:showDivisionMenu}}
       onMouseEnter={handleShowDivisionMenu}
       onMouseLeave={handleHiddeDivisionMenu}> 
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

    return (
      <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
       {navListItems.map((obj)=> (
          <Link 
            key={obj.titleText} 
            to={obj.path} 
            className="bm-item" 
            onMouseEnter={obj.showSideBar}
            onMouseLeave={obj.hiddeSideBar}
            onClick={() => handleSetTitle(obj.titleText)} 
            style={{ display: 'block' }}>
              {obj.name}
          </Link>
       ))}
       {divisionList}
      </Menu>
    );
}

export default HamburgerMenu;
