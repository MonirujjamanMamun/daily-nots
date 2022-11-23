import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import InputField from './Share/InputField';
import PrimaryButton from './Share/PrimaryButton';
import TextArea from './Share/TextArea';
import { v4 as uuidv4 } from 'uuid';



const Form = () => {
    const { notes, setNotes } = useContext(MyContext);
    // const [inputField, setInputField] = useState("");
    // const [textField, setTextField] = useState("");
    const [formData, setFormData] = useState({ id: uuidv4(), title: '', description: '', status: 'read' });
    const [status, setStatus] = useState("")
    const navigation = useNavigate();


    const formHandel = e => {
        e.preventDefault();
        // const data = { title: inputField, description: textField, id: uuidv4(), status: status };
        setNotes([...notes, formData]);
        localStorage.setItem('notes', JSON.stringify([...notes, formData]))
        navigation('/');
    }
    const handelChange = (e) => {
        const title = e.target.name;
        const description = e.target.value;
        const data = { ...formData }
        data[title] = description;
        setFormData(data)
    }
    // (e) => setInputField(e.target.value)
    // (e) => setTextField(e.target.value)
    return (
        <form onSubmit={formHandel}>
            <InputField
                className="outline-slate-600 w-full rounded p-2"
                placeholder={"Nots Titel"}
                name={"title"}
                type={"text"}
                required={true}
                onChange={handelChange}
            />
            <br /><br />
            <TextArea
                className=''
                placeholder={"Not's Details"}
                name={"description"}
                required={true}
                onChange={handelChange}
            />
            <PrimaryButton type='submit'>Submit</PrimaryButton>
        </form>
    );
};

export default Form;