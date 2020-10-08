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

const itemList = [
  {
    index: 1,
    srcA: firstSectionImgA,
    srcB: firstSectionImgB,
    alt: 'FirstSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder first',
    state: 'isHoveredFirst',
  },
  {
    index: 1,
    srcA: secondSectionImgA,
    srcB: secondSectionImgB,
    alt: 'secondtSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder second',
    state: 'isHoveredSecond',
  },
  {
    index: 1,
    srcA: thirdSectionImgA,
    srcB: thirdSectionImgB,
    alt: 'thirdSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder third',
    state: 'isHoveredThird',
  },
  {
    index: 1,
    srcA: forthSectionImgA,
    srcB: forthSectionImgB,
    alt: 'forthSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder forth',
    state: 'isHoveredForth',
  },
];

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

  handleOnMouseEnterFirst = () => {
    this.setState({ isHoveredFirst: true });
  };

  handleOnMouseLeaveFirst = () => {
    this.setState({ isHoveredFirst: false });
  };

  handleOnMouseEnterSecond = () => {
    this.setState({ isHoveredSecond: true });
  };

  handleOnMouseLeaveSecond = () => {
    this.setState({ isHoveredSecond: false });
  };
  handleOnMouseEnterThird = () => {
    this.setState({ isHoveredThird: true });
  };

  handleOnMouseLeaveThird = () => {
    this.setState({ isHoveredThird: false });
  };
  handleOnMouseEnterForth = () => {
    this.setState({ isHoveredForth: true });
  };

  handleOnMouseLeaveForth = () => {
    this.setState({ isHoveredForth: false });
  };

  render() {
    return (
      <div className="homeContainer" id="home">
        <div
          onMouseEnter={this.handleOnMouseEnterFirst}
          onMouseLeave={this.handleOnMouseLeaveFirst}
          className="section"
        >
          <img
            src={
              this.state.isHoveredFirst ? firstSectionImgA : firstSectionImgB
            }
            alt="test"
          />

          <div className="letterSection">
            <div className="letterHolder firstA"></div>
            <div className="letterHolder firstB"></div>
          </div>
          <div className="textSection">
            <p className="test2">
              Mpr to więcej niż marketing. To indywidualne podejście, dedykowana
              strategia i innowacyjność w branży, która przekłada się na pewne
              zyski dla Twojego biznesu. Jeśli prowadzisz firmę, dostarczymy
              Twoje produkty lub usługi do wybranej przez Ciebie grupy
              docelowej.
            </p>
          </div>
          <div className="btnSection">
            <Button path="/contact" text="kontakt" />
          </div>
        </div>

        <div
          onMouseEnter={this.handleOnMouseEnterSecond}
          onMouseLeave={this.handleOnMouseLeaveSecond}
          className="section"
        >
          <img
            src={
              this.state.isHoveredSecond ? secondSectionImgA : secondSectionImgB
            }
            alt="test"
          />
          <div className="letterSection">
            <div className="letterHolder secondA"></div>
            <div className="letterHolder secondB"></div>
          </div>
          <div className="textSection">
            <p className="test2">
              Profesjonalizm to coś, co nas wyróżnia. Oferujemy wsparcie
              sprzedażowe firmom z każdego sektora gospodarki. Brandy działające
              w ramach grupy to wachlarz kilku dywizji - od fotowoltaicznej po
              interaktywną. Działalność naszej grupy daje realny potencjał
              rozwoju każdej branży!
            </p>
          </div>
          <div className="btnSection">
            <Button path="/contact" text="kontakt" />
          </div>
        </div>
        <div
          onMouseEnter={this.handleOnMouseEnterThird}
          onMouseLeave={this.handleOnMouseLeaveThird}
          className="section"
        >
          <img
            src={
              this.state.isHoveredThird ? thirdSectionImgA : thirdSectionImgB
            }
            alt="test"
          />
          <div className="letterSection">
            <div className="letterHolder thirdA"></div>
            <div className="letterHolder thirdB"></div>
          </div>
          <div className="textSection">
            <p className="test2">
              Nasz zespół tworzą wyspecjalizowani doradcy. To oni skutecznie
              wspierają naszych klientów w osiąganiu celów i każdego dnia z
              entuzjazmem i pełnym zaangażowaniem podejmują biznesowe wyzwania.
            </p>
          </div>
          <div className="btnSection">
            <Button path="/contact" text="kontakt" />
          </div>
        </div>
        <div
          onMouseEnter={this.handleOnMouseEnterForth}
          onMouseLeave={this.handleOnMouseLeaveForth}
          className="section"
        >
          <img
            src={
              this.state.isHoveredForth ? forthSectionImgA : forthSectionImgB
            }
            alt="test"
          />
          <div className="letterSection">
            <div className="letterHolder forthA"></div>
            <div className="letterHolder forthB"></div>
          </div>
          <div className="textSection">
            <p className="test2">
              Działając w coraz większej ilości miast, dostarczymy Ci nie tylko
              rezultaty, ale także będziemy Twoim partnerem w działaniach
              związanych z budowaniem i rozwojem Twojej marki.
            </p>
          </div>
          <div className="btnSection">
            <Button path="/contact" text="kontakt" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
