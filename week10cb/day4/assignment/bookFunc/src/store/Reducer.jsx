import * as actionTypes from "./actions/actionTypes"

const initialState = {
    cart: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.BOOKS: 
            return {
                ...state,
                cart: state.cart.concat(action.payload)
        }
        // case action.Types.UPDATE:
        //     return {
        //         ...state,
                
        //     }
        default:
            return state
    }
}

export default Reducer