import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './buttonContact.scss';

class ButtonContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="buttonContactContainer">
     <a href="#sd" class="buttonContact">
	<span class="shine"></span>
	<span class="text">Hover Me</span>
</a>
      </div>
    );
  }
}
export default ButtonContact;