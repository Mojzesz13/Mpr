import React, { Component } from 'react';
import './Sale.scss';
import Button from '../../common/button';

class Sale extends Component {
  render() {
    return (
      <div id="sale" className="saleContainer">
        <Button path="/contact" text="kontakt" />
      </div>
    );
  }
}
export default Sale;
