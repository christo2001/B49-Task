import React, { useContext } from 'react';
import Navbar from './Navbar';
import { productcontext } from './Context'; // Assuming this import is correctly set up.
import shorturl from './shorturl.module.css';

function Shorturl() {
  const { shortenedUrl } = useContext(productcontext);

  if (shortenedUrl.length === 0) {
    return (
      <div>
        <Navbar />
        <h2>No URLs to display.</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Shortened URLs</h1>
      <table className={shorturl.head}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {shortenedUrl.map((short, index) => (
            <tr key={index}>
              <td className={shorturl.url}>{index + 1}</td>
              <td>
                <a href={short} target="_blank" rel="noopener noreferrer" className={shorturl.url}>
                  {short}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shorturl;
