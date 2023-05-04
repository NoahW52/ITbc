import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getDisplay: (state, action) => {
            state.books = action.payload
            // state gets book from initialState on mine 3, action.payload is what the action receives from Book component.
        }
        
    }
})
export const { getDisplay } = bookSlice.actions

export default bookSlice.reducer