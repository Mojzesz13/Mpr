import React from 'react';
import { Link } from 'react-router-dom';
import './Divisions.scss';
import salesBg from '../../assets/divSalesBg.jpg';
import salesMpr from '../../assets/divSalesMpr.jpg';
import salesTitle from '../../assets/salesTitle.svg';
import energeticTitle from '../../assets/energeticTitle.svg';
import energeticBg from '../../assets/divEnergeticBg.jpg';
import energeticMpr from '../../assets/divEnergeticMpr.jpg';
import photovoltaicsTitle from '../../assets/photovoltaicsTitle.svg';
import photovoltaicsBg from '../../assets/divPhotovoltaicsBg.jpg';
import photovoltaicsMpr from '../../assets/divPhotovoltaicsMpr.jpg';
import interactiveBg from '../../assets/divInteractiveBg.jpg';
import interactiveMpr from '../../assets/divInteractiveMpr.jpg';
import interactiveTitle from '../../assets/interactiveTitle.svg';
import charityBg from '../../assets/divCharityBg.jpg';
import charityMpr from '../../assets/divCharityMpr.jpg';
import charityTitle from '../../assets/charityTitle.svg';

const divisions = [
  {
    path: '/sales',
    name: 'sprzedażowa',
    titleText: 'Dywizja sprzedażowa',
    titleImg: salesTitle,
    img: salesBg,
    mainText:
      'Robisz co możesz, żeby sprzedawać jeszcze więcej, ale masz wrażenie, że konkurencja Cię wyprzedza? W dywizji sprzedażowej to my skupiamy się na połączeniu Twojego produktu lub usługi z odpowiednią grupą docelową. Dzięki temu Twoja firma może osiągać lepsze wyniki i coraz bardziej się rozwijać.',
    cName: 'box first ',
  },
  {
    path: '/energetic',
    name: 'energetyczna',
    titleText: 'Dywizja energetyczna',
    titleImg: energeticTitle,
    img: energeticBg,
    mainText:
      'Świadczymy usługi marketingu bezpośredniego dla firm z różnych sektorów rynku. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasi handlowcy pozyskają firmy do Twojego portfolio, co pomoże zwiększyć Twoje dochody. Jesteśmy najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia.',
    cName: 'box second',
  },
  {
    path: '/photovoltaics',
    name: 'fotowoltaiczna',
    titleText: 'Dywizja fotowoltaiczna',
    titleImg: photovoltaicsTitle,
    img: photovoltaicsBg,
    mainText:
      'Sprzedajesz 50, 100 czy 200 kw miesięcznie? Napisz do nas, a zapewnimy Ci zespół sprzedażowy, który pomoże Ci podwoić ilość sprzedawanych instalacji.',
    cName: 'box third',
  },
  {
    path: '/interactive',
    name: 'interaktywna',
    titleText: 'Dywizja finansowa',
    titleImg: interactiveTitle,
    img: interactiveBg,
    mainText:
      'kontaktuj się z nami, jeśli Twoja firma potrzebuje profesjonalnej identyfikacji wizualnej - zaprojektujemy (lub odświeżymy) Twoje logo, wizytówki, stronę www, profile w social media. Zadbamy o Twój biznes w świecie online!',
    cName: 'box forth',
  },

  {
    path: '/charity',
    name: 'charytatywna',
    titleText: 'Dywizja charytatywna',
    titleImg: charityTitle,
    img: charityBg,
    mainText:
      'Fundrasing oznacza dla nas profesjonalne i systematyczne pozyskiwanie finansowania na rzecz organizacji non-profit. Posiadamy wieloletnie doświadczenie w pozyskiwaniu darczyńców dla różnych fundacji charytatywnych, co stawia nas w czołówce polskich firm zajmujących się fundrasingiem.',
    cName: 'box fifth',
  },
];

const Divisions = ({ setTitle }) => {
  // const handleSetTitle = (text) => {
  //   setTitle(text);
  // };

  return (
    <div className='divisions-container'>
      {divisions.map((obj) => (
        <div className={obj.cName} key={obj.name}>
          <Link to={obj.path}>
            {/* <img
              className='bg-section'
              src={obj.img}
              alt={obj.name}
              // onClick={() => handleSetTitle(obj.name)}
            /> */}
            <div className='title-section' />
            <div className='text-section'>{obj.mainText}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Divisions;
