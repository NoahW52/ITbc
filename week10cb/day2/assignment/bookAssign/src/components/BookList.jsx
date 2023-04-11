import { Component } from "react";

class BookList extends Component {
    render() {
        const books = this.props.books
        const bookItems = books.map((book) => {
            return (
                <div key={book.index}>
                    <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
                    <div class="title">{book.title}</div>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            )
        })
        return (
            <ul>
                {bookItems}
            </ul>
        )
    }
}

export default BookList