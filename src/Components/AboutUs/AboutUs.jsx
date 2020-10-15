import React, { Component } from 'react';
import './AboutUs.scss';
import HeaderAboutUs from './headerAboutUs';
import BodyAboutUs from './bodyAboutUs';

const aboutUsText = "Świadczymy usługi dla firm z różnych sektorów rynku. Posiadamy wieloletnie doświadczenie w realizowaniu projektów dla klientów z całej Polski. Jeśli prowadzisz firmę lub organizację charytatywną, połączymy Cię z Twoją grupą docelową. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasza firma będzie najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia."
class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    }
  }

  handleOnMouseEnter = (e) => {
    e.preventDefault();
    this.setState({ isHovered: true });
  };
  handleOnMouseLeave = (e) => {
    e.preventDefault();
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div className="aboutUsContainer" id="Aboutus">
        <HeaderAboutUs 
        handleOnMouseEnter={this.handleOnMouseEnter}
        handleOnMouseLeave={this.handleOnMouseLeave}
        isHovered={this.state.isHovered}
        aboutUsText={aboutUsText}
        />
        <div className="sloganContainer">
          <h1>Idealnie sprawdzamy się w:</h1>
        </div>
        <BodyAboutUs/>
      </div>
    );
  }
}
export default Aboutus;
