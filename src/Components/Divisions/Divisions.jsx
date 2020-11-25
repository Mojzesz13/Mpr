import React from 'react';
import './Divisions.scss';
import Button from '../../common/button';
import raidenLogo from '../../assets/RaidenLogo.svg';
import sunSolarLogo from '../../assets/sunSolarLogo.svg';

const divisions = [
  {
    path: '/sales',
    name: 'sprzedażowa',
    titleText: 'Dywizja sprzedażowa',
    mainText:
      'Robisz co możesz, żeby sprzedawać jeszcze więcej, ale masz wrażenie, że konkurencja Cię wyprzedza? W dywizji sprzedażowej to my skupiamy się na połączeniu Twojego produktu lub usługi z odpowiednią grupą docelową. Dzięki temu Twoja firma może osiągać lepsze wyniki i coraz bardziej się rozwijać.',
    cName: 'box first ',
  },
  {
    path: '/energetic',
    name: 'energetyczna',
    titleText: 'Dywizja energetyczna',
    mainText:
      'Świadczymy usługi marketingu bezpośredniego dla firm z różnych sektorów rynku. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasi handlowcy pozyskają firmy do Twojego portfolio, co pomoże zwiększyć Twoje dochody. Jesteśmy najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia.',
    cName: 'box second',
    logo: raidenLogo,
    linkTo: 'http://raiden.pl/#/',
  },
  {
    path: '/photovoltaics',
    name: 'fotowoltaiczna',
    titleText: 'Dywizja fotowoltaiczna',
    mainText:
      'Sprzedajesz 50, 100 czy 200 kw miesięcznie? Napisz do nas, a zapewnimy Ci zespół sprzedażowy, który pomoże Ci podwoić ilość sprzedawanych instalacji.',
    cName: 'box third',
    logo: sunSolarLogo,
    linkTo: 'https://sunsolar.com.pl/',
  },
  {
    path: '/interactive',
    name: 'interaktywna',
    titleText: 'Dywizja finansowa',
    mainText:
      'kontaktuj się z nami, jeśli Twoja firma potrzebuje profesjonalnej identyfikacji wizualnej - zaprojektujemy (lub odświeżymy) Twoje logo, wizytówki, stronę www, profile w social media. Zadbamy o Twój biznes w świecie online!',
    cName: 'box forth',
  },

  {
    path: '/charity',
    name: 'charytatywna',
    titleText: 'Dywizja charytatywna',
    mainText:
      'Fundrasing oznacza dla nas profesjonalne i systematyczne pozyskiwanie finansowania na rzecz organizacji non-profit. Posiadamy wieloletnie doświadczenie w pozyskiwaniu darczyńców dla różnych fundacji charytatywnych, co stawia nas w czołówce polskich firm zajmujących się fundrasingiem.',
    cName: 'box fifth',
  },
];

const Divisions = ({ setTitle }) => {
  return (
    <div className='divisions-container'>
      {divisions.map((obj) => (
        <div className={obj.cName} key={obj.name}>
          <div className='title-section'>
            <div className='firstT title' />
            <div className='secondT title' />
          </div>
          <div className='text-section'>
            <p>{obj.mainText}</p>
            <div className='btn-section'>
              {obj.logo ? (
                <a href={obj.linkTo}>
                  <img src={obj.logo} alt='logo' />
                </a>
              ) : (
                <Button
                  width='10rem'
                  path={obj.path}
                  text={obj.name}
                  setTitle={setTitle}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Divisions;
