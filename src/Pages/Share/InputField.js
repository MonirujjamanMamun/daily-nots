import React from 'react';

const InputField = (props) => {
    return (
        <input type={props.type} name={props.name} onChange={props.onChange} required={props.reqired} value={props.value} placeholder={props.placeholder} className={props.className} />
    );
};

export default InputField;