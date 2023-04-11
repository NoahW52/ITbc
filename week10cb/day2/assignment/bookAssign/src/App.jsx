import { Component } from 'react'
import './App.css'
import BookList from './components/BookList'
import TopPage from './components/TopPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
     books: []
     }
   }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(result => {
      this.setState({
        books: result
      })
    })
  }

  render() {
      return (
        <>
          <div className='frontPage'>
            <TopPage />
            <BookList books={this.state.books} />
          </div>
      </>
    )
  }
}

export default App
