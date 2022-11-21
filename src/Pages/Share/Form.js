import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import PrimaryButton from './PrimaryButton';

const Form = () => {
    const inputFild = useRef(null);
    const textFild = useRef(null);
    const navigation = useNavigate();

    const { nots, setNots } = useContext(MyContext);

    const formHandel = e => {
        e.preventDefault();
        const inputText = inputFild.current.value;
        const textArea = textFild.current.value;
        const data = { title: inputText, description: textArea };
        setNots([...nots, data]);
        navigation('/')
    }
    return (
        <form action="" onSubmit={formHandel}>
            <input type="text" placeholder="Nots Titel" className="outline-slate-600 w-full max-w-xs rounded p-2" ref={inputFild} required />
            <br /><br />
            <textarea className='outline-slate-600 w-full max-w-xs rounded p-2' placeholder='Nots Details' ref={textFild} required />
            <br /><br />
            <PrimaryButton type='sumnit'>Submit</PrimaryButton>
        </form>
    );
};

export default Form;