import React, { Component } from 'react';
import './Main.scss';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import HamburgerMenu from './HamburgeMenu/HamburgerMenu';
import AboutUs from './AboutUs/AboutUs';
import Sale from './Sale/Sale';

import Coaching from './Coaching/Coaching';
import FinancialConsulting from './FinancialConsulting/FinancialConsulting';
import HumanResources from './HumanResources/HumanResources';
import Insurance from './Insurance/Insurance';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Fundraising from './Fundraising/Fundraising';

class Main extends Component {
  render() {
    return (
      <Router>
        <HamburgerMenu />
        <div id="outer-container">
          <div>
            <Link to="/">
              <div id="logoWrapper">MPR</div>
            </Link>
          </div>
          <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/sale" component={Sale} />
              <Route path="/fundraising" component={Fundraising} />
              <Route path="/coaching" component={Coaching} />
              <Route
                path="/financialConsulting"
                component={FinancialConsulting}
              />
              <Route path="/humanResources" component={HumanResources} />
              <Route path="/insurance" component={Insurance} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default Main;
