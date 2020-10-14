import React, { Component } from 'react';
import './AboutUs.scss';
import Button from './../../common/button'
import firstImgB from '../../assets/aboutUsFirstB.jpg'
import firstImgA from '../../assets/aboutUsFirstA.jpg'


const aboutUsText = "Świadczymy usługi dla firm z różnych sektorów rynku. Posiadamy wieloletnie doświadczenie w realizowaniu projektów dla klientów z całej Polski. Jeśli prowadzisz firmę lub organizację charytatywną, połączymy Cię z Twoją grupą docelową. Dysponujemy profesjonalnymi grupami sprzedażowymi, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Nasza firma będzie najlepszym rozwiązaniem dla przedsiębiorstw, których specyfika wymaga zastosowania indywidualnego podejścia. Idealnie sprawdzamy się w: - organizacji sieci sprzedaży dla dostawców usług i klientów korporacyjnych - fundraisingu dla fundacji  i organizacji pozarządowych - kreowaniu wizerunku  i produkcji  materiałów promocyjnych - świadczeniu usług  finansowych,  ubezpieczeniowych i księgowo-prawnych Jeśli prowadzisz firmę lub organizację charytatywną, połączymy Cię z Twoją grupą docelową. Posiadamy profesjonalne grupy sprzedażowe, dzięki którym dostarczymy Twoje produkty lub usługi do wybranych przez Ciebie odbiorców. Działając w coraz większej ilości miast w Polsce nie tylko dostarczymy Ci pożądane rezultaty, ale także będziemy Twoim partnerem w działaniach związanych z budowaniem marki oraz rozwojem Twojej firmy."

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
        <div className="headerAboutUs section">
          <div 
            onMouseEnter={this.handleOnMouseEnter}
            onMouseLeave={this.handleOnMouseLeave} 
            className="headerContent sectionBox firstBox">
              <img src={this.state.isHovered ? firstImgB  : firstImgA} alt={"firstImg"} />
           
              <div className="letterSection">
              <div className="letterHolder firstA"></div>
              <div className="letterHolder firstB"></div>
            </div>
           
            <div className="btnSection">
              <Button path="/" text="POWRÓT" width="15rem"/>
            </div>
           
           
           
            </div>
          <div className="headerContent sectionBox"></div>
          <div className="headerContent sectionBox"></div>
        </div>
        <div className="sloganContainer">
          <h1>Idealnie sprawdzamy się w:</h1>
        </div>
        <div className="aboutUsContent section">
          <div className="contentBox sectionBox"></div>
          <div className="contentBox sectionBox"></div>
          <div className="contentBox sectionBox"></div>
          <div className="contentBox sectionBox"></div>
          <div className="contentBox sectionBox"></div>
          <div className="contentBox sectionBox"></div>
        </div>
      </div>
    );
  }
}
export default Aboutus;
