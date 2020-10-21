import React from 'react';
import './buttonContact.scss';

const ButtonContact =()=> {
    return (
      <div  className="button-contact-container ">
      <button type="submit" className="button-holder">
        <span className="shine"></span>
        <span className="text">Wyślij</span>
      </button>
   </div>
    );
}
export default ButtonContact;