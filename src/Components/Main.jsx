import React, { useState, useEffect }  from 'react';
import './Main.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import HamburgerMenu from './HamburgeMenu/HamburgerMenu';
import AboutUs from './AboutUs/AboutUs';
import Sale from './Sale/Sale';
import Fundraising from './Fundraising/Fundraising';
import Energetic from './Energetic/Energetic';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Logo from './Logo/Logo';
import Photovoltaics from './Photovoltaics/Photovoltaics';
import Financial from './Financial/Financial';
import Tablet from './TabletView/Tablet';


const Main =()=> {
  const[title, setTitle] = useState("Liczby się liczą")
  const [isTablet, setIsTablet] = useState(false);

  const resize = () => {
    let currentView = window.innerWidth <= 1199;
    if (currentView !== isTablet) {
      setIsTablet(currentView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();

    return window.removeEventListener('resize', resize.bind(this));
  });

  if (isTablet) {
    return(
      <Tablet/>
    )
  } return (
      <Router>
        <HamburgerMenu setTitle={setTitle}/>
        <div id="outer-container">
          <Logo title={title}/>
          <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/sale" component={Sale} />
              <Route path="/energetic" component={Energetic} />
              <Route path="/photovoltaics" component={Photovoltaics} />
              <Route path="/financial" component={Financial} />
              <Route path="/fundraising" component={Fundraising} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  
}
export default Main;
