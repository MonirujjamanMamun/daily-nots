import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import fetchMovies from './Share/fetchData';
import Loading from './Share/Loading';
import 'react-toastify/dist/ReactToastify.css';

const PostView = () => {
    const { isLoading, movies, error } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postDelete, setPostDelete] = useState(movies);

    console.log(postDelete)

    if (isLoading) {
        <Loading />
    }

    const handelPostUpdate = (id) => {
        navigate(`/postupdate/${id}`);
    }

    const handelDelete = (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios.delete(url)
            .then(res => {
                const post = postDelete.filter(p => p.id !== id);
                setPostDelete(post);
                toast('Succesfully Deleted')
            })

    }
    useEffect(() => {
        dispatch(fetchMovies())
    }, []);


    return (
        <div className='h-4/5'>
            <div className='text-center'>
                <h1 className='text-3xl font-mono font-bold'>All Countrys here</h1>
            </div>

            {isLoading && <Loading />}

            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-4'>
                {movies.map(movie =>
                    <div key={movie.id} className="card shadow-xl bg-[#0e71e941]">
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-mono mb-5">{movie.title}</h2>
                            <p>{movie?.body}</p>
                            <div className='cursor-pointer flex justify-center align-middle mt-5'>
                                <span
                                    className='text-2xl bg-green-500 text-white mr-5' onClick={() => handelPostUpdate(movie.id)}
                                ><BiEdit /></span>
                                <span
                                    className='text-2xl text-red-700' onClick={() => handelDelete(movie.id)}><MdDelete
                                    /></span>
                            </div>
                        </div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default PostView;