import React, { useState } from 'react';
import './Contact.scss';
import FormContact from '../../common/form/form';
import RodoPolicy from '../../common/form/rodoPolicy';

const Contact = () => {
  const[openPolicy, setOpenPolicy] = useState(false)
  
 const handleOpenPolicy =()=>{
  setOpenPolicy(prevState => ({
    openPolicy: !prevState.openPolicy
  }));
}

    return (
      <div id="contact" className="contact-container">
        <div className="form-section"> 
        <FormContact handleOpenPolicy={handleOpenPolicy}/>
        <RodoPolicy visibleCondition={openPolicy} />
        </div>
      </div>
    );
}
export default Contact;