import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../css/SignUp.css'
import { useDispatch } from 'react-redux'
import { signUp } from "../store/slices/authSlice"

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState({})

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    /*Another way of writing this code would be 
     const handleInput = (e) => {
        const { name, value } = e.target
        setUser((user) => ({
            ...user,
            [name]: value
        {))
    }*/

    const handleSubmit = async() => {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const result = await response.json()
        localStorage.setItem('jwt', result.token)
        dispatch(signUp())
        navigate('/')
    }

    return(
        <>
            <div id="wholeBorder">
                <h1 id="signUpHead">Join Book Barn today!</h1>
                <div id="signUpBlock">               
                    <input type="text" placeholder="Username" name="username" onChange={handleInput} />
                    <br />
                    <input type="text" placeholder="Password" name="password" onChange={handleInput}/>
                    <br />
                    <input type="text" placeholder="FirstName" name="firstName" onChange={handleInput}/>
                    <br />
                    <input type="text" placeholder="LastName" name="lastName" onChange={handleInput}/>
                    <br />
                    <input type="text" placeholder="Email" name="email" onChange={handleInput}/>
                    <br />
                    <button onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </>
    )
}

export default SignUp