import React from 'react';
import { Link } from 'react-scroll';
import './NavList.scss';
import Icon1 from '../../../assets/icon/icon1.svg';
import Icon2 from '../../../assets/icon/icon2.svg';
import Icon3 from '../../../assets/icon/icon3.svg';
import Icon4 from '../../../assets/icon/icon4.svg';
import Icon5 from '../../../assets/icon/icon5.svg';
import { v4 as uuidv4 } from 'uuid';

const NavListMobileDataBase = [
  {
    path: 'weddingDressesM',
    icon: Icon2,
    iconAlt: 'weddingIcon',
    cName: 'second navItem',
  },
  {
    path: 'eveningDressesM',
    icon: Icon3,
    iconAlt: 'eveningIcon',
    cName: 'third navItem',
  },
  {
    path: 'blog',
    icon: Icon4,
    iconAlt: 'blogIcon',
    cName: 'forth navItem',
  },
  {
    path: 'contact',
    icon: Icon5,
    iconAlt: 'contactIcon',
    cName: 'fifth navItem',
  },
];

const NavListMobile = ({ navbar }) => {
  return (
    <nav className={navbar ? 'headerLinks' : 'headerLinks activeHeader'}>
      <div className="linkHolder">
        <Link
          key={uuidv4()}
          className="navItem"
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={Icon1} className="first navItem" alt="mainIcon" />
        </Link>
        {NavListMobileDataBase.map((obj) => {
          return (
            <Link
              key={uuidv4()}
              className={navbar ? `${obj.cName}` : `${obj.cName}  activeItem '`}
              activeClass="active"
              to={obj.path}
              spy={true}
              smooth={true}
              duration={500}
            >
              <img className="mobileIcon" src={obj.icon} alt={obj.iconAlt} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavListMobile;
