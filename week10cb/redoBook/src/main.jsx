import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './components/Add.jsx'
import SignUp from './components/SignUp.jsx'
import BaseLayout from './components/BaseLayout.jsx'
import Login from './components/Login.jsx'
import { useDispatch } from 'react-redux'
import { signUp } from './store/slices/authSlice.js'
import ProtectedRoute from './components/ProtectedRoute.jsx'

// const dispatch = useDispatch()
// const token = localStorage.getItem('jwt')
// if(token) {
//   dispatch(signUp(token))
// }
function AuthLoader() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(token) {
      dispatch(signUp(token))
    }
  }, [dispatch])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
      <BaseLayout >
        <Routes>
          <Route path = "/" element = {<ProtectedRoute> <App /> </ProtectedRoute>} />
          <Route path = "/add-book" element = {<ProtectedRoute> <Add /> </ProtectedRoute>} />
          <Route path = "/register" element = { <SignUp />} />
          <Route path = "/login" element = { <Login /> } />
        </Routes>
      </BaseLayout>  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
