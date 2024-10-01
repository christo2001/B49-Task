import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import User from './User'

function Api() {
    const [data,setdata]= useState([])
    const [value,setvalue]= useState([])

    useEffect(()=>{
        const fetch = async()=>{
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setdata(response.data)
            } catch (error) {
                console.log('error')
            }
        }

        fetch()
    },[])

    const handlesubmit=(item)=>{
        const a = [...value, item]
        setvalue(a)
        console.log(a)
    }
  return (
    <div>
        <ul>
        {data.map((item,index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={(e)=>handlesubmit(item)}>add</button>
          </li>
        ))}
      </ul>
      <User data={value}/>
    </div>
  )
}

export default Api