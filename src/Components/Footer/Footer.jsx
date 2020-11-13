import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-conainer'>
        <div className='column'>
          <p>ul. Grabiszyńska 9</p>
          <p>53-501 Wrocław</p>
          <p>woj. dolnośląskie</p>
        </div>
        <div className='column'>
          <a href='https://www.facebook.com/pracowniamodyslubnejiwieczorowej'>
            <i className='fab fa-facebook-square fa-2x' />
          </a>
          <p>tel. 111-222-555</p>
          <a href='mailto:mpr@gmail.com'>mpr@gmail.com</a>
        </div>
        <div className='column'>
          <p>Pn-pt: 08:00 - 16:00</p>
          <p>Sb: nieczynne</p>
          <p>Nd: nieczynne</p>
        </div>
      </div>
    );
  }
}
export default Footer;
