import { useState } from "react";
import { connect } from "react-redux";
import '../css/books.css'
import * as actionCreators from '../store/creators/actionCreators.js'

function Books(props) {
    const bookArr = props.allBooks
    const bookList = bookArr.map((book) => {
        return(
            <div key={book._id}>
            <img src={book.bookImageURL} />
            <div><b>{book.bookTitle}</b></div>
            <div>{book.bookGenre}</div>
            <div>{book.bookPublisher}</div>
            <div>{book.bookYear}</div>
            <button onClick={() => props.addToCart(book)}>Add to cart</button>
            <br />
            <button onClick={() => {deleteBook(book._id)}}>Delete</button>
        </div>
        )
    })

    const deleteBook = async (bookIdVariable) => {
        const response = await fetch(`http://localhost:8080/api/books/${bookIdVariable}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
    }

    return(
        <>
        <h3>Items in cart: {props.cartCount}</h3>
        <section>{bookList}</section>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cartCount: state.cart.length
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (book) => dispatch(actionCreators.addToCart(book))
        
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Books)