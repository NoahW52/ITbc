import { connect } from "react-redux";

function Counter(props) {

    const handlePlus = () => {
        props.increment()
    }
    const handleMinus = () => {
        props.decrement()
    }
    return(
        <>
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}>+</button>
        </>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(Counter)