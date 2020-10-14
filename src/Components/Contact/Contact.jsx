import React, { Component } from 'react';
import './Contact.scss';
import FormContact from '../../common/form/form';
import RodoPolicy from '../../common/form/rodoPolicy';

class Contact extends Component {
  state = {
    openPolicy:true
  }

 handleOpenPolicy =()=>{
  this.setState(prevState => ({
    openPolicy: !prevState.openPolicy
  }));
}

  render() {
    return (
      <div id="contact" className="contactContainer">
        <div className="formSection"> 
        <FormContact handleOpenPolicy={this.handleOpenPolicy}/>
        <RodoPolicy visibleCondition={this.state.openPolicy} />
        </div>
      </div>
    );
  }
}
export default Contact;

// https://codepen.io/davinci/pen/YxwwWd   fala