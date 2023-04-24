import { useState, useEffect } from 'react'
import './App.css'
import Books from './components/Books'


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
  }


  return(
    <>
      <h1>Welcome to Book Barn!</h1>
      <div className='App'>
        <Books allBooks={books}/>
      </div>
    </>
  )
}



export default App
