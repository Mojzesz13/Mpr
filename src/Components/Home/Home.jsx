import React, { Component } from 'react';
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveredFirst: false,
      isHoveredSecond: false,
      isHoveredThird: false,
      isHoveredForth: false,
    };
 }

  handleOnMouseEnterFirst = (e) => {
    e.preventDefault();
    this.setState({ isHoveredFirst: true });
  };
  handleOnMouseLeaveFirst = (e) => {
    e.preventDefault();
    this.setState({ isHoveredFirst: false });
  };
  handleOnMouseEnterSecond = (e) => {
    e.preventDefault();
    this.setState({ isHoveredSecond: true });
  };
  handleOnMouseLeaveSecond = (e) => {
    e.preventDefault();
    this.setState({ isHoveredSecond: false });
  };
  handleOnMouseEnterThird = (e) => {
    e.preventDefault();
    this.setState({ isHoveredThird: true });
  };
  handleOnMouseLeaveThird = (e) => {
    e.preventDefault();
    this.setState({ isHoveredThird: false });
  };
  handleOnMouseEnterForth = (e) => {
    e.preventDefault();
    this.setState({ isHoveredForth: true });
  };
  handleOnMouseLeaveForth = (e) => {
    e.preventDefault();
    this.setState({ isHoveredForth: false });
  };

  render() {
    const itemList = [
      {
        index: 1,
        srcA: firstSectionImgA,
        srcB: firstSectionImgB,
        alt: 'FirstSectionImg',
        text:
          '  Mpr to więcej niż marketing. To indywidualne podejście, dedykowana strategia i innowacyjność w branży, która przekłada się na pewnezyski dla Twojego biznesu. Jeśli prowadzisz firmę, dostarczymy Twoje produkty lub usługi do wybranej przez Ciebie grupydocelowej.',
        buttonTitle: 'test',
        path: '/contact',
        cNameA: 'letterHolder firstA',
        cNameB: 'letterHolder firstB',
        state: this.state.isHoveredFirst,
        Enter: this.handleOnMouseEnterFirst,
        Leave: this.handleOnMouseLeaveFirst,
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
        cNameA: 'letterHolder secondA',
        cNameB: 'letterHolder secondB',
        state: this.state.isHoveredSecond,
        Enter: this.handleOnMouseEnterSecond,
        Leave: this.handleOnMouseLeaveSecond,
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
        cNameA: 'letterHolder thirdA',
        cNameB: 'letterHolder thirdB',
        state: this.state.isHoveredThird,
        Enter: this.handleOnMouseEnterThird,
        Leave: this.handleOnMouseLeaveThird,
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
        cNameA: 'letterHolder forthA',
        cNameB: 'letterHolder forthB',
        state: this.state.isHoveredForth,
        Enter: this.handleOnMouseEnterForth,
        Leave: this.handleOnMouseLeaveForth,
      },
    ];
    return (
      <div className="homeContainer" id="home">
        {itemList.map((obj) => (
          <div
            key={obj.index}
            onMouseEnter={obj.Enter}
            onMouseLeave={obj.Leave}
            className="mainSection"
          >
            <img src={obj.state ? obj.srcA : obj.srcB} alt={obj.alt} />
            <div className="letterSection">
              <div className={obj.cNameA}></div>
              <div className={obj.cNameB}></div>
            </div>
            <div className="textSection">
              <p>{obj.text}</p>
            </div>
            <div className="btnSection">
              <Button path={obj.path} text={obj.buttonTitle} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
