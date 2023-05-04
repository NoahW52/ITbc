import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './components/Add.jsx'
import SignUp from './components/SignUp.jsx'
import BaseLayout from './components/BaseLayout.jsx'
import Login from './components/Login.jsx'
import { signUp } from './store/slices/authSlice.js'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function Root() {
  const dispatch = useDispatch()

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      dispatch(signUp(jwt))
    }
  }, [dispatch])
  return ( 
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
      <BaseLayout >
        <Routes>
          <Route path = "/" element = {<ProtectedRoute> <App /> </ProtectedRoute> }/>
          <Route path = "/add-book" element = {<Add />} />
          <Route path = "/register" element = { <SignUp />} />
          <Route path = "/login" element = { <Login /> } />
        </Routes>
      </BaseLayout>  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
    )

  }

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)
