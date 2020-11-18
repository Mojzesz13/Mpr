import React from 'react';
import Division from '../../common/division';
import './Photovoltaics.scss';
import photovoltaicsBg from '../../assets/photovoltaicsBg.jpg';
import photovoltaicsMpr from '../../assets/photovoltaicsMpr.jpg';
import logo from '../../assets/sunSolarLogo.svg';

const mprDivision =
  'Sprzedajesz 50, 100 czy 200 kw miesięcznie? Napisz do nas, a zapewnimy Ci zespół sprzedażowy, który pomoże Ci podwoić ilość sprzedawanych instalacji.';
const sunSolarDivision =
  'Zajmujemy się doradztwem w zakresie mikroinstalacji fotowoltaicznych dla gospodarstw domowych oraz firm. W dywizji energetycznej pomagamy największym dystrybutorom energii zwiększyć liczbę klientów biznesowych.';
const websiteAddress = 'https://sunsolar.com.pl/';
const arrowColor = 'white';

const Photovoltaics = () => {
  return (
    <Division
      imgOne={photovoltaicsMpr}
      imgTwo={photovoltaicsBg}
      logo={logo}
      bottomText={mprDivision}
      topText={sunSolarDivision}
      linkTo={websiteAddress}
      arrowColor={arrowColor}
    />
  );
};
export default Photovoltaics;
