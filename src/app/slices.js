import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        toggle: (state, action) => {
            return state.includes(action.payload.id)
                ? state.filter((id) => id !== action.payload.id)
                : [...state, action.payload.id]
        }
    },
});

export const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [
                ...action.payload.movies
            ]
        },
    },
});
export const similarMoviesSlice = createSlice({
    name: "similar",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [
                ...action.payload.similar
            ]
        },
    },
});
export const oneMovieSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        add: (state, action) => {
            return action.payload.movie
        },
    },
});