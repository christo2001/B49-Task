import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import textareacss from './markdown.module.css'

function Markdowns() {
  const filename = 'Marl';
  const [post, setPost] = useState('');

  const handleMarkdownChange = (event) => {
    setPost(event.target.value);
  };

  useEffect(() => {
    // Fetch the Markdown content directly from the file
    fetch(`../markdown/${filename}.md`)
      .then((response) => response.text())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error('Error loading Markdown content:', error);
      });
  }, [filename]);

  return (
    <div className={textareacss.body}>
      <div className={textareacss.textarea}>
        <textarea value={post} onChange={handleMarkdownChange} rows={10} cols={50}  />
      </div>

      <div  className={textareacss.markdownarea}>
      <Markdown
        options={{
          overrides: {
            code: ({ children, language }) => (
              <SyntaxHighlighter language={language} style={vs} >
                {children}
              </SyntaxHighlighter>
            ),
          },
        }}
      >
        {post}
      </Markdown>
      </div>

      
    </div>
  );
}

export default Markdowns;
