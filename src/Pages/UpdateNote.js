import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../App';
import InputField from './Share/InputField';
import PrimaryButton from './Share/PrimaryButton';
import TextArea from './Share/TextArea';
import upDateNote from './UpdateNotes.modules.css';



const UpdateNote = () => {
    const { notes, setNotes } = useContext(MyContext);
    const { id } = useParams();
    const [note, setNote] = useState('');
    const navigation = useNavigate();

    console.log(note)

    useEffect(() => {
        const preveusNote = notes.find(note => note.id === id);
        setNote(preveusNote);
    }, [notes, id])


    const updateFormHandel = e => {
        e.preventDefault();
        const fieldData = notes.filter(n => n.id !== id);
        setNotes([...fieldData, note])
        localStorage.setItem('notes', JSON.stringify([...fieldData, note]))
        navigation('/')
    }


    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const status = e.target.value;
        const updateData = { ...note }
        updateData[name, status] = value;
        // updateData = status;
        console.log(updateData)
        setNote(updateData);
    }

    // const handelStatus = (e) => {
    //     const status = e.target.value;
    //     // const updateStatus = { ...note }
    //     setNote([...note, status])
    // }


    return (
        <div className='text-center mt-32'>
            <h2 className='text-2xl font-bold p-5 font-serif text-center mb-5'>Update Your Notes</h2>
            <form onSubmit={updateFormHandel}>
                <InputField
                    className="outline-slate-600 w-full rounded p-2"
                    name={"title"}
                    type={"text"}
                    onChange={handelChange}
                    value={note?.title}
                />
                <br /><br />
                <TextArea
                    className='outline-slate-600 w-full rounded p-2'
                    name={"description"}
                    value={note?.description}
                    onChange={handelChange}
                />
                <div className='mb-10 text-center mt-5'>
                    <label htmlFor="notes" className='text-lg font-bold'>Select: </label>
                    <select id="notes" name="notelist" form="noteform" onChange={handelChange}>
                        <option value={'unread'}>Unread</option>
                        <option value={'read'}>Read</option>
                    </select>
                </div>
                <PrimaryButton type='submit'>Update</PrimaryButton>
            </form>
        </div>
    );
};

export default UpdateNote;