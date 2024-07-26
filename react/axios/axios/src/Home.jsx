import React from 'react'

function Home(props){
    const{name,age,city}= props
  return (
    <div>
        <h1>{name}</h1>
      <p>{age}</p>
      <p>{city}</p>

    </div>
  )
}

export default Home