import React, { useContext, useRef, useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { MyContext } from '../App';





const Details = () => {
    const { text, setText } = useContext(MyContext);

    const inputFild = useRef(null);
    const textFild = useRef(null);

    // const [inputTexts, setInputText] = useState('');
    // const [textArea, setTextArea] = useState('');
    const navigation = useNavigate();

    // console.log(inputTexts, textArea)


    const formHandel = e => {
        e.preventDefault();
        // setInputText(e.target.input.value);
        // setTextArea(e.target.textArea.value)
        const inputText = inputFild.current.value;
        const textArea = textFild.current.value;

        // set context api data 
        const data = { name: inputText, text: textArea };
        setText([...text, data]);
        navigation('/')
    }

    return (
        <div className='text-center mt-24 drop-shadow-2xl'>
            <h2 className='text-2xl font-bold py-10 font-serif'>Drop Your New Notes</h2>
            {/* form section  */}
            <form action="" onSubmit={formHandel}>
                <input type="text" placeholder="Nots Titel" className="outline-slate-600 w-full max-w-xs rounded p-2" ref={inputFild} required />
                <br /><br />
                <textarea className='outline-slate-600 w-full max-w-xs rounded p-2' placeholder='Nots Details' ref={textFild} required />
                <br /><br />
                <input className='uppercase px-5 py-3 bg-[#0ea5e9] rounded my-10 font-serif text-white hover:bg-slate-500' type='submit' />
            </form>
        </div>

    );
};

export default Details;