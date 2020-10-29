import React from 'react';
import Division from '../../common/division';
import sunSolar from '../../assets/sunSolarbg.jpg'

const mprDivision="Zatrudniamy specjalistów doskonale znających rynek finansowy i posiadających doświadczenie w zakresie inwestowania. Nasi doradcy potrafią odpowiednio przeanalizować kondycję finansową przedsiębiorstwa oraz posiadają wiedzę na temat rynków finansowych. Dzięki temu jesteśmy w stanie wskazać najlepsze rozwiązania i kierunki, które będą korzystne finansowo dla Twojego przedsiębiorstwa."
const saleDivision="Obszar naszych działań to kredyty gotówkowe, kredyty inwestycyjne i hipoteczne, leasingi, reinwestowanie kredytów, oszczędności długoterminowe, przyszła emerytura, konta oszczędnościowe i biznesowe.";

const Financial = () => {
    return (
     <Division
      imgTwo={sunSolar} 
      topText={mprDivision} 
      bottomText={saleDivision}
     />
    );
}
export default Financial;


// https://www.youtube.com/watch?v=a7ICxQblYrM&ab_channel=OnlineTutorials

// dywizje

// http://jsfiddle.net/ndud4ff7/
// https://codepen.io/b-alerta/pen/OvdeYR
// https://stackoverflow.com/questions/26558137/how-to-make-a-drag-bar-to-change-the-vertical-height
