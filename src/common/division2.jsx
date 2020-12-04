import React from 'react';
import './division2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import ButtonDivision from './buttonDivision';

const Division2 = ({
  imgOne,
  imgTwo,
  logo,
  logo2,
  linkTo2,
  topText,
  bottomText,
  linkTo,
  setTitle,
}) => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <div className='img-holder'>
          <img className='d-block w-100' src={imgOne} alt='First slide' />
        </div>
        <Carousel.Caption>
          <div className='text-holder'>
            <p>{bottomText}</p>
          </div>
          <div className='top-btn'>
            <ButtonDivision
              logo={logo}
              linkTo={linkTo}
              path='/contact'
              text='KONTAKT'
              setTitle={setTitle}
              width='15rem'
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className='img-holder'>
          <img className='d-block w-100' src={imgTwo} alt='First slide' />
        </div>
        <Carousel.Caption>
          <div className='text-holder'>
            <p>{topText}</p>
          </div>
          <div className='top-btn'>
            <ButtonDivision
              logo={logo2}
              linkTo={linkTo2}
              path='/'
              text='STRONA GŁÓWNA'
              setTitle={setTitle}
              width='15rem'
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Division2;
