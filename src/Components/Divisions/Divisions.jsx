import React from 'react';
import './Divisions.scss';
import salesBg from '../../assets/saleBg.jpg';
import energeticBg from '../../assets/energeticBg.jpg';
import photovoltaicsBg from '../../assets/photovoltaicsBg.jpg';
import interactiveBg from '../../assets/interactiveBg.jpg';
import charityBg from '../../assets/charityBg.jpg';

const divisions = [
  {
    path: '/sales',
    name: 'sprzedażowa',
    titleText: 'Dywizja sprzedażowa',
    img: salesBg,
  },
  {
    path: '/energetic',
    name: 'energetyczna',
    titleText: 'Dywizja energetyczna',
    img: energeticBg,
  },
  {
    path: '/photovoltaics',
    name: 'fotowoltaiczna',
    titleText: 'Dywizja fotowoltaiczna',
    img: photovoltaicsBg,
  },
  {
    path: '/financial',
    name: 'finansowa',
    titleText: 'Dywizja finansowa',
    img: interactiveBg,
  },

  {
    path: '/fundraising',
    name: 'charytatywna',
    titleText: 'Dywizja charytatywna',
    img: charityBg,
  },
];

const Divisions = () => {
  return (
    <div className='divisions-container'>
      {divisions.map((obj) => (
        <div className='main-section' key={obj.name}>
          <img src={obj.img} alt='sales' />
          <h1>{obj.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Divisions;
