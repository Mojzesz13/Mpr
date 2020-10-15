import React, { Component } from 'react';
import Button from './../../common/button'
import firstImgB from '../../assets/aboutUsFirstB.jpg'
import firstImgA from '../../assets/aboutUsFirstA.jpg'

class HeaderAboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {isHovered, handleOnMouseEnter, handleOnMouseLeave, aboutUsText } = this.props
    
    return (
        <div className="headerAboutUs mainSection">
          <div 
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave} 
            className="boxSection firstBox">
              <img src={isHovered ? firstImgB  : firstImgA} alt={"firstImg"} />
              <div className="letterSection">
                <div className="letterHolder firstA"></div>
                <div className="letterHolder firstB"></div>
             </div>
             <div className="btnSection">
               <Button path="/" text="POWRÓT" width="15rem"/>
             </div>
            </div>
          <div className="boxSection secondBox">
              <p>{aboutUsText}</p></div>
          <div className="boxSection thirdBox"></div>
        </div>
    );
  }
}
export default HeaderAboutUs;









