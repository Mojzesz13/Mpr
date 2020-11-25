import React from 'react';
import './division.scss';
import Button from './button';
import Arrow from './arrow';

const Division = ({
  imgOne,
  imgTwo,
  logo,
  topText,
  bottomText,
  linkTo,
  arrowColor,
  setTitle,
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

  let logoCondition = '';

  if (logo && linkTo) {
    logoCondition = (
      <a href={linkTo}>
        <div className='logo-holder'>
          <img src={logo} alt='logo-raiden' />
          <Arrow arrowColor={arrowColor} />
        </div>
      </a>
    );
  } else {
    logoCondition = (
      <div className='bottom-button-holder'>
        <Button path='/contact' text='Kontakt' />
      </div>
    );
  }

  return (
    <div className='division-container' onMouseEnter={handleOnHover}>
      <div className='splitview skewed'>
        <div className='panel bottom'>
          <div className='content'>
            <img className='bg-img' src={imgOne} alt='Original' />
            <div className='text-holder'>
              <p>{bottomText}</p>
            </div>
            <div className='top-button-holder'>
              <Button path='/' text='POWRÓT' setTitle={setTitle} />
            </div>
          </div>
        </div>
        <div className='panel top'>
          <div className='content'>
            <img className='bg-img' src={imgTwo} alt='Duotone' />
            <div className='text-holder'>
              <p>{topText}</p>
            </div>
            {logoCondition}
          </div>
        </div>
        <div className='handle' />
      </div>
    </div>
  );
};

export default Division;
