import React from 'react'
import homecss from './home.module.css';

function Home() {
  return (
    <div>
        <p className={homecss.loggedin}>successfully logged in</p>
    </div>
  )
}

export default Home