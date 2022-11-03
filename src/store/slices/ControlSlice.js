import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
}

const controlSlice = createSlice({
    name: 'control',
    initialState,
    reducers: {
        setControl(state, action) {
            state.isLoading = action.payload.isLoading
        }
    }
})

export const { setControl } = controlSlice.actions;

export default controlSlice.reducer