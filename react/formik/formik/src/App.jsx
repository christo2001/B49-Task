import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Navbar from './Navbar'
const App = () => {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/cart' Component={Cart}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;