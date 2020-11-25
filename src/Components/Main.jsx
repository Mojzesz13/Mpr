import React, { useState, useEffect } from 'react';
import './Main.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import HamburgerMenu from './HamburgeMenu/HamburgerMenu';
import AboutUs from './AboutUs/AboutUs';
import Sales from './Sales/Sales';
import Charity from './Charity/Charity';
import Energetic from './Energetic/Energetic';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Logo from './Logo/Logo';
import Photovoltaics from './Photovoltaics/Photovoltaics';
import Interactive from './Interactive/Interactive';
import Tablet from './TabletView/Tablet';
import Divisions from './Divisions/Divisions';
import Navbar from './Navigation/Navbar';
import Testimonial from './Testimonial/Testimonial';

const Main = () => {
  const [title, setTitle] = useState('Liczby się liczą');
  const [isTablet, setIsTablet] = useState(false);

  // const routes = [
  //   { path: '/aboutUs', component: AboutUs },
  //   { path: '/testimonial', component: Testimonial },
  //   { path: '/sales', component: Sales },
  //   { path: '/photovoltaics', component: Photovoltaics },
  //   { path: '/energetic', component: Energetic },
  //   { path: '/interactive', component: Interactive },
  //   { path: '/charity', component: Charity },
  //   { path: '/contact', component: Contact },
  // ];

  const routes = [
    { path: '/testimonial', component: Testimonial, setTitle: setTitle },
    { path: '/sales', component: Sales, setTitle: setTitle },
    { path: '/photovoltaics', component: Photovoltaics, setTitle: setTitle },
    { path: '/energetic', component: Energetic, setTitle: setTitle },
    { path: '/interactive', component: Interactive, setTitle: setTitle },
    { path: '/charity', component: Charity, setTitle: setTitle },
  ];

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
    return (
      <Router>
        <Navbar isTablet={isTablet} />
        <Switch>
          <Route exact path='/'>
            <Tablet isTablet={isTablet} />
          </Route>
          {routes.map(({ path, component: C }) => (
            <Route key={path} path={path} component={C} />
          ))}
          <Route path='/divisions' component={Divisions} />
          <Route path='/aboutUs'>
            <AboutUs setTitle={setTitle} />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
  return (
    <Router>
      <HamburgerMenu setTitle={setTitle} />
      <div id='outer-container'>
        <Logo title={title} setTitle={setTitle} />
        <div id='page-wrap'>
          <Switch>
            <Route exact path='/'>
              <Home setTitle={setTitle} />
            </Route>
            <Route path='/divisions'>
              <Divisions setTitle={setTitle} />
            </Route>
            <Route path='/aboutUs'>
              <AboutUs setTitle={setTitle} />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/testimonial'>
              <Testimonial />
            </Route>
            {routes.map((obj) => (
              <Route key={obj.path} path={obj.path} setTitle={obj.setTitle}>
                {obj.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
};
export default Main;
