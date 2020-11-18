import React from 'react';
import Division from '../../common/division';
import energeticBg from '../../assets/energeticBg.jpg';
import LogoRaiden from '../../assets/RaidenLogo.svg';
import energeticMpr from '../../assets/energeticMpr.jpg';

const mprDivision =
  'Świadczymy usługi marketingu bezpośredniego dla firm z różnych sektorów rynku. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasi handlowcy pozyskają firmy do Twojego portfolio, co pomoże zwiększyć Twoje dochody. Jesteśmy najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia.';
const raidenDivision =
  'Chcesz zmniejszyć rachunki za prąd w swojej firmie? Chciałbyś spróbować sił w pracy handlowca lub masz do nas jakieś pytania? Chętnie udzielimy Ci na nie odpowiedzi!   Oszczędność to najlepszy wybór, a więc nie czekaj - skontaktuj się z nami!';
const websiteAddress = 'http://raiden.pl/#/';
const arrowColor = 'red';

const Energetic = () => {
  return (
    <Division
      imgOne={energeticMpr}
      imgTwo={energeticBg}
      logo={LogoRaiden}
      topText={mprDivision}
      bottomText={raidenDivision}
      linkTo={websiteAddress}
      arrowColor={arrowColor}
    />
  );
};

export default Energetic;
