import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [ Log, setLog ] = useState({})
    const navigate = useNavigate()

    const handleInput = (e) => {
        setLog({
            ...Log,
            [e.target.name]: e.target.value
        })
    }

    const handleButton = async() => {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Log)
        })
        const result = await response.json()
        localStorage.setItem("jwt", result.token)
        navigate('/')
    }
    return(
        <>
        <br />
            <input type="text" placeholder="username" name="username" onChange={handleInput} />
            <input type="text" placeholder="password" name="password" onChange={handleInput}/>
            <button onClick={handleButton}>login</button>
            <Link to={'/register'}>
                <button>Register Here</button>
            </Link>
        </>
    )
}

export default Login