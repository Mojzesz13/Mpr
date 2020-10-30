import React from 'react';
import Division from '../../common/division';
import salesBg from '../../assets/saleBg.jpg'
import salesMpr from '../../assets/saleMpr.jpg'

const mprDivision="Robisz co możesz, żeby sprzedawać jeszcze więcej, ale masz wrażenie, że konkurencja Cię wyprzedza? W dywizji sprzedażowej to my skupiamy się na połączeniu Twojego produktu lub usługi z odpowiednią grupą docelową. Dzięki temu Twoja firma może osiągać lepsze wyniki i coraz bardziej się rozwijać."
const saleDivision="Jako grupa MPR świadczymy również profesjonalne usługi szkoleniowe dla przedstawicieli handlowych, których już zatrudniasz w swojej firmie. Skontaktuj się z nami, a przedstawimy Ci najlepszą ofertę.";

const Sale = () => {
    return (
     <Division
      imgTwo={salesBg} 
      topText={mprDivision} 
      bottomText={saleDivision}
      imgOne={salesMpr}
     />
    );
}
export default Sale;