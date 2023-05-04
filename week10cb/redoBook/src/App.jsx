import './css/App.css'
import './css/Book.css'
import Book from './components/Book'
import { Link } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { useDispatch } from "react-redux"
import { signUp } from './store/slices/authSlice'



function App() {
  
  const dispatch = useDispatch()
  const token = localStorage.getItem('jwt')
  if(token) {
    dispatch(signUp(token))
  }
  return (
    <ProtectedRoute>
    <br />
      {/* <Link to={'/register'}>
          <button>Register Here</button>
      </Link> */}
    <Book />
    </ProtectedRoute>
  )
}



export default App
