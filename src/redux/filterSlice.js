import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})

export const filterReducer = filterSlice.reducer;
export const selectNameFilter = (state) => state.filter.filter;
export const { changeFilter } = filterSlice.actions;