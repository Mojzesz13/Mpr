import React from 'react';
import './division.scss';
import ButtonDivision from './buttonDivision';

const Division = ({
  imgOne,
  imgTwo,
  logo,
  logo2,
  linkTo2,
  topText,
  bottomText,
  linkTo,
  setTitle,
  isTablet,
}) => {
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
            <img className='bg-img' src={imgOne} alt='mprBg' />
            <div className='text-holder'>
              <p>{bottomText}</p>
            </div>
            <div className='top-btn'>
              <ButtonDivision
                logo={logo2}
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
            <img className='bg-img' src={imgTwo} alt='partnerBg' />
            <div className='text-holder'>
              <p>{topText}</p>
            </div>
            <div className='bottom-btn'>
              <ButtonDivision
                logo={logo}
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

export default Division;
