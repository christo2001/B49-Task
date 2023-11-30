import React from 'react';
import cheat from './cheat.module.css'

function Cheatsheet() {
  return (
    <div>
    <div className={cheat.body}>
        
      <table className={cheat.responsivetable}>
        <thead>
          <tr>
            <th>Element</th>
            <th>Markdown Syntax</th>
            
          </tr>
        </thead>
        <tbody>

            {/* heading */}
          <tr>
            <td className={cheat.thead}>
            Table
            </td>
           
            <td className={cheat.code}>
              <div>
                | Syntax | Description |<br/>
                | ----------- | ----------- |<br/>
                | Header | Title |<br/>
                | Paragraph | Text |<br/>
              </div>
            </td>
          </tr>


        {/* Bold */}
          <tr>
            <td className={cheat.thead}>
               Footnote
            </td>
           
            <td className={cheat.code}>
              <div>
              [^1]: This is the footnote.
              </div>
            </td>
          </tr>


          
        {/* italic */}
        <tr>
            <td className={cheat.thead}>
            Heading ID
            </td>
           
            <td className={cheat.code}>
              <div>
              ### My Great Heading
              </div>
            </td>
          </tr>


          
        {/* Blockquote*/}
        <tr>
            <td className={cheat.thead}>
            Strikethrough
            </td>
           
            <td className={cheat.code}>
              <div>
              ~~The world is flat.~~
              </div>
            </td>
          </tr>


          
        {/* Ordered List*/}
        <tr>
            <td className={cheat.thead}>
            Task List
            </td>
           
            <td className={cheat.code}>
              <div>
                - [x] Write the press release<br/>
                - [ ] Update the website<br/>
                - [ ] Contact the media<br/>
              </div>
            </td>
          </tr>

          
        {/*Unordered List*/}
        <tr>
            <td className={cheat.thead}>
            Underline
            </td>
           
            <td className={cheat.code}>
              <div>
              ---
              </div>
            </td>
          </tr>

          
        {/* Code*/}
        <tr>
            <td className={cheat.thead}>
            Highlight
            </td>
           
            <td className={cheat.code}>
              <div>
              I need to highlight these ==very important words==.
              </div>
            </td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </table>



      {/* advance */}
     
      <table className={cheat.responsivetable}>
        <thead>
          <tr>
            <th>Element</th>
            <th>Markdown Syntax</th>
            
          </tr>
        </thead>
        <tbody>

            {/* heading */}
          <tr>
            <td className={cheat.thead}>
              Heading
            </td>
           
            <td className={cheat.code}>
              <div>
                # H1<br/>
                ## H2<br/>
                ### H3
              </div>
            </td>
          </tr>


        {/* Bold */}
          <tr>
            <td className={cheat.thead}>
              Bold
            </td>
           
            <td className={cheat.code}>
              <div>
               **bold text**
              </div>
            </td>
          </tr>


          
        {/* italic */}
        <tr>
            <td className={cheat.thead}>
              italic
            </td>
           
            <td className={cheat.code}>
              <div>
              *italicized text*
              </div>
            </td>
          </tr>


          
        {/* Blockquote*/}
        <tr>
            <td className={cheat.thead}>
            Blockquote
            </td>
           
            <td className={cheat.code}>
              <div>
              &gt;blockquote
              </div>
            </td>
          </tr>


          
        {/* Ordered List*/}
        <tr>
            <td className={cheat.thead}>
            Ordered List
            </td>
           
            <td className={cheat.code}>
              <div>
                1. First item<br/>
                2. Second item<br/>
                3. Third item<br/>
              </div>
            </td>
          </tr>

          
        {/*Unordered List*/}
        <tr>
            <td className={cheat.thead}>
              Unordered List
            </td>
           
            <td className={cheat.code}>
              <div>
                - First item<br/>
                - Second item<br/>
                - Third item<br/>
              </div>
            </td>
          </tr>

          
        {/* Code*/}
        <tr>
            <td className={cheat.thead}>
              Code
            </td>
           
            <td className={cheat.code}>
              <div>
                `code`
              </div>
            </td>
          </tr>

         {/* Link*/}
        <tr>
            <td className={cheat.thead}>
              Link
            </td>
           
            <td className={cheat.code}>
              <div>
              [title](https://www.example.com)
              </div>
            </td>
          </tr>


         {/* Image*/}
        <tr>
            <td className={cheat.thead}>
              Image
            </td>
           
            <td className={cheat.code}>
              <div>
              ![alt text](image.jpg)
              </div>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      
     
    </div>
    </div>
  );
}

export default Cheatsheet;
