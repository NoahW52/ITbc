import { Link } from "react-router-dom"
import "../css/Menu.css"

function Menu() {
    return(
        <>
            <Link to={'/'} className="menuLink">Views Books</Link>
            <Link to={'/add-book'} className="menuLink">Enter New Book</Link>
            <Link to={'/register'} className="menuLink">Register</Link>
            <Link to={'/login'} className="menuLink">Login</Link>
        </>
    )
}

export default Menu