const initialState = {
    cart: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BOOKS': 
            return {
                ...state,
                cart: state.cart.concat(action.payload)
        }
        default:
            return state
    }
}

export default Reducer