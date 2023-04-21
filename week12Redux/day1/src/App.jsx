import { connect } from 'react-redux'
import './App.css'
import AddSub from './components/AddSub'
import Counter from './components/Counter'
import Display from './components/Display'

function App(props) {

  return(
    <>
    <h1>Not starting Value{props.counterValue}</h1>
      <Display />
      <Counter />
      <AddSub />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter
  }
}

export default connect(mapStateToProps)(App)
