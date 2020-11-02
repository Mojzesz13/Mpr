import React from 'react';
import Button from './../../common/button'
import firstImgB from '../../assets/aboutUsFirstB.jpg'
import firstImgA from '../../assets/aboutUsFirstA.jpg'

const HeaderAboutUs = ({isHovered, handleOnMouseEnter, handleOnMouseLeave, aboutUsText }) => {
 
    return (
        <div className="header-about-us main-section">
          <div 
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave} 
            className="box-section first-box">
              <img src={isHovered ? firstImgB : firstImgA} alt={"first-img"} />
              <div className="letter-section">
                <div className="letter-holder first-a"></div>
                <div className="letter-holder first-b"></div>
             </div>
             <div className="btn-section">
               <Button path="/" text="POWRÓT" width="15rem"/>
             </div>
            </div>
          <div className="box-section second-box">
              <p>{aboutUsText}</p></div>
          <div className="box-section third-box"></div>
        </div>
    );
}
export default HeaderAboutUs;









