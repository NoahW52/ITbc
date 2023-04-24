import { connect } from "react-redux";

function Display(props) {
    return(
        <h1>Another Counter: {props.otherState}</h1>
    )
}
const mapStateToProps = (state) => {
    return {
        otherState: state.counter
    }

}

export default connect(mapStateToProps)(Display)