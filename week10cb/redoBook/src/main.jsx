import React from 'react'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
      <BaseLayout >
        <Routes>
          <Route path = "/" element = {<App />} />
          <Route path = "/add-book" element = { <Add />} />
          <Route path = "/register" element = { <SignUp />} />
          <Route path = "/login" element = { <Login /> } />
        </Routes>
      </BaseLayout>  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
