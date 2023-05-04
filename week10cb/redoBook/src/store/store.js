import { configureStore } from '@reduxjs/toolkit'
import bookSlices from './slices/bookSlices'
import authSlice from './slices/authSlice'

export const store = configureStore({
    reducer: {
        books: bookSlices,
        isAuth: authSlice
    }
})
export default store