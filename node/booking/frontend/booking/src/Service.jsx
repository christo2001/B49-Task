import React from 'react'
import sr11 from "./images/sr1.avif";
import s2 from "./images/s2.png"
import sr3 from "./images/sr3.png"

function Service() {
  return (
    <div>
     
 
<div class=" py-20">
        <h1 class="text-5xl font-bold text-center pb-10"><span class="text-blue-700">How</span> We work</h1>

        <div class="max-w-6xl mx-auto flex flex-col gap-10 px-5 ">
            <div class="flex flex-col md:flex-row bg-white  border-top: 5px solid purple   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
                <div class="flex justify-center md:justify-end  border-top: 5px solid purple">
                    <div class="w-[120px] h-[120px] ">
                    <img
                        className='bg-purple-200 rounded-lg'
                        src={sr11}
                        alt=""
                      />
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-md p-4 " style={{  borderLeft: '1px solid purple' }}>
                    <h1 class="font-bold text-xl pb-4">1. Collect Requirements </h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.
                    </p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
                <div class="flex justify-center md:justify-end">
                    <div class="w-[120px] h-[120px] ">
                    <img
                        className='bg-green-200 rounded-lg'
                        src={s2}
                        alt=""
                      />
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-md p-4 "style={{  borderLeft: '1px solid green' }}>
                    <h1 class="font-bold text-xl pb-4">1. Collect Requirements </h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.
                    </p>
                </div>
            </div>


            <div class="flex flex-col md:flex-row bg-white    rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10" >
            <div className="flex justify-center md:justify-end" >
    <div className="w-[120px] h-[120px]">
        <img
            className='bg-orange-200 rounded-lg'
            src={sr3}
            alt=""
        />
    </div>
</div>

                <div class="bg-white shadow-lg rounded-md p-4"style={{  borderLeft: '1px solid orange' }}>
                    <h1 class="font-bold text-xl pb-4 ">1. Collect Requirements </h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.
                    </p>
                </div>
            </div>
            

       

       
            
            </div>
        </div>
    </div>
 
  )
}

export default Service