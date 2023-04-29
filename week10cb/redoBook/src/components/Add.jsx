import { useState } from "react"
import { useNavigate } from "react-router"

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
        const { name, value } = e.target
        //the 'name' property is the name of the input field that was changed, and the 'value' property is the new value of the input field.
        console.log(name, value)
    }
    
    return(
        <>
        <h1>Add your book here!</h1>
        <input type="text" name="title" placeholder="Title" onChange={handleInput}/>
        <input type="text" name="genre" placeholder="Genre" onChange={handleInput}/>
        <input type="text" name="author" placeholder="Author" onChange={handleInput}/>
        <input type="date" name="year" placeholder="Year" onChange={handleInput}/>
        <input type="text" name="imageURL" placeholder="ImageURL" onChange={handleInput}/>
        </>
    )
    
}

export default Add