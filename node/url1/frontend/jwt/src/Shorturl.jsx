import React,{useContext} from 'react'
import Navbar from './Navbar';
import Context, { productcontext } from './Context';

function Shorturl() {

    const {shortenedUrl}= useContext(productcontext)
  return (
    <div>
        <Navbar/>
        <h1>shorturl</h1>
        {shortenedUrl.map((short, index) => (
                                <div key={index}>
                                    <h2>{short}</h2>
                                </div>
                            ))}
        
    </div>
  )
}

export default Shorturl