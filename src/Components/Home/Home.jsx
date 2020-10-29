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

const Home = () =>  {
  const[isHovered, setIsHovered] =useState({
    first:false,
    second: false,
    third: false,
    forth: false
  });

  const handleOnMouseEnterFirst = (e) => {
    e.preventDefault();
    setIsHovered({ ...isHovered,
      first: true 
    });
  };
  const handleOnMouseLeaveFirst = (e) => {
    e.preventDefault();
     setIsHovered({ ...isHovered,
      first: false 
    });
  };
  const handleOnMouseEnterSecond = (e) => {
    e.preventDefault();
    setIsHovered({ ...isHovered,
      second: true 
    });
  };
  const handleOnMouseLeaveSecond = (e) => {
    e.preventDefault();
     setIsHovered({ ...isHovered,
      second: false 
    });
  };
  const handleOnMouseEnterThird = (e) => {
    e.preventDefault();
    setIsHovered({ ...isHovered,
      third: true 
    });
  };
  const handleOnMouseLeaveThird = (e) => {
        e.preventDefault();
     setIsHovered({ ...isHovered,
      third: false 
    });
  };
  const handleOnMouseEnterForth = (e) => {
    e.preventDefault();
    setIsHovered({ ...isHovered,
      forth: true 
    });
  };
  const handleOnMouseLeaveForth = (e) => {
        e.preventDefault();
     setIsHovered({ ...isHovered,
      forth: false 
    });
  };


    const itemList = [
      {
        index: 1,
        srcA: firstSectionImgA,
        srcB: firstSectionImgB,
        alt: 'FirstSectionImg',
        text:
          '  Mpr to więcej niż marketing. To indywidualne podejście, dedykowana strategia i innowacyjność w branży, która przekłada się na pewnezyski dla Twojego biznesu. Jeśli prowadzisz firmę, dostarczymy Twoje produkty lub usługi do wybranej przez Ciebie grupy docelowej.',
        buttonTitle: 'test',
        path: '/contact',
        cNameA: 'letter-holder first-a',
        cNameB: 'letter-holder first-b',
        state: isHovered.first,
        Enter: handleOnMouseEnterFirst,
        Leave: handleOnMouseLeaveFirst,
      },
      {
        index: 2,
        srcA: secondSectionImgA,
        srcB: secondSectionImgB,
        alt: 'secondtSectionImg',
        text:
          ' Profesjonalizm to coś, co nas wyróżnia. Oferujemy wsparcie sprzedażowe firmom z każdego sektora gospodarki. Brandy działające w ramach grupy to wachlarz kilku dywizji - od fotowoltaicznej pointeraktywną. Działalność naszej grupy daje realny potencjałrozwoju każdej branży!',
        buttonTitle: 'test2',
        path: '/contact',
        cNameA: 'letter-holder second-a',
        cNameB: 'letter-holder second-b',
        state: isHovered.second,
        Enter: handleOnMouseEnterSecond,
        Leave: handleOnMouseLeaveSecond,
      },
      {
        index: 3,
        srcA: thirdSectionImgA,
        srcB: thirdSectionImgB,
        alt: 'thirdSectionImg',
        text:
          '  Nasz zespół tworzą wyspecjalizowani doradcy. To oni skutecznie wspierają naszych klientów w osiąganiu celów i każdego dnia z entuzjazmem i pełnym zaangażowaniem podejmują biznesowe wyzwania.',
        buttonTitle: 'test3',
        path: '/contact',
        cNameA: 'letter-holder third-a',
        cNameB: 'letter-holder third-b',
        state: isHovered.third,
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
        buttonTitle: 'Kontat',
        path: '/contact',
        cNameA: 'letter-holder forth-a',
        cNameB: 'letter-holder forth-b',
        state: isHovered.forth,
        Enter: handleOnMouseEnterForth,
        Leave: handleOnMouseLeaveForth,
      },
    ];
    
    return (
      <div className="home-container" id="home">
        {itemList.map((obj) => (
          <div
            key={obj.index}
            onMouseEnter={obj.Enter}
            onMouseLeave={obj.Leave}
            className="main-section"
          >
            <img src={obj.state ? obj.srcA : obj.srcB} alt={obj.alt} />
            <div className="letter-section">
              <div className={obj.cNameA}></div>
              <div className={obj.cNameB}></div>
            </div>
            <div className="text-section">
              <p>{obj.text}</p>
            </div>
            <div className="btn-section">
              <Button path={obj.path} text={obj.buttonTitle} />
            </div>
          </div>
        ))}
      </div>
    );
}
export default Home;
