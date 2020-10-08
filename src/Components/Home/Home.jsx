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
        {/* {itemList.map((obj) => (
          <div
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave}
            className="section"
          >
            <img
              src={this.state.isHovered ? obj.srcA : obj.srcB}
              alt={obj.alt}
            />
            <div className="textSetion">
              <div className={obj.cName}></div>
            </div>
          </div>
        ))} */}
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
          <div className="textSetion">
            <div className="letterHolder firstA"></div>
            <div className="letterHolder firstB"></div>
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
          <div className="textSetion">
            <div className="letterHolder secondA"></div>
            <div className="letterHolder secondB"></div>
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
          <div className="textSetion">
            <div className="letterHolder thirdA"></div>
            <div className="letterHolder thirdB"></div>
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
          <div className="textSetion">
            <div className="letterHolder forthA"></div>
            <div className="letterHolder forthB"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
