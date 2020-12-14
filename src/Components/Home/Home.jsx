import React, { useState } from 'react';
import './Home.scss';
import firstSectionImgA from '../../assets/sectionFirstA.jpg';
import firstSectionImgB from '../../assets/sectionFirstB.jpg';
import secondSectionImgA from '../../assets/sectionSecondA.jpg';
import secondSectionImgB from '../../assets/sectionSecondB.jpg';
import thirdSectionImgA from '../../assets/sectionThirdA.jpg';
import thirdSectionImgB from '../../assets/sectionThirdB.jpg';
import forthSectionImgA from '../../assets/sectionForthA.jpg';
import forthSectionImgB from '../../assets/sectionForthB.jpg';
import Button from '../../common/button';

const Home = ({ setTitle, isTablet }) => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isHoveredForth, setIsHoveredForth] = useState(false);

  const handleOnMouseEnterFirst = (e) => {
    e.preventDefault();
    setIsHoveredFirst(true);
  };
  const handleOnMouseLeaveFirst = (e) => {
    e.preventDefault();
    setIsHoveredFirst(false);
  };
  const handleOnMouseEnterSecond = (e) => {
    e.preventDefault();
    setIsHoveredSecond(true);
  };
  const handleOnMouseLeaveSecond = (e) => {
    e.preventDefault();
    setIsHoveredSecond(false);
  };
  const handleOnMouseEnterThird = (e) => {
    e.preventDefault();
    setIsHoveredThird(true);
  };
  const handleOnMouseLeaveThird = (e) => {
    e.preventDefault();
    setIsHoveredThird(false);
  };
  const handleOnMouseEnterForth = (e) => {
    e.preventDefault();
    setIsHoveredForth(true);
  };
  const handleOnMouseLeaveForth = (e) => {
    e.preventDefault();
    setIsHoveredForth(false);
  };

  const itemList = [
    {
      index: 1,
      srcA: firstSectionImgA,
      srcB: firstSectionImgB,
      alt: 'FirstSectionImg',
      text:
        '  MPR to więcej niż marketing. To indywidualne podejście, dedykowana strategia i innowacyjność w branży. Jeśli prowadzisz firmę, możemy zaoferować Ci przeszkolone zespoły sprzedażowe.',
      buttonTitle: 'O nas',
      path: '/aboutus',
      cNameA: 'letter-holder first-a',
      cNameB: 'letter-holder first-b',
      state: isHoveredFirst,
      Enter: handleOnMouseEnterFirst,
      Leave: handleOnMouseLeaveFirst,
    },
    {
      index: 2,
      srcA: secondSectionImgA,
      srcB: secondSectionImgB,
      alt: 'secondtSectionImg',
      text:
        ' Profesjonalizm to coś, co nas wyróżnia. Oferujemy wsparcie sprzedażowe firmom z każdego sektora gospodarki. Brandy działające w ramach grupy to wachlarz kilku dywizji - od fotowoltaicznej po finansową. Działalność naszej grupy daje realny potencjał rozwoju każdej branży!',
      buttonTitle: 'Dywizje',
      path: '/divisions',
      cNameA: 'letter-holder second-a',
      cNameB: 'letter-holder second-b',
      state: isHoveredSecond,
      Enter: handleOnMouseEnterSecond,
      Leave: handleOnMouseLeaveSecond,
    },
    {
      index: 3,
      srcA: thirdSectionImgA,
      srcB: thirdSectionImgB,
      alt: 'thirdSectionImg',
      text:
        '  Nasz zespół tworzą wyspecjalizowani doradcy. To oni skutecznie wspierają klientów w osiąganiu celów i każdego dnia z entuzjazmem i pełnym zaangażowaniem podejmują biznesowe wyzwania.',
      buttonTitle: 'Liczby',
      path: '/testimonial',
      cNameA: 'letter-holder third-a',
      cNameB: 'letter-holder third-b',
      state: isHoveredThird,
      Enter: handleOnMouseEnterThird,
      Leave: handleOnMouseLeaveThird,
    },
    {
      index: 4,
      srcA: forthSectionImgA,
      srcB: forthSectionImgB,
      alt: 'forthSectionImg',
      text:
        ' Działając w coraz większej ilości miast, dostarczymy Ci nie tylko rezultaty, ale także będziemy Twoim partnerem w działaniach związanych z budowaniem i rozwojem Twojej marki.',
      buttonTitle: 'Kontakt',
      path: '/contact',
      cNameA: 'letter-holder forth-a',
      cNameB: 'letter-holder forth-b',
      state: isHoveredForth,
      Enter: handleOnMouseEnterForth,
      Leave: handleOnMouseLeaveForth,
    },
  ];

  return (
    <div className='home-container' id='home'>
      {itemList.map((obj) => (
        <div
          key={obj.index}
          className='main-section'
          onMouseEnter={obj.Enter}
          onMouseLeave={obj.Leave}
        >
          <img src={obj.state ? obj.srcA : obj.srcB} alt={obj.alt} />
          <div className='letter-section'>
            <div className={obj.cNameA} />
            <div className={obj.cNameB} />
          </div>
          <div className='text-section'>
            <p>{obj.text}</p>
          </div>
          <div className='btn-section'>
            <Button
              path={obj.path}
              text={obj.buttonTitle}
              setTitle={setTitle}
              isTablet={isTablet}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
