const initialState = {
    counter: 11
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            }
        case "ADD":
            return {
                ...state,
                counter: state.counter + parseInt(action.payload),
            }
        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        default:
            break
    }
    return state
}

export default Reducer