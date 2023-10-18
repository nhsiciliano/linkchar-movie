import axios from "axios";

export const makeRq = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDJmNjM2YTU5NGFjNjBmMjZlNDRjMTIxYzY0ODhjYyIsInN1YiI6IjYyZDJmMmM2OWY1MWFmMDA0ZjhmNDc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zGKr2aaUnxVKCsXUEBf4LETUJKj-1bnWhjNUVYo3UCY"
    },
});