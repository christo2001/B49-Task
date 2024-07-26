import React from 'react'
import { useState } from 'react'

function Animal() {
    const[name,setname]= useState({
        name:''
    })
    const[value,setvalue]= useState([])

    const handlesubmit=(event)=>{
        event.preventDefault()
        setvalue([...value,name])
    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
        <label>name
            <input type='text' name='name' value={name.name} onChange={(e)=>setname({...name, name:e.target.value})}/>
        </label>
        <button type='submit'>submit</button>
        </form>
        {value.map((data, index) => (
        <div key={index}>
          <ul>
            <li>{data.name}</li>
          </ul>
        </div>
      ))}

    </div>
  )
}

export default Animal