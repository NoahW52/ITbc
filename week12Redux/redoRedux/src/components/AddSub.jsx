import { connect } from "react-redux";
import { useState } from "react";

function AddSub(props) {

    const [valueInObj, setValue] = useState(0)

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const handleSub = () => {
        props.subtract(valueInObj)
    }
    const handleAdd = () => {
        props.add(valueInObj)
    }
    return(
        <>
        <input type="text" onChange={handleInput} />
        <br />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Subtract</button>
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