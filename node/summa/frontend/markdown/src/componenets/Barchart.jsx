import React from 'react';
import chartcss from '../componenets/chart.module.css';
import 'chart.js/auto';

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
      text: 'Line Chart Example', // Change the title
    },
  },
  animation: {
    duration: 3000,
    easing: 'easeOutBounce',
  },
  maintainAspectRatio: false,
  height: 300,
  width: 400,
};

const data = {
  labels: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
  datasets: [
    {
      label: 'present',
      data: [10,20,30,40,40,50,60,70,70,80,70,100],
      borderColor: 'green', // Line color
      fill: false, // Do not fill the area under the line
    },
  ],
};

function LineChart() {
  return (
    <div className={chartcss.body}>
      <div className={chartcss.chart}>
        <div className={chartcss.line}>
          <Line options={options} data={data}></Line>
        </div>
      </div>
    </div>
  );
}

export default LineChart;
