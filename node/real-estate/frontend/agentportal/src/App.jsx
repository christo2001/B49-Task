import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login'
import AddFlat from './AddFlat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<AddFlat/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
