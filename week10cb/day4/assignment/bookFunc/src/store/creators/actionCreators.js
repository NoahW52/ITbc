import * as actionTypes from '../actions/actionTypes'

export const addToCart = (book) => {
    return {
        type: actionTypes.BOOKS, payload: book
    }
}