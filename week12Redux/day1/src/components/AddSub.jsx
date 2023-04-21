import { connect } from "react-redux";
import { useState } from "react";

function AddSub(props) {

    const [value, setValue] = useState(0)

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        props.add(value)
    }
    const handleSubtract = () => {
        props.subtract(value)
    }

    return(
        <>
            <input type="text" onChange={handleInput}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>subtract</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch({type: 'ADD', payload: value}),
        subtract: (value) => dispatch({type: 'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSub)