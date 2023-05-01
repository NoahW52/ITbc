import './css/App.css'
import './css/Book.css'
import Book from './components/Book'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to={'/register'}>
          <button>Register Here</button>
      </Link>
    <Book />
    </>
  )
}

export default App
