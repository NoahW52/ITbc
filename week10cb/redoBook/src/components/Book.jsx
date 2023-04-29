import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDisplay } from "../store/slices/bookSlices";

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
                <div><b>{book.bookTitle}</b> By: {book.bookAuthor}</div>
                <div>Genre: {book.bookGenre}</div>
                <div>Published {book.bookYear}</div>
                <img src={book.bookImageURL} />
            </div>
        )
    })

    return(
        <>
            <h1>Welcome to your BookBarn!</h1>
            <section>{booksArr}</section>
        </>
    )
}

export default Book