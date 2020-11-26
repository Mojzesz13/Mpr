import React from 'react';
import Division from '../../common/division';
import interactiveMpr from '../../assets/interactiveMpr.jpg';
import interactiveBg from '../../assets/interactiveBg.jpg';

const mprDivision =
  'Skontaktuj się z nami, jeśli Twoja firma potrzebuje profesjonalnej identyfikacji wizualnej - zaprojektujemy (lub odświeżymy) Twoje logo, wizytówki, stronę www, profile w social media. Zadbamy o Twój biznes w świecie online!';
const interactiveDivision =
  'W swoim portfelu firm posiadamy również agencję marketingu internetowego. Zajmujemy się tworzeniem i optymalizacją stron internetowych, spacerami wirtualnymi, prowadzeniem mediów społecznościowych, tworzeniem kampanii Facebook Ads oraz tworzeniem identyfikacji wizualnej.';

const Interactive = ({ setTitle }) => {
  return (
    <Division
      imgOne={interactiveMpr}
      imgTwo={interactiveBg}
      topText={mprDivision}
      bottomText={interactiveDivision}
      setTitle={setTitle}
    />
  );
};
export default Interactive;
