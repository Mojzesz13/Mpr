import React from 'react';
import Button from './../../common/button';
import firstImgB from '../../assets/aboutUsFirstB.jpg';
import firstImgA from '../../assets/aboutUsFirstA.jpg';

const HeaderAboutUs = ({
  isHovered,
  handleOnMouseEnter,
  handleOnMouseLeave,
  aboutUsText,
  setTitle,
}) => {
  return (
    <div className='header-about-us main-section'>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className='box-section first-box'
      >
        <img src={isHovered ? firstImgB : firstImgA} alt={'first-img'} />
        <div className='letter-section'>
          <div className='letter-holder first-a'></div>
          <div className='letter-holder first-b'></div>
        </div>
        <div className='btn-section'>
          <Button
            path='/'
            text='Strona główna '
            width='12rem'
            setTitle={setTitle}
          />
        </div>
      </div>
      <div className='box-section second-box'>{aboutUsText}</div>
      <div className='box-section third-box' />
    </div>
  );
};
export default HeaderAboutUs;
