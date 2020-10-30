import React from 'react';
import Division from '../../common/division';
import Raiden from '../../assets/raidenBg.jpg';
import LogoRaiden from '../../assets/RaidenLogo.png'
import energeticMpr from '../../assets/energyMpr.jpg'

const mprDivision="W ramach dywizji energetycznej posiadamy wykwalifikowany zespół niezależnych specjalistów i doradców energetycznych, którzy zajmują się sprzedażą energii od topowych firm.";
const raidenDivision="Chcesz zmniejszyć rachunki za prąd w swojej firmie? Chciałbyś spróbować sił w pracy handlowca lub masz do nas jakieś pytania? Chętnie udzielimy Ci na nie odpowiedzi!   Oszczędność to najlepszy wybór, a więc nie czekaj - skontaktuj się z nami!";
const websiteAddress="http://raiden.pl/#/";
const arrowColor="red";

const Energetic = () => {

      return (
        <Division
          imgOne={energeticMpr}
          imgTwo={Raiden} 
          logo={LogoRaiden} 
          topText={mprDivision} 
          bottomText={raidenDivision}
          linkTo={websiteAddress}
          arrowColor={arrowColor}
     />
    );
}

export default Energetic;