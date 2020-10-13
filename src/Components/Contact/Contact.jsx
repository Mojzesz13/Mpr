import React, { Component } from 'react';
import FormContact from '../../common/form/form';
import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contactContainer">
        <div className="formSection"> 
        <FormContact/>
        </div>
      </div>
    );
  }
}
export default Contact;


// https://codepen.io/davinci/pen/YxwwWd   fala