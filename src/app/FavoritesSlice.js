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