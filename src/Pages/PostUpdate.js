import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import InputField from './Share/InputField';
import PrimaryButton from './Share/PrimaryButton';
import TextArea from './Share/TextArea';
import 'react-toastify/dist/ReactToastify.css';

const PostUpdate = () => {

    const { isLoading, movies, error } = useSelector((state) => state.movies);
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const navigation = useNavigate();



    const updateFormHandel = (e) => {
        e.preventDefault();
        const body = { title, description };
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.put(url, body)
            .then(res => console.log(res));
        toast('Succesfully added')
        navigation("/postview")
    }



    return (
        <div className="hero min-h-screen bg-[#0ea4e927]">
            <div className="hero-content flex-col justify-center align-middle">
                {/* update notes title  */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold mb-2 font-serif">Update Your Post</h1>
                </div>
                {/* update notes input start here  */}
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
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-mono font-bold"
                                >Description</span>
                            </label>
                            <TextArea
                                className="input input-bordered"
                                name="description"
                                onChange={(e) => setdescription(e.target.value)}
                                value={description}
                            />
                        </div>
                        <div className="form-control">
                            <PrimaryButton className='font-mono font-bold' type='submit'>Update Post</PrimaryButton>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default PostUpdate;