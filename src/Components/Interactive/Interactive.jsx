import React from 'react';
import Division from '../../common/division';
import interactiveMpr from '../../assets/interactiveMpr.jpg';
import interactiveBg from '../../assets/interactiveBg.jpg';

const mprDivision =
  'Zatrudniamy specjalistów doskonale znających rynek finansowy i posiadających doświadczenie w zakresie inwestowania. Nasi doradcy potrafią odpowiednio przeanalizować kondycję finansową przedsiębiorstwa oraz posiadają wiedzę na temat rynków finansowych. Dzięki temu jesteśmy w stanie wskazać najlepsze rozwiązania i kierunki, które będą korzystne finansowo dla Twojego przedsiębiorstwa.';
const interactiveDivision =
  'Obszar naszych działań to kredyty gotówkowe, kredyty inwestycyjne i hipoteczne, leasingi, reinwestowanie kredytów, oszczędności długoterminowe, przyszła emerytura, konta oszczędnościowe i biznesowe.';

const Interactive = () => {
  return (
    <Division
      imgOne={interactiveMpr}
      imgTwo={interactiveBg}
      topText={mprDivision}
      bottomText={interactiveDivision}
    />
  );
};
export default Interactive;
