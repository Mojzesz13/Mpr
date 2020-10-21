import React from 'react';
import './Energetic.scss';
import ImgTwo from '../../assets/raidenB.jpg';
import ImgOne from '../../assets/raidenA.jpg';
import logoRaiden from '../../assets/RaidenLogo.png'
import Button from '../../common/button';
import Arrow from '../../common/arrow';


const Energetic = () => {

  const handleOnHover =()=> {
    let parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    if (parent.className.indexOf('skewed') !== -1) {
        skewHack = 1000;
    }
    parent.addEventListener('mousemove', function(event) {
        delta = (event.clientX - window.innerWidth / 2) * 1.3;
        handle.style.left = event.clientX + delta + 'px';
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
  }
  
    return (
     <div className="test" onMouseEnter={handleOnHover}>
         <div className="splitview skewed">
          <div className="panel bottom">
            <div className="content">
              <img className="bg-img" src={ImgOne} alt="Original"/>
                <div className="text-holder">
                <p>
                  W ramach tej dywizji posiadamy wykwalifikowany zespół niezależnych specjalistów i doradców
                  energetycznych, którzy zajmują się sprzedażą energii od topowych firm.
                </p>
              </div>
              <div className="button-holder">
                <Button path="/" text="POWRÓT"/>
              </div>
              </div>
            </div>
          <div className="panel top">
            <div className="content">
              <img className="bg-img" src={ImgTwo} alt="Duotone"/>
              <div className="text-holder">
                <p>
                  W ramach dywizji energetycznej posiadamy wykwalifikowany zespół niezależnych specjalistów i doradców
                  energetycznych, którzy zajmują się sprzedażą energii od topowych firm.
                </p>
              </div>
              <a href="http://raiden.pl/#/">
                <div className="logo-holder">
                  <img src={logoRaiden} alt="logo-raiden"/>
                  <Arrow/>
                </div>
              </a>
            </div>
          </div>
          <div className="handle"/>
        </div>
    </div>
    );
  }

export default Energetic;


// import React, { Component, useEffect } from 'react';
// import './Coaching.scss';
// import ImgOne from '../../assets/contacBackground.jpg';
// import ImgTwo from '../../assets/STRONA1.jpg';

// const Coaching =()=> {


//   useEffect (()=> { 
//     document.addEventListener('DOMContentLoaded', function() {
//        var parent = document.querySelector('.splitview'),
//            topPanel = parent.querySelector('.top'),
//            handle = parent.querySelector('.handle'),
//            skewHack = 0,
//            delta = 0;
   
//        if (parent.className.indexOf('skewed') !== -1) {
//            skewHack = 1000;
//        }
   
//        parent.addEventListener('mousemove', function(event) {
//            delta = (event.clientX - window.innerWidth / 2) * 0.5;
//            handle.style.left = event.clientX + delta + 'px';
//            topPanel.style.width = event.clientX + skewHack + delta + 'px';
//        });
//      },[this])
//   })

  
//     return (
//      <div className="test" >
//          <div className="splitview skewed">
//           <div className="panel bottom">
//             <div className="content">
//               <img src={ImgOne} alt="Original"/>
//               </div>
//             </div>
//           <div className="panel top">
//             <div className="content">
//               <img src={ImgTwo} alt="Duotone"/>
//             </div>
//           </div>
//           <div className="handle"/>
//         </div>
//     </div>
//     );
// }

// export default Coaching;