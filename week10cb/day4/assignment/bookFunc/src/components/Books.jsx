import { useState } from "react";

function Books(bookComp) {
    console.log(bookComp)
    const bookArr = bookComp.bookComp
    const bookList = bookArr.map((book) => {
        return(
            <div key={book._id}>
            <img src={book.bookImageURL} />
            <div><b>{book.bookTitle}</b></div>
            <div>{book.bookGenre}</div>
            <div>{book.bookPublisher}</div>
            <div>{book.bookYear}</div>
        </div>
        )
    })

    return(
        <>
        <section>{bookList}</section>
        </>
    )
}

export default Books