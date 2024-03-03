//Build a simple counter component that increments a value when a button is clicked.

import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setcount] = useState(0)

  function increment(){
    setcount(count+1)
  }
  return (
    <div>
    <p>count : {count}</p>
    <button onClick={increment}>add</button>
    </div>
  )
}

export default App