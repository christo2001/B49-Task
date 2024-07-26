import React from 'react';
import doc1 from "./images/doc1.png";
import doc2 from "./images/doc2.png";
import doc3 from "./images/doc3.png";
import bgImage from "./images/bg.jpg";
import Service from './Service';
import Doctor from './Doctor';
import Booking from './Booking';
import Proud from './Proud';
import Myappointment from './Myappointment';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';


function Home() {

  return (
    <div>
           <Navbar/>
          
      <div>
        <div className="absolute top-20 -right-1 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
        <div className="absolute top-60 -left-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <section className="pb-24 relative z-30">
          <div className="mx-auto">
            <div className="relative z-40 container mx-auto h-full lg:px-8">
              <div className="px-4 py-4 lg:px-8 lg:pt-20">
                <div className="grid gap-10 lg:grid-cols-2 mx-84">
                  <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                      <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold leading-normal text-left ">
                        World -Class Health Care For Everyone
                      </h2>
                     
                    </div>
                    
                    <div>
                    </div>
                    <h2 className="  text-2xl   text-left ">
                        World -Class Health Care For Everyone World -Class Health Care For Everyone World -Class Health Care For Everyone
                      </h2>
                    <div>
                    <div class="mt-12 ml-8">
            <div class="relative -left-10 grid grid-cols-3 gap-6 sm:gap-6 xl:gap-8">
            <div class="sm:left-auto sm:flex sm:items-center sm:justify-start">

                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                  <div
                      class=" relative bottom-3 border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                      Years Of Experience
                    </div>
                    <p class="text-4xl font-bold text-gray-900">16+</p>
                   
                  </div>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  </div> 
              </div>
              <div class="text-center sm:flex sm:items-center sm:justify-center">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <div
                      class=" relative bottom-3 border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                      Clinic Location
                    </div>
                    <p class="text-4xl font-bold ml-4 text-gray-900">28+</p>
                  </div>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                </div> 
              </div>
              <div class="text-center sm:flex sm:items-center sm:justify-center">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <div
                      class=" relative bottom-3 border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                      Patient satisfaction
                    </div>
                    <p class="text-4xl font-bold ml-4 text-gray-900">100%</p>
                  </div>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                </div> 
              </div>
            </div>
          </div>

          <div class="relative -left-3 top-5 h-32 w-56 mt-5 flex flex-col"> 
    <button class="rounded-full bg-blue-500 px-8 py-4 text-sm mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700" >
      <a href='#doctor'> Request an Appointment</a>
       
    </button> 
</div>


                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full -mx-4 lg:pl-10">
                    <div className="px-3">
                      <img
                        className="object-cover w-80 h-64 rounded shadow-lg sm:h-80 sm:w-80 xl:h-96 xl:w-96 bg-blue-500"
                        src={doc1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-end px-3">
                      <img
                        className="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80 bg-purple-500"
                        src={doc2}
                        alt=""
                      />
                      <img
                        className="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80 bg-yellow-200"
                        src={doc3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <About/>
      <Service/>
      <Doctor/>
      <Booking/>
      <Proud/>
      <Footer/>

    </div>
  );
}

export default Home;
