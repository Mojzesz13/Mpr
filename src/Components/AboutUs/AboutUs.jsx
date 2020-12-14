import React, { useState } from 'react';
import './AboutUs.scss';
import HeaderAboutUs from './headerAboutUs';
import BodyAboutUs from './bodyAboutUs';

const aboutUsText = (
  <p>
    MPR to profesjonalne podejście do marketingu bezpośredniego. {<br />}
    Dotarcie do klientów B2B lub B2C? Outsourcing sprzedaży? Promocja produktów
    i usług? {<br />}
    Właśnie tym się zajmujemy! {<br />}
    {<br />}Świadczymy usługi marketingu bezpośredniego dla firm z różnych
    sektorów rynku.{<br />}
    Jesteśmy najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika
    wymaga zastosowania indywidualnego podejścia.{<br />} Dysponujemy
    profesjonalnymi grupami sprzedażowymi, dzięki którym zwiększysz swoją
    sprzedaż kilkukrotnie!
    {<br />}
    Dlaczego marketing bezpośredni? {<br />}Nasze doświadczenie pokazuje, że
    jest to jedna z najefektywniejszych metod dotarcia do klienta.
  </p>
);

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
        <h1>Co robimy?</h1>
      </div>
      <BodyAboutUs setTitle={setTitle} />
    </div>
  );
};
export default Aboutus;
