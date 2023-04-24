import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from 'redux'
import Reducer from './store/Reducer'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddPage from './components/AddPage'

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />} />
      <Route path = "/add-book" element = {<AddPage />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
