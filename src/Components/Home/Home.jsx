import React, { Component } from 'react';
import './Home.scss';
import firstSectionImg from '../../assets/sectionFirst.jpg';
import secondSectionImg from '../../assets/sectionSecond.jpg';
import thirdSectionImg from '../../assets/sectionThird.jpg';
import forthSectionImg from '../../assets/sectionForth.jpg';

const itemList = [
  {
    index: 1,
    src: firstSectionImg,
    alt: 'FirstSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder first',
    c2: 'section firsta',
  },
  {
    index: 1,
    src: secondSectionImg,
    alt: 'secondtSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder second',
    c2: 'section seconda',
  },
  {
    index: 1,
    src: thirdSectionImg,
    alt: 'thirdSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder third',
    c2: 'section thirda',
  },
  {
    index: 1,
    src: forthSectionImg,
    alt: 'forthSectionImg',
    text: 'testowy',
    letter: 'M',
    buttonitle: 'O nas',
    cName: 'letterHolder forth',
    c2: 'section fortha',
  },
];

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        {itemList.map((obj) => (
          <div className="section">
            <img src={obj.src} alt="firstSectionImg" />
            <div className="textSetion">
              <div className={obj.cName}></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Home;
