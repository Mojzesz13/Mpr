import React from 'react';  
import {Field} from 'formik';
import "./textarea.scss"

const Textarea = (props) => {
    const {lable, name, ...rest} = props
    return (
      <div className="textarea-conteiner">
          <label htmlFor={name}/>
           <Field 
           className="textrea-content" 
           as="textarea" 
           placeholder={lable} 
           id={name}  
           name={name} 
           {...rest} />
      </div>
    );
}
export default Textarea;

