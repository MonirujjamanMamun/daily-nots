import React from 'react';

const TextArea = (props) => {
    return (
        <textarea name={props.name} onChange={props.onChange} required={props.required} value={props.value} placeholder={props.placeholder} className={props.className} />
    );
};

export default TextArea;