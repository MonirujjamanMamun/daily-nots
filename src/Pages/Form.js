import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import InputField from './Share/InputField';
import PrimaryButton from './Share/PrimaryButton';
import TextArea from './Share/TextArea';
import { v4 as uuidv4 } from 'uuid';



const Form = () => {
    const { notes, setNotes } = useContext(MyContext);
    const [formData, setFormData] = useState({ id: uuidv4(), title: '', description: '', status: 'Unread' });
    const navigation = useNavigate();


    const formHandel = e => {
        e.preventDefault();
        setNotes([...notes, formData]);
        // set in localStorage
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


    return (
        <div>

            {/* 
            <form onSubmit={formHandel}>
                <div>
                    <InputField
                        className="w-9/12"
                        placeholder={"Nots Titel"}
                        name={"title"}
                        type={"text"}
                        required={true}
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <TextArea
                        className=''
                        placeholder={"Not's Details"}
                        name={"description"}
                        required={true}
                        onChange={handelChange}
                    />
                </div>


            </form> */}


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col justify-center align-middle">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold py-10 font-serif">Drop Your New Notes</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={formHandel} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono font-bold">Title</span>
                                </label>
                                <InputField className="input input-bordered"
                                    // placeholder="Not Titel"
                                    name="title"
                                    type="text"
                                    required={true}
                                    onChange={handelChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono font-bold">Description</span>
                                </label>
                                <TextArea
                                    className="input input-bordered"
                                    // placeholder={"Not Details"}
                                    name={"description"}
                                    required={true}
                                    onChange={handelChange}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <PrimaryButton type='submit'>Submit</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;