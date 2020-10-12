import React, { Component } from 'react';
import './buttonContact.scss';

class ButtonContact extends Component {
 
  render() {
    return (
      <div  className="buttonContactContainer">
      <button type="submit" className="buttonContact">
        <span className="shine"></span>
        <span className="text">Hover Me</span>
      </button>
   </div>
    );
  }
}
export default ButtonContact;