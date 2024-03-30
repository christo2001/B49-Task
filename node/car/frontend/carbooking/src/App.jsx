import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Getcar from './Getcar'
import Registration from './Registration'
import Login from './Login'
import Changepassword from './Changepassword'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
  <Registration/>
  <Login/>
  <Changepassword/>
   <Getcar/>
    </>
  )
}

export default App
