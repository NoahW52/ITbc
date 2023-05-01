import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(11)
  const [api, setApi] = useState([])

  const increase = () => {
    setCount(count + 1)
  }
  const subtract = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    const result = await response.json()
    setApi(result)
  }

  const apiItems = api.map(item => {
    return <li key = {item.index}>
      <b>{item.title}</b>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <img src = {item.images[0]} />
    </li>
  })

  return (
    <>
    <ul>
      {apiItems}
    </ul>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={subtract}>-</button>
    </>
  )
}

export default App
