import React from 'react';
import Division from '../../common/division';
import sunSolar from '../../assets/sunSolarbg.jpg'

const mprDivision="Robisz co możesz, żeby sprzedawać jeszcze więcej, ale masz wrażenie, że konkurencja Cię wyprzedza? W dywizji sprzedażowej to my skupiamy się na połączeniu Twojego produktu lub usługi z odpowiednią grupą docelową. Dzięki temu Twoja firma może osiągać lepsze wyniki i coraz bardziej się rozwijać."
const saleDivision="Jako grupa MPR świadczymy również profesjonalne usługi szkoleniowe dla przedstawicieli handlowych, których już zatrudniasz w swojej firmie. Skontaktuj się z nami, a przedstawimy Ci najlepszą ofertę.";

const Sale = () => {
    return (
     <Division
      imgTwo={sunSolar} 
      topText={mprDivision} 
      bottomText={saleDivision}
     />
    );
}
export default Sale;