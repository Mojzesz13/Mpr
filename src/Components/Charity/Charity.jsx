import React from 'react';
import './Charity.scss';
import charityBg from '../../assets/charityBg.jpg';
import charityMpr from '../../assets/charityMpr.jpg';
import logoRak from '../../assets/logoRak.svg';
import logoDom from '../../assets/logoDom.svg';
import ButtonDivision from '../../common/buttonDivision';

const mprDivision =
  'Fundrasing oznacza dla nas profesjonalne i systematyczne pozyskiwanie finansowania na rzecz organizacji non-profit. Posiadamy wieloletnie doświadczenie w pozyskiwaniu darczyńców dla różnych fundacji charytatywnych, co stawia nas w czołówce polskich firm zajmujących się fundrasingiem.';
const fundraisinDivision =
  'Bez nowych darczyńców nie będziesz mógł zwiększać przychodów, ani rozwijać swojej fundacji, więc niezależnie od tego czy chcesz pozyskać darczyńców indywidualnych czy biznesowych, możesz liczyć na naszą pomoc w tej kwestii.';
const linkTo = 'http://wzzr.pl/';
const linkTo2 = 'http://www.dbamyomlodych.pl/';

const Charity = ({ setTitle, isTablet }) => {
  const handleOnHover = () => {
    let parent = document.querySelector('.splitview'),
      topPanel = parent.querySelector('.top'),
      handle = parent.querySelector('.handle'),
      skewHack = 0,
      delta = 0;
    if (parent.className.indexOf('skewed') !== -1) {
      skewHack = 1000;
    }
    parent.addEventListener('mousemove', function (event) {
      delta = (event.clientX - window.innerWidth / 2) * 1.3;
      handle.style.left = event.clientX + delta + 'px';
      topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
  };

  return (
    <div
      className='division-container'
      onMouseEnter={isTablet ? null : handleOnHover}
    >
      <div className='splitview skewed'>
        <div className='panel bottom'>
          <div className='content'>
            <img className='bg-img' src={charityMpr} alt='mprBg' />
            <div className='text-holder'>
              <p>{fundraisinDivision}</p>
            </div>
            <div className='top-btn'>
              <ButtonDivision
                logo={logoDom}
                linkTo={linkTo2}
                path='/'
                text='STRONA GŁÓWNA'
                setTitle={setTitle}
              />
            </div>
          </div>
        </div>
        <div className='panel top'>
          <div className='content'>
            <img className='bg-img' src={charityBg} alt='partnerBg' />
            <div className='text-holder'>
              <p>{mprDivision}</p>
            </div>
            <div className='bottom-btn'>
              <ButtonDivision
                logo={logoRak}
                linkTo={linkTo}
                path='/contact'
                text='Kontakt'
                setTitle={setTitle}
              />
            </div>
          </div>
        </div>
        <div className='handle' />
      </div>
    </div>
  );
};
export default Charity;
