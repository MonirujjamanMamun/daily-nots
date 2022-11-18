import React, { createContext, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

export const MyContext = createContext('matir ring');


const Details = () => {
    // const [inputText, setInputText] = useState('');
    // const [textArea, setTextArea] = useState('');
    const navigation = useNavigate();


    const formHandel = e => {
        e.preventDefault();

        // console.log(inputText, textArea)
        navigation('/')
    }

    // onChange={(e) => setInputText(e.target.value)}
    // onChange={(e) => setTextArea(e.target.value)}
    return (
        <MyContext.Provider value={formHandel}>
            <div className='text-center mt-44 drop-shadow-2xl'>
                <h2 className='text-2xl font-bold py-10 font-serif'>Drop Your New Notes</h2>
                <form action="" onSubmit={formHandel}>
                    <input type="text" placeholder="Nots Titel" className="outline-slate-600 w-full max-w-xs rounded p-2" name='input' />
                    <br /><br />
                    <textarea className='outline-slate-600 w-full max-w-xs rounded p-2' name="textArea" id="" placeholder='Nots Details' />
                    <br /><br />
                    <input className='uppercase px-4 py-2 bg-teal-500 rounded my-10 font-serif' type='submit' />
                </form>
            </div>
        </MyContext.Provider>
    );
};

export default Details;