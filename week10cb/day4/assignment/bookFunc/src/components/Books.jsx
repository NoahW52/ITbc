import { useState } from "react";
import { connect } from "react-redux";

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
        </div>
        )
    })

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
        addToCart: (book) => dispatch({type: 'BOOKS', payload: book})
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Books)