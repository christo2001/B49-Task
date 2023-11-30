import React, { useContext } from 'react';
import Navbar from './Navbar';
import { productcontext } from './Context'; // Assuming this import is correctly set up.
import shorturl from './shorturl.module.css';

function Shorturl() {
  const { shortenedUrl } = useContext(productcontext);

  const handleCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  if (shortenedUrl.length === 0) {
    return (
      <div>
        <Navbar />
        <h2 className={shorturl.nourl}>No URLs to display.</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className={shorturl.urltext}>Shortened URLs</h1>
      <table className={shorturl.head}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Short URL</th>
            <th>Action</th>
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
              <td>
                <button onClick={() => handleCopyToClipboard(short)} className={shorturl.copybtn}>
                  Copy to Clipboard
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shorturl;
