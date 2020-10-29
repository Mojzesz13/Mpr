import React from 'react';
import Division from '../../common/division';
import './Photovoltaics.scss';
import sunSolar from '../../assets/sunSolarbg.jpg'
import logo from '../../assets/sunSolarLogo.png'

const mprDivision="Twój biznes zyska dodatkowy przychód, dzięki sprzedaży nadwyżek wyprodukowanej przez Twoją instalację. Jako jedyni na rynku dajemy Ci gwarancję obniżenia rachunku o minimum 80% lub zwrot różnicy wg zapisu w umowie.";
const sunSolarDivision="Zajmujemy się fachowym doradztwem w zakresie mikroinstalacji fotowoltaicznych dla gospodarstw domowych oraz firm. Niezależnie od wielkości prowadzonego przez Ciebie biznesu warto zainwestować w panele fotowoltaiczne, gdyż jest to pewny zysk. Zwrot z takiej inwestycji fotowoltaicznej to około 15 – 20% rocznie . Koszty energii elektrycznej możesz zredukować już od momentu zamontowania instalacji.";
const websiteAddress="https://sunsolar.com.pl/"
const arrowColor="white"

const Photovoltaics = () => {
    return (
     <Division
      imgTwo={sunSolar} 
      logo={logo} 
      bottomText={mprDivision} 
      topText={sunSolarDivision}
      linkTo={websiteAddress}
      arrowColor={arrowColor}
     />
    );
}
export default Photovoltaics;
