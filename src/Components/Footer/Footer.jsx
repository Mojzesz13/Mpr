import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-conainer'>
        <div className='footer-column'>
          <p>MPR GROUP SP. Z O.O.</p>
          <p>Plac Solny 14/3</p>
          <p>53-501 Wrocław</p>
        </div>
        <div className='footer-column'>
          {/* <a href='https://www.facebook.com/pracowniamodyslubnejiwieczorowej'>
            <i className='fab fa-facebook-square fa-2x' />
          </a> */}
          <p>tel. 575-009-210</p>
          <p>
            <a href='mailto:biuro@mpr.com'>biuro@mpril.com</a>
          </p>
          <p>NIP: 8971811099</p>
        </div>
        <div className='footer-column'>
          <p>Pn-pt: 08:00 - 16:00</p>
          <p>Sb: nieczynne</p>
          <p>Nd: nieczynne</p>
        </div>
      </div>
    );
  }
}
export default Footer;
