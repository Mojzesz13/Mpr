import React from 'react';
import './input.scss'
import {
    Input,
    StyledInlineErrorMessage,
  } from "./styles";

const TextInput = (props) => {
    const {lable, name, touched, type, errors, ...rest} = props
    return (
        <div className="inputHolder"> 
        <label htmlFor={name}/>
            <Input
               type={type}
               name={name}
               id={name}
               autoCorrect="off"
               autoComplete={name}
               placeholder={lable}
               valid={touched && !errors}
               error={touched && errors}
               {...rest}
              />
              {errors && touched && (
               <StyledInlineErrorMessage>
                 {errors}
               </StyledInlineErrorMessage>
               )}
          </div>
    );
};  

export default TextInput;