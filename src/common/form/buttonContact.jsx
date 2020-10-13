import React from 'react';
import './buttonContact.scss';

const ButtonContact =()=> {
    return (
      <div  className="buttonContactContainer">
      <button type="submit" className="buttonContact">
        <span className="shine"></span>
        <span className="text">Wyślij</span>
      </button>
   </div>
    );
}
export default ButtonContact;