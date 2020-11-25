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
    text: (
      <p>
        Organizacja sieci sprzedaży dla dostawców usług i klientów
        korporacyjnych'
      </p>
    ),
    text2: 'test1',
    src: ThirdImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 2,
    text: <p>Fundraising {<br />} dla fundacji i organizacji pozarządowych'</p>,
    text2: 'test2',
    src: FourthImg,
    alt: 'MprDivisionImg',
  },

  {
    id: 3,
    text: <p>Kreowanie wizerunku i tworzenie materiałów promocyjnych',</p>,
    text2: 'test3',
    src: FifthImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 4,
    text: <p>test4 </p>,
    text2: 'test4',
    src: SixImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 5,
    text: (
      <p>
        Dostarczanie Twoich produktów lub usług do wybranej przez Ciebie grupy
        docelowej.'
      </p>
    ),
    text2: 'test5',
    src: SeventhImg,
    alt: 'MprDivisionImg',
  },
  {
    id: 6,
    text: (
      <p>
        Działania związane z budowaniem marki oraz rozwojem Twojej firmy w
        Internecie.'
      </p>
    ),
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
              {click ? <p className='secondText'>{obj.text2}</p> : obj.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyAboutUs;
