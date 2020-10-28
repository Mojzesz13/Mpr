import React from 'react';
import Division from '../../common/division';
import Raiden from '../../assets/raidenBg.jpg';
import LogoRaiden from '../../assets/RaidenLogo.png'

const mprDivision="W ramach dywizji energetycznej posiadamy wykwalifikowany zespół niezależnych specjalistów i doradców energetycznych, którzy zajmują się sprzedażą energii od topowych firm.";
const raidenDivision="W ramach dywizji energetycznej posiadamy wykwalifikowany zespół niezależnych specjalistów i doradców energetycznych, którzy zajmują się sprzedażą energii od topowych firm.";
const websiteAddress="http://raiden.pl/#/";
const arrowColor="red";

const Energetic = () => {

      return (
        <Division
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