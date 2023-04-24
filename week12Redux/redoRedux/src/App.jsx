import './App.css'
import AddSub from './components/AddSub'
import Counter from './components/Counter'
import { connect } from 'react-redux'
import Display from './components/Display'

function App(props) {
    return(
        <>
        <h1>{props.counterValue}</h1>
        <Counter />
        <br />
        <AddSub />
        <br />
        <Display />
        </>
    )
}

const MapStateToProps = (state) => {
    return {
        counterValue: state.counter
    }
}

export default connect(MapStateToProps)(App)
