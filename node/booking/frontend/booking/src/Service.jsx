import React from 'react'
import sr11 from "./images/sr1.avif";
import s2 from "./images/s2.png"
import sr3 from "./images/sr3.png"


function Service() {
  return (
    <div>
     
 
<div class=" py-20">
        <h1 class="text-5xl font-bold text-center pb-20"><span class="text-blue-700">How</span> We work</h1>

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
                <div class="bg-white shadow-lg rounded-md p-4 " style={{  borderLeft: '3px solid purple' }}>
                    <h1 class="font-bold text-xl pb-4">Find a Doctor</h1>
                    <p >
                    Our intuitive search platform empowers you to locate qualified doctors based on specialty, location, and patient reviews, ensuring you find the ideal match for your healthcare journey. 
                    
                    </p>
                </div>
            </div>

            

            <div class="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
                <div class="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div class="w-[120px] h-[120px] ">
                    <img
                        className='bg-green-200 rounded-lg'
                        src={s2}
                        alt=""
                      />
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-md p-4 "style={{  borderLeft: '3px solid green' }}>
                    <h1 class="font-bold text-xl pb-4">Find a Location </h1>
                    <p >
                    Our intuitive platform allows you to search by location, services offered, and patient ratings, ensuring you find the most convenient and reputable healthcare facilities near you.
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

                <div class="bg-white shadow-lg rounded-md p-4"style={{  borderLeft: '3px solid orange' }}>
                    <h1 class="font-bold text-xl pb-4 ">Book Appointment </h1>
                    <p >
                    Our platform offers seamless access to a wide range of healthcare professionals, allowing you to book appointments at your convenience.
                    </p>
                </div>
            </div>
            

       

       
            
            </div>
        </div>
    </div>
 
  )
}

export default Service