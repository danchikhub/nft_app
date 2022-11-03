import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    next: null,
    previous: null,
}

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards(state, action) {
            state.items = action.payload.cards
            state.next = action.payload.next
            state.previous= action.payload.previous
        }
    }
})

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;