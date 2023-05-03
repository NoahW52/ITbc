import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const authSlice = createSlice({
    name: 'isAuth',
    //The name is the name of the action within the slice/reducer (which in this case is signUp)
    initialState,
    reducers: {
        signUp: (state, action) => {
            //signUp is the same as actionTypes.BOOKS in my other bookbarn. They are the variable name of what holds the action that's happening
            state.auth = action.payload != null
        }
    }
})
export const { signUp } = authSlice.actions

export default authSlice.reducer