import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    token: null
}

export const authSlice = createSlice({
    name: 'isAuth',
    //The name is the name of the action within the slice/reducer (which in this case is signUp)
    initialState,
    reducers: {
        signUp: (state, action) => {
            //signUp is the same as actionTypes.BOOKS in my other bookbarn. They are the variable name of what holds the action that's happening
            const token = action.payload
            state.auth = true
            state.token = token
        },
        signOut: (state) => {
            state.auth = false
            state.token
        }
    }
})
export const { signUp, signOut } = authSlice.actions

export default authSlice.reducer