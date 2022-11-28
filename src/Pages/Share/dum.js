import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/* function common(props) {
    const fetchMovies = createAsyncThunk("movies/fetcMovices", async () => {
        const res = await axios.get(props.get);
        return res.data;
    });
    const fetchMovie = createAsyncThunk("movies/fetcMovices", async () => {
        const res = await axios.get(props.put);
        return res.data;
    });
}
 */
const fetchMovies = (props) => {
    createAsyncThunk("movies/fetcMovices", async () => {
        const res = await axios.get(props);
        console.log(res.data)
        // return res.data;
    });
}

export default fetchMovies;