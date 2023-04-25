import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function AddPage() {
    const navigate = useNavigate()
    const [book, setBook] = useState({})

    const handleBookChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleAddBook = async () => {
        const response = await fetch('http://localhost:8080/api/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        }) 
        const saveBook = await response.json()
        if(saveBook) {
            navigate('/')
        }else {

        }  
    }

    return (
        <>
        <h1>Add a book to the database</h1>
        <Link to="/">
            <button>Return Home</button>
        </Link>
        <br />
            <input type="text" placeholder="Title" name="title" onChange={handleBookChange} />
            <br />
            <input type="text" placeholder="Genre" name="genre" onChange={handleBookChange} />
            <br />
            <input type="text" placeholder="author" name="publisher" onChange={handleBookChange} />
            <br />
            <input type="text" placeholder="year" name="year" onChange={handleBookChange} />
            <br />
            <input type="text" placeholder="book pic" name="imageURL" onChange={handleBookChange} />
            <br />
            <button onClick={handleAddBook} >Submit</button>
        </>
    )
}

export default AddPage