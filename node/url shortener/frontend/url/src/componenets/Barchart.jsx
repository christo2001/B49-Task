import React, { useEffect, useState } from 'react';
import chartcss from '../componenets/chart.module.css';
import 'chart.js/auto';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController, // Change BarElement to LineController
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController, // Change BarElement to LineController
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Markdown Users Count', // Change the title
    },
  },
  animation: {
    duration: 3000,
    easing: 'easeInOutQuart', // Use a different predefined easing function
  },  
  maintainAspectRatio: false,
  height: 300,
  width: 400,
};

const linedata = {
  labels: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
  datasets: [
    {
      label: 'USERS',
      data: [1000,1500,3000,4000,3900,5000,6000,7000,6000,8000,7000,10000],
      borderColor: 'green', // Line color
      fill: false, // Do not fill the area under the line
    },
  ],
};

//doughnut chart info

const doughnutdata = {
  labels: ['Consumers','Developers','Content Creators'],
  datasets: [
    {
      label: 'TYPE OF USERS',
      data: [1000,1500,3000],
      backgroundColor: ['lightblue', 'navy', 'skyblue'], // Line color
      fill: false, // Do not fill the area under the line
    },
  ],
};

// ...

function LineChart() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Set interval for AOS animations
    const aosAnimationInterval = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 10000); // Adjust the interval duration (in milliseconds) as needed

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(aosAnimationInterval);
    };
  }, []);

  // ...

  return (
    <div className={chartcss.body} data-aos="fade-up" key={renderCount}>
      <div className={chartcss.chart}>
        <div className={chartcss.line}>
          <Line options={options} data={linedata}></Line>
        </div>
        <div className={chartcss.doughnut}>
          <Doughnut options={options} data={doughnutdata}></Doughnut>
        </div>
      </div>
    </div>
  );
}

export default LineChart;


