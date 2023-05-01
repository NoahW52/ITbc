import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './components/Add.jsx'
import SignUp from './components/SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<App />} />
          <Route path = "/add-book" element = { <Add />} />
          <Route path = "/register" element = { <SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
