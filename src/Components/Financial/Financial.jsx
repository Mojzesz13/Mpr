import React from 'react';
import Division from '../../common/division';
import financialMpr from '../../assets/financialMpr.jpg'
import financialBg from '../../assets/financialBg.jpg'

const mprDivision="Zatrudniamy specjalistów doskonale znających rynek finansowy i posiadających doświadczenie w zakresie inwestowania. Nasi doradcy potrafią odpowiednio przeanalizować kondycję finansową przedsiębiorstwa oraz posiadają wiedzę na temat rynków finansowych. Dzięki temu jesteśmy w stanie wskazać najlepsze rozwiązania i kierunki, które będą korzystne finansowo dla Twojego przedsiębiorstwa."
const saleDivision="Obszar naszych działań to kredyty gotówkowe, kredyty inwestycyjne i hipoteczne, leasingi, reinwestowanie kredytów, oszczędności długoterminowe, przyszła emerytura, konta oszczędnościowe i biznesowe.";

const Financial = () => {
    return (
     <Division
      imgOne={financialMpr}
      imgTwo={financialBg} 
      topText={mprDivision} 
      bottomText={saleDivision}
     />
    );
}
export default Financial;
