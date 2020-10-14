import React from 'react';
import { useField} from 'formik';
import './rodo.scss'


const CustomCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField(props, 'checkbox');
    return (
      <>
        <label className="checkbox">
          <input type="checkbox" {...field} {...props} />
          {children}
          <div className="checkMark">
            <span />
            <span />
          </div>
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };



const Rodo = (props) => {
    



    return (
            <div className="termsContainer">
              <CustomCheckbox name="acceptTerms"></CustomCheckbox>
              <p>Akceptuję politykę prywatności</p>
              <span className="rodoPolicy">
                RODO
              </span>
            </div>
    );
};

export default Rodo;