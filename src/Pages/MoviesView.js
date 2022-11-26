import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import movieSlice, { fetchMovies } from '../features/movie/movieSlice';

const MoviesView = () => {

    const { isLoading, movies, error } = useSelector((state) => state.movies);

    console.log(movies)
    const dispatch = useDispatch()


    if (isLoading) {
        <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                {/* <!-- ... --> */}
            </svg>
            Processing...
        </button>
    }
    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    return (
        <div className='mt-10'>
            <div className='mt-36 text-center'>
                <h1 className='text-2xl font-mono font-bold'>All users here</h1>
            </div>

            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-4'>

                {movies.map(movie =>
                    <div key={movie.id} className="card-body bg-slate-300 rounded-md">
                        {/* <div className="card-body">
                    </div> */}
                        <h2 className='text-xl'>{movie.name}</h2>
                        <h5 className='text-lg'>{movie.username}</h5>
                        <p>{movie.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesView;