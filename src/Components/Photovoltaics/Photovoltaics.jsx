import React from 'react';
import Division from '../../common/division';
import './Photovoltaics.scss';
import sunSolar from '../../assets/sunSolarbg.jpg'
import logo from '../../assets/sunSolarLogo.png'

const mprDivision="mprDivision";
const sunSolarDivision="sunSolarDivision";
const websiteAddress="https://sunsolar.com.pl/"
const arrowColor="white"

const Photovoltaics = () => {
    return (
     <Division
      imgTwo={sunSolar} 
      logo={logo} 
      topText={mprDivision} 
      bottomText={sunSolarDivision}
      linkTo={websiteAddress}
      arrowColor={arrowColor}
     />
    );
}
export default Photovoltaics;
