import React from 'react';
import happy from "./images/happy.jpg";

function About() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="max-w-screen-lg py-4">
        <h2 className="font-bold text-center text-6xl text-slate-700 font-display">About Us</h2>

        <div className="mt-10 relative flex justify-center">
          <img src={happy} className="object-cover max-w-xs sm:max-w-full" alt="Happy Doctor" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-75 text-white p-10 sm:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold">About DocEase: Revolutionizing Accessible Healthcare</h2>
              <p className="text-sm sm:text-lg mt-4">
                At DocEase, we're dedicated to revolutionizing the way you access medical care. 
                Gone are the days of waiting rooms and long appointment scheduling processes. With our user-friendly interface and extensive network of healthcare providers, 
                you can book appointments with ease and get the care you need when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Cards (You can modify them accordingly) */}
        <div className="flex gap-6 mt-6 justify-center">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col w-full sm:w-1/3">
            <div className="p-6 flex flex-col flex-1">
              <div class="p-6 flex flex-col flex-1">
            <span class="block text-slate-400 font-semibold text-sm">Appointment Bookings</span>
            <h3 class="mt-3 mb-2  text-m">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Since our inception, we've facilitated over 3000 appointments booked through our platform, 
              streamlining the process of accessing medical care for our users.</a></h3>
             
           
          </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col w-full sm:w-1/3">
            <div className="p-6 flex flex-col flex-1">
              <div class="p-6 flex flex-col flex-1">
            <span class="block text-slate-400 font-semibold text-sm">User Milestone</span>
            <h3 class="mt-3 mb-2  text-m">
              <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
              Within the first year of operation, we proudly reached 1000 registered users, indicating the growing trust and reliance on our platform.</a></h3>
             
           
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
