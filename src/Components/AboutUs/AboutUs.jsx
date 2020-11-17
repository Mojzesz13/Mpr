import React, { useState } from 'react';
import './AboutUs.scss';
import HeaderAboutUs from './headerAboutUs';
import BodyAboutUs from './bodyAboutUs';

const aboutUsText =
  'Świadczymy usługi marketingu bezpośredniego dla firm z różnych sektorów rynku. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasi handlowcy pozyskają firmy do Twojego portfolio, co pomoże zwiększyć Twoje dochody. Jesteśmy najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia.';

const Aboutus = ({ setTitle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };
  const handleOnMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false);
  };

  return (
    <div className='about-us-container' id='aboutus'>
      <HeaderAboutUs
        handleOnMouseEnter={handleOnMouseEnter}
        handleOnMouseLeave={handleOnMouseLeave}
        isHovered={isHovered}
        aboutUsText={aboutUsText}
        setTitle={setTitle}
      />
      <div className='slogan-container'>
        <h1>Idealnie sprawdzamy się w:</h1>
      </div>
      <BodyAboutUs />
    </div>
  );
};
export default Aboutus;
