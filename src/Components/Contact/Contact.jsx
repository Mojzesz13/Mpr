import React, { useState } from 'react';
import './Contact.scss';
import FormContact from '../../common/form/form';
import RodoPolicy from '../../common/form/rodoPolicy';

const Contact = () => {
  const[openPolicy, setOpenPolicy] = useState(false)
  
  const handleOpenPolicy =()=>{
  setOpenPolicy((prevState) => !prevState);
  };

    return (
      <div id="contact" className={ openPolicy ? "contact-container" : "contact-container active"} >
        <FormContact handleOpenPolicy={handleOpenPolicy} />
        <RodoPolicy visibleCondition={openPolicy} />
      </div>
    );
}
export default Contact;