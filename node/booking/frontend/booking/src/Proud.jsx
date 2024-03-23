import React from 'react'
import doc1 from "./images/doc1.png";


function Proud() {
  return (
    <div>



<div class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <div class="md:text-5xl text-2xl uppercase font-black">Awesome tool for your future team</div>
         <div class="text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
         <div class="my-5 h-16">
         
         </div>
      </div>

      
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
    <div class="bg-dots">
        <div class="shadow-lg max-w-md z-10 rounded-full mt-6 ml-4">
            <div class="text-2xl p-0 bg-white">
                <img alt="quote" class="float-left mr-1 shadow-lg bg-orange-300" src={doc1} />
            </div>
        </div>
    </div>
</div>

   </div>
</div>
    </div>
  )
}

export default Proud