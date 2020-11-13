import React from 'react';
import { Link } from 'react-router-dom';
import './Divisions.scss';
import salesBg from '../../assets/saleMpr.jpg';
import salesTitle from '../../assets/salesTitle.svg';
import energeticBg from '../../assets/energeticMpr.jpg';
import energeticTitle from '../../assets/energeticTitle.svg';
import photovoltaicsBg from '../../assets/photovoltaicsMpr.jpg';
import photovoltaicsTitle from '../../assets/photovoltaicsTitle.svg';
import interactiveBg from '../../assets/interactiveMpr.jpg';
import interactiveTitle from '../../assets/interactiveTitle.svg';
import charityBg from '../../assets/charityMpr.jpg';
import charityTitle from '../../assets/charityTitle.svg';

const divisions = [
  {
    path: '/sales',
    name: 'sprzedażowa',
    titleText: 'Dywizja sprzedażowa',
    titleImg: salesTitle,
    img: salesBg,
  },
  {
    path: '/energetic',
    name: 'energetyczna',
    titleText: 'Dywizja energetyczna',
    titleImg: energeticTitle,
    img: energeticBg,
  },
  {
    path: '/photovoltaics',
    name: 'fotowoltaiczna',
    titleText: 'Dywizja fotowoltaiczna',
    titleImg: photovoltaicsTitle,
    img: photovoltaicsBg,
  },
  {
    path: '/interactive',
    name: 'interaktywna',
    titleText: 'Dywizja finansowa',
    titleImg: interactiveTitle,
    img: interactiveBg,
  },

  {
    path: '/charity',
    name: 'charytatywna',
    titleText: 'Dywizja charytatywna',
    titleImg: charityTitle,
    img: charityBg,
  },
];

const Divisions = ({ setTitle }) => {
  const handleSetTitle = (text) => {
    setTitle(text);
  };

  return (
    <div className='divisions-container'>
      {divisions.map((obj) => (
        <div className='main-section' key={obj.name}>
          <Link to={obj.path}>
            <img
              className='bg-section'
              src={obj.img}
              alt={obj.name}
              onClick={() => handleSetTitle(obj.name)}
            />
            <img className='title-section' src={obj.titleImg} alt={obj.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Divisions;
