import React from 'react';
import ThirdImg from '../../assets/aboutUsThird.jpg';
import FourthImg from '../../assets/aboutUsFourth.jpg';
import FifthImg from '../../assets/aboutUsFifth.jpg';
import SixImg from '../../assets/aboutUsSix.jpg';
import SeventhImg from '../../assets/aboutUsSeventh.jpg';
import EightImg from '../../assets/aboutUsThird.jpg';
import { useState } from 'react';

const dataSection = [
  {
    id: 1,
    text:
      'Organizacja sieci sprzedaży dla dostawców usług i klientów korporacyjnych',
    text2: 'test1',
    src: ThirdImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 2,
    text: 'Fundraising dla fundacji  i organizacji pozarządowych',
    text2: 'test2',
    src: FourthImg,
    alt: 'MprDivisionImg',
  },

  {
    id: 3,
    text: 'Kreowanie wizerunku  i produkcji  materiałów promocyjnych',
    text2: 'test3',
    src: FifthImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 4,
    text: 'test4  ',
    text2: 'test4',
    src: SixImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 5,
    text:
      'Dostarczanie Twoich produktów lub usług do wybranej przez Ciebie grupy docelowej.',
    text2: 'test5',
    src: SeventhImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 6,
    text:
      'Działania związane z budowaniem marki oraz rozwojem Twojej firmy w Internecie.',
    text2: 'test6',
    src: EightImg,
    alt: 'MprDivisionImg',
  },
];

const BodyAboutUs = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className='about-us-content main-section'>
      {dataSection.map((obj) => (
        <div
          key={obj.id}
          onClick={() => handleClick()}
          className='content-box box-section'
        >
          <img src={obj.src} alt={obj.alt} />
          <div className='text-box'>
            <div className={click ? 'text-holder activeText' : 'text-holder'}>
              {click ? (
                <p className='secondText'>{obj.text2}</p>
              ) : (
                <p>{obj.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyAboutUs;
