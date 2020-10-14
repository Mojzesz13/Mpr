import React from 'react';  
import {Field} from 'formik';
import "./textarea.scss"

const Textarea = (props) => {
    const {lable, name, ...rest} = props
    return (
      <div className="textareaConteiner">
          <label htmlFor={name}/>
           <Field className="textreaContent" as="textarea" placeholder={lable} id={name}  name={name} {...rest} />
      </div>
    );
}
export default Textarea;

