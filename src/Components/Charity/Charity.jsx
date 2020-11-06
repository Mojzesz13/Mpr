import React from 'react';
import Division from '../../common/division';
import charityBg from '../../assets/charityBg.jpg';
import charityMpr from '../../assets/charityMpr.jpg';

const mprDivision =
  'Bez nowych darczyńców nie będziesz mógł zwiększać przychodów, ani rozwijać swojej fundacji, więc niezależnie od tego czy chcesz pozyskać darczyńców indywidualnych czy biznesowych, możesz liczyć na naszą pomoc w tej kwestii.';
const fundraisinDivision =
  'Fundrasing oznacza dla nas profesjonalne i systematyczne pozyskiwanie finansowania na rzecz organizacji non-profit. Posiadamy wieloletnie doświadczenie w pozyskiwaniu darczyńców dla różnych fundacji charytatywnych, co stawia nas w czołówce polskich firm zajmujących się fundrasingiem.';

const Charity = () => {
  return (
    <Division
      imgOne={charityMpr}
      imgTwo={charityBg}
      topText={mprDivision}
      bottomText={fundraisinDivision}
    />
  );
};
export default Charity;
