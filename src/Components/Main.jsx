import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import HamburgerMenu from './HamburgeMenu/HamburgerMenu';
import Logo from './Logo/Logo';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import AboutUs from './AboutUs/AboutUs';
import Sales from './Sales/Sales';
import Charity from './Charity/Charity';
import Photovoltaics from './Photovoltaics/Photovoltaics';
import Interactive from './Interactive/Interactive';
import Tablet from './TabletView/Tablet';
import Divisions from './Divisions/Divisions';
import Testimonial from './Testimonial/Testimonial';

const Main = () => {
  const [title, setTitle] = useState('Liczby się liczą');
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

  const isTabletConfig = {
    tablet: {
      navbar: <Navbar isTablet={isTablet} />,
      homePath: <Tablet isTablet={isTablet} />,
    },
    desktop: {
      navbar: <HamburgerMenu setTitle={setTitle} />,
      homePath: <Home setTitle={setTitle} />,
    },
  };

  const viewCondition = (condition) => {
    if (condition) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const { navbar, homePath } = isTabletConfig[viewCondition(isTablet)];

  return (
    <Router>
      {navbar}
      <Logo title={title} isTablet={isTablet} setTitle={setTitle} />
      <div id='outer-container'>
        <div id='page-wrap'>
          <Switch>
            <Route exact path='/'>
              {homePath}
            </Route>
            <Route path='/divisions'>
              <Divisions setTitle={setTitle} />
            </Route>
            <Route path='/aboutUs'>
              <AboutUs setTitle={setTitle} />
            </Route>
            <Route path='/contact'>
              <Contact setTitle={setTitle} />
            </Route>
            <Route path='/sales'>
              <Sales setTitle={setTitle} isTablet={isTablet} />
            </Route>
            <Route path='/interactive'>
              <Interactive setTitle={setTitle} isTablet={isTablet} />
            </Route>
            {/* <Route path='/energetic'>
              <Energetic setTitle={setTitle} />
            </Route> */}
            <Route path='/photovoltaics'>
              <Photovoltaics setTitle={setTitle} />
            </Route>
            <Route path='/charity'>
              <Charity setTitle={setTitle} isTablet={isTablet} />
            </Route>
            <Route path='/testimonial'>
              <Testimonial />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
};
export default Main;
