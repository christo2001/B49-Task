import React, { useContext, useState } from 'react';
import { productcontext } from './Context';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Navbar from './Navbar';
import homecss from './homeurl.module.css';

function Home() {
    const { url, seturl, shortenedUrl, setShortenedUrl } = useContext(productcontext);

    const shortenUrl = async (e) => {
        e.preventDefault();
        try {
            // Check if the URL is valid and starts with 'https://' before making the request
            if (url && url.startsWith('https://')) {
                const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
                const data = response.data;
                setShortenedUrl([...shortenedUrl, data]); // Add the new URL to the array
                seturl('');
            } else {
                alert("Invalid URL or URL is not using HTTPS.");
            }
        } catch (error) {
            alert("An error occurred while shortening the URL.");
        }
    };

    return (
        <div>
            <Navbar />

            <form onSubmit={shortenUrl} className={homecss.form}>
                <div className="app">
                    <div className='shortener'>
                        <h2 className={homecss.heading}>Shortening your URL?</h2>
                        <p className={homecss.para}>Sure, we can do it for you.</p>
                        <input
                            placeholder='Enter URL'
                            className={homecss.inputvalue}
                            value={url}
                            onChange={(e) => seturl(e.target.value)} />
                        <button type="submit" className={homecss.btn}>Submit</button>
                        <p className={homecss.para}>*Free and always will be - unlimited URLs*</p>

                        
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;
