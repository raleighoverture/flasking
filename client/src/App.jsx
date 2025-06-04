import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flask_server = "https://super-duper-bassoon-pj6grprwgqgqh6wwg-5000.app.github.dev/"

function TryLogin() {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`${flask_server}api/records`)
      .then(response => response.json())
      .then(json => setRecords(json))
      .finally(() => {
        setLoading(false)
      })
    }, [])
  }
  

function LoginForm() {
  return (
    <>
      <fieldset id="login-form">
        <legend>Login:</legend>
        <label for="username">Username: </label>
        <input type="text" id="username" />
        <button onClick={TryLogin()}>Login</button>
      </fieldset>
      <p id="records-field">No Records Loaded</p>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <LoginForm />
    </>
  )
}

export default App
