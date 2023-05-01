import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDisplay } from "../store/slices/bookSlices";
import '../css/Book.css'
import { Link } from "react-router-dom";

function Book() {
    const state = useSelector(state => state.books)
    //state is going to return everything inside of the initialState that's in bookSlices
    //state.books is specifying that i just want the books value that's in the initialState object
console.log(state)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:8080/api/books')
        const result = await response.json()
        dispatch(getDisplay(result))
    }

    const booksArr = state.books.map((book) => {
        return(
            <div key={book._id}>
                <div><b>{book.bookTitle}</b></div>
                <div>By: {book.bookAuthor}</div>
                <div>Genre: {book.bookGenre}</div>
                <div>Published {book.bookYear}</div>
                <img id="bookPics" src={book.bookImageURL} />
                <br />
                <button id="deleteButton" onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
        )
    })

    const deleteBook = async(_id) => {
        const response = await fetch(`http://localhost:8080/api/books/${_id}`, {
            method: "DELETE",
        })
        console.log(response)
    }

    return(
        <>
            <h1>Welcome to your BookBarn!</h1>
            <Link to={'/add-book'}>
                <button>AddBook Here!</button>
            </Link>
            <section>{booksArr}</section>
        </>
    )
}

export default Book