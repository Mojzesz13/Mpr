import React from 'react';
import Button from './button';

const ButtonDivision = ({ width, path, text, logo, linkTo, setTitle }) => {
  if (logo && linkTo) {
    return (
      <a href={linkTo}>
        <div className='logo-holder'>
          <img src={logo} alt='logo-partner' />
        </div>
      </a>
    );
  } else {
    return <Button path={path} width={width} text={text} setTitle={setTitle} />;
  }
};

export default ButtonDivision;
