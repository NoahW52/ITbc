import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Add() {
    const navigate = useNavigate()

    const [newBook, setNewBook] = useState({
        bookTitle: "",
        bookGenre: "",
        bookAuthor: "",
        bookYear: "",
        bookImageURL: ""
    })

    const handleInput = (e) => {
        //e is an event that is being taken as an argument and the event is triggered when something is typed into the input field. 
        const { name, value } = e.target
        //Extracting the name and value properties from the input field. 'name' represents the name attribute of the input field, and 'value' represents the current value of the input field
        setNewBook((oldBook) => ({
            ...oldBook,
            [name]: value,
        }))
    }

    const newBookInput = async (jwt) => {
        const response = await fetch('http://localhost:8080/api/add-book', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${jwt}`
            },
            body: JSON.stringify(newBook)
        })
        console.log(response)
        navigate('/')
    }
    
    return(
        <>
        <h1>Add your book here!</h1>
        <Link to={'/'}>
            <button>Go Home</button>
        </Link>
        <br />
        <input type="text" name="title" placeholder="Title" onChange={handleInput}/>
        <br />
        <input type="text" name="genre" placeholder="Genre" onChange={handleInput}/>
        <br />
        <input type="text" name="author" placeholder="Author" onChange={handleInput}/>
        <br />
        <input type="text" name="imageURL" placeholder="ImageURL" onChange={handleInput}/>
        <br />
        <input type="date" name="year" placeholder="Year" onChange={handleInput}/>
        <br />
        <button onClick={() => newBookInput(localStorage.getItem("jwt"))}>Submit</button>
        {/* the "jwt" passed into getItem is the same "jwt established in SignUp.jsx and login.jsx" 
        Can also check if token is going through in the google developer tools: Application => LocalStorage => localhost => and after logging in I should be able to see my key*/}
        </>
    )
    
}

export default Add