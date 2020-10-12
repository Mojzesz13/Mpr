import React from 'react';
import { useField } from 'formik';

const TextInput = (props) => {
    const [field, meta] = useField(props.name)
    return (
        <div className="inputHolder">
            {props.label && <label htmlFor={props.name}/>}
            <input 
            {...field}
            {...props}
            />
            {meta.error && meta.touched && <div className={"alert"}>{meta.error}</div>}
        </div>
    );
};

export default TextInput;