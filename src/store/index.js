import {configureStore} from '@reduxjs/toolkit';
import cardReducer from './slices/CardSlice';
import controlSlice from './slices/ControlSlice';

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        control: controlSlice
    }
})
