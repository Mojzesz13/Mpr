import React, { useState } from 'react';
import './Contact.scss';
import FormContact from '../../common/form/form';
import RodoPolicy from '../../common/form/rodoPolicy';

const Contact = ({ setTitle }) => {
  const [openPolicy, setOpenPolicy] = useState(false);

  const handleOpenPolicy = () => {
    setOpenPolicy((prevState) => !prevState);
  };

  return (
    <div
      id='contact'
      className={openPolicy ? 'contact-container active' : 'contact-container '}
    >
      <FormContact handleOpenPolicy={handleOpenPolicy} setTitle={setTitle} />
      <RodoPolicy visibleCondition={openPolicy} />
    </div>
  );
};
export default Contact;
