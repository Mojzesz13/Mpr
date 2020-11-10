import React from 'react';
import { useField } from 'formik';
import './rodo.scss';

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
        <div className='check-mark'>
          <span />
          <span />
        </div>
      </label>
      {meta.touched && meta.error ? (
        <div className='error-text'>{meta.error}</div>
      ) : null}
    </>
  );
};

const Rodo = ({ handleOpenPolicy }) => {
  return (
    <div className='terms-container'>
      <CustomCheckbox name='acceptTerms'></CustomCheckbox>
      <p>Akceptuję politykę prywatności</p>
      <span className='rodo-policy' onClick={handleOpenPolicy}>
        RODO
      </span>
    </div>
  );
};

export default Rodo;
