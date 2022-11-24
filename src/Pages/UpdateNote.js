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
        const updateData = { ...note }
        updateData[name] = value;
        setNote(updateData);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col justify-center align-middle">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold py-10 font-serif">Update Your Notes</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={updateFormHandel} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span
                                    className="label-text text-xl font-mono font-bold"
                                >Title</span>
                            </label>
                            <InputField className="input input-bordered"
                                name="title"
                                type="text"
                                onChange={handelChange}
                                value={note?.title}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-mono font-bold"
                                >Description</span>
                            </label>
                            <TextArea
                                className="input input-bordered"
                                // placeholder={"Not Details"}
                                name={"description"}
                                value={note?.description}
                                onChange={handelChange}
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="notes"
                                className="label-text text-xl font-mono font-bold"
                            >Select: </label>
                            <select id="notes" name="status" form="noteform"
                                value={note?.status} onChange={handelChange}>
                                <option className="label-text font-mono font-bold"
                                    value='unread'>Unread</option>
                                <option className="label-text font-mono font-bold"
                                    value='read'>Read</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <PrimaryButton className='font-mono font-bold' type='submit'>Update</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateNote;