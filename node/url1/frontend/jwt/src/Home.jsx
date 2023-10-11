import React, { useContext, useState } from 'react';
import { productcontext } from './Context';
import axios from 'axios';
import Navbar from './Navbar';
    
    function Home() {
        const { url, seturl, shortenedUrl, setShortenedUrl } = useContext(productcontext);
    
        const shortenUrl = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.get(`http://tinyurl.com/api-create.php?url=${url}`);
                const data = response.data;
                setShortenedUrl([...shortenedUrl, data]); // Add the new URL to the array
            } catch (error) {
                alert(error);
            }
        };
    
        return (
            <div>
                <Navbar/>
                 
                <form onSubmit={shortenUrl}>
                    <div className="app">
                        <div className='shortener'>
                            <h2>URL shortener</h2>
                            <input
                                placeholder='Enter URL'
                                value={url}
                                onChange={(e) => seturl(e.target.value)} />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    
    export default Home;
    
