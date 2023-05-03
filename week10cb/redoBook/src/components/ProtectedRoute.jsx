import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function ProtectedRoute(props) {
    const navigate = useNavigate()
    const isAuth = useSelector(state=> state.isAuth.auth)

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    })
    return props.children
}