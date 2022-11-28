import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import fetchMovies from "../../Pages/Share/fetchData";



const movieSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        movies: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
            localStorage.setItem('movies', JSON.stringify(action.payload));
            state.error = null;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.movies = JSON.parse(localStorage.getItem("movies"))
            state.error = action.error.message;
        })
    }
})



export default movieSlice.reducer;