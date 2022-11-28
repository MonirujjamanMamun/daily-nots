import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMovies = createAsyncThunk("movies/fetcMovices", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
});

export default fetchMovies;