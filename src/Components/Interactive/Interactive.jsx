import React from 'react';
import Division from '../../common/division';
import interactiveMpr from '../../assets/interactiveMpr.jpg';
import interactiveBg from '../../assets/interactiveBg.jpg';

const mprDivision = (
  <p>
    W swoim portfelu firm posiadamy również agencję marketingu internetowego.
    Zajmujemy się tworzeniem i optymalizacją stron internetowych, spacerami
    wirtualnymi, prowadzeniem mediów społecznościowych, tworzeniem kampanii
    Facebook Ads oraz tworzeniem identyfikacji wizualnej.
  </p>
);
const interactiveDivision = (
  <p>
    Skontaktuj się z nami, jeśli Twoja firma potrzebuje profesjonalnej
    identyfikacji wizualnej - zaprojektujemy (lub odświeżymy) Twoje logo,
    wizytówki, stronę www, profile w social media.
    {<br />} Zadbamy o Twój biznes w świecie online!
  </p>
);

const Interactive = ({ setTitle, isTablet }) => {
  return (
    <Division
      imgOne={interactiveMpr}
      imgTwo={interactiveBg}
      topText={mprDivision}
      bottomText={interactiveDivision}
      setTitle={setTitle}
      isTablet={isTablet}
    />
  );
};
export default Interactive;
