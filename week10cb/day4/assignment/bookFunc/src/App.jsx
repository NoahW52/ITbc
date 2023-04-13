import { useState, useEffect } from 'react'
import './App.css'
import Books from './components/Books'

function App() {
  const [bookProp, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    const result = await response.json()
    setBooks(result)
    console.log(result)
  }



  return(
    <div className='App'>
      <Books bookComp={bookProp}/>
    </div>
  )
}



export default App
