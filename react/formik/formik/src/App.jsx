import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Book from './Book'
import Bookrecord from './Bookrecord'
import Navbar from './Navbar'
import Author from './Author'
import Authorrecord from './Authorrecord'
const App = () => {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/book' Component={Book}></Route>
      <Route path='/bookrecord' Component={Bookrecord}></Route>
      <Route path='/author' Component={Author}></Route>
      <Route path='/authorrecord' Component={Authorrecord}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;