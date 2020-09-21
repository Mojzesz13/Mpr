import React, { Component } from 'react';
import './Home.scss';
import AboutUs from './AboutUs/AboutUs';
import Sale from './Sale/Sale';
import Fundraising from './Fundraising/Fundraising';
import Coaching from './Coaching/Coaching';
import FinancialConsulting from './FinancialConsulting/FinancialConsulting';
import HumanResources from './HumanResources/HumanResources';
import Insurance from './Insurance/Insurance';
import Contact from './Contact/Contact';

class Home extends Component {
  render() {
    return (
      <>
        <AboutUs />
        <Sale />
        <Fundraising />
        <Coaching />
        <FinancialConsulting />
        <HumanResources />
        <Insurance />
        <Contact />
      </>
    );
  }
}
export default Home;
