import { configureStore } from '@reduxjs/toolkit'
import bookSlices from './slices/bookSlices'

export const store = configureStore({
    reducer: {
        books: bookSlices
    }
})