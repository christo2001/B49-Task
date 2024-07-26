import { useState } from 'react'
import './App.css'
import Registration from './Registration'
import Login from './Login'
import AddFlat from './AddFlat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Registration/>
     <Login/>
     <AddFlat/>
    </>
  )
}

export default App
