import React, { Component } from 'react';
import './Coaching.scss';
import ImgOne from '../../assets/contacBackground.jpg';
import ImgTwo from '../../assets/STRONA1.jpg';

class Coaching extends Component {

  render (
   handleOnHover =()=> {
    let parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    if (parent.className.indexOf('skewed') !== -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = event.clientX + delta + 'px';
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
  }
  ) {
    return (
     <div className="test" onMouseEnter={handleOnHover}>
         <div className="splitview skewed">
          <div className="panel bottom">
            <div className="content">
              <img src={ImgOne} alt="Original"/>
              </div>
            </div>
          <div className="panel top">
            <div className="content">
              <img src={ImgTwo} alt="Duotone"/>
            </div>
          </div>
          <div className="handle"/>
        </div>
    </div>
    );
  }
}

export default Coaching;
