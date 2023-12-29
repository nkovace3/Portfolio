// import React, { useEffect, useRef, useState } from 'react';
// import { Chart } from 'chart.js/auto';
// import '../css/StockChart.css';
// import smiley from '../smiley.png';

// const StockChart = ({ currentSection }) => {
//   const chartRef = useRef(null);
//   const imageRef = useRef(null);
//   const chartInstanceRef = useRef(null);
//   const mainContainer = document.querySelector('.main-container');


//   const stockData = [
//     100, 120, 140, 110, 130, 150, 120, 140, 160, 180,
//     200, 170, 190, 210, 180, 200, 220, 190, 210, 230,
//     200, 220, 240, 210, 230, 250, 220, 240, 260, 250,
//     270, 240, 260, 280, 250, 270, 290, 260, 280, 300,
//     270, 290, 310, 280, 300, 320, 310, 330, 340, 350
//   ];

//   const labels = Array.from({ length: stockData.length }, (_, i) =>
//     (i % 10 === 0 && i / 10 < 6) ? (2020 + Math.floor(i / 10)).toString() : ''
//   );

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     // Create the initial chart with all data points visible
//     const chartInstance = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: 'Stock Chart',
//             data: stockData,
//             borderColor: 'blue',
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Year',
//             },
//           },
//           y: {
//             display: false, // Hide the y-axis
//             ticks: {
//               stepSize: 10,
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             display: false, // Hide the legend
//           },
//           tooltip: {
//             enabled: false, // Disable the tooltip
//           },
//         },
//       },
//     });

//     // Save the Chart instance to a ref for later destruction
//     chartInstanceRef.current = chartInstance;

//     // Clean up the chart on component unmount
//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }
//     };
//   }, [stockData, labels]); // Include stockData and labels in the dependencies array

//   // useEffect(() => {
//   //   // Assuming each section displays 10 data points
//   //   const dataPointsToShow = (currentSection + 1) * 10;

//   //   const ctx = chartRef.current.getContext('2d');
//   //   if (ctx && chartInstanceRef.current) {
//   //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//   //     // Update the existing Chart instance
//   //     chartInstanceRef.current.data.labels = labels;
//   //     chartInstanceRef.current.data.datasets[0].data = stockData.map((value, index) =>
//   //       index < dataPointsToShow ? value : null
//   //     );
//   //     chartInstanceRef.current.update();
//   //   }
//   // }, [currentSection, labels, stockData]);
//   useEffect(() => {
//     // Assuming each section displays 10 data points
//     const dataPointsToShow = (currentSection + 1) * 10;
  
//     if (chartInstanceRef.current) {
//       const chartData = chartInstanceRef.current.data.datasets[0].data;
  
//       // Update the existing Chart instance in place
//       for (let i = 0; i < stockData.length; i++) {
//         chartData[i] = i < dataPointsToShow ? stockData[i] : null;
//       }
  
//       chartInstanceRef.current.update();
//     }
//   }, [currentSection, stockData]);

//   return (
//     <div>
//       <div className='chart-container'>
//         <div>
//           <h2 className='header'>Nikola Kovacevic, Inc. (NIK)</h2>
//         </div>
//         {/* Image riding along the chart line */}
//         <img ref={imageRef} src={smiley} alt='Stock Image' className='stock-image' />
//         <canvas ref={chartRef} className='chart' />
//       </div>
//     </div>
//   );
// };

// export default StockChart;
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import '../css/StockChart.css';

const StockChart = ({ currentSection }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const stockData = [
    100, 120, 140, 110, 130, 150, 120, 140, 160, 180,
    200, 170, 190, 210, 180, 200, 220, 190, 210, 230,
    200, 220, 240, 210, 230, 250, 220, 240, 260, 250,
    270, 240, 260, 280, 250, 270, 290, 260, 280, 300,
    270, 290, 310, 280, 300, 320, 310, 330, 340, 350
  ];

  const labels = Array.from({ length: stockData.length }, (_, i) =>
    (i % 10 === 0 && i / 10 < 6) ? (2020 + Math.floor(i / 10)).toString() : ''
  );

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Create the initial chart with fixed y-axis range
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Stock Chart',
            data: stockData,
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
          y: {
            display: false, // Hide the y-axis
            ticks: {
              stepSize: 10,
            },
            min: 90,  // Set the minimum y-axis value
            max: 360,  // Set the maximum y-axis value
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            enabled: false, // Disable the tooltip
          },
        },
        animation: {
          duration: 0, // Disable animation
        },
      },
    });

    // Save the Chart instance to a ref for later destruction
    chartInstanceRef.current = chartInstance;

    // Clean up the chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // No dependencies, create the chart only once

  useEffect(() => {
    // Assuming each section displays 10 data points
    const dataPointsToShow = (currentSection + 1) * 10;

    if (chartInstanceRef.current) {
      const chartData = chartInstanceRef.current.data.datasets[0].data;

      // Update the existing Chart instance in place
      for (let i = 0; i < stockData.length; i++) {
        chartData[i] = i < dataPointsToShow ? stockData[i] : null;
      }

      chartInstanceRef.current.update();
    }
  }, [currentSection, stockData]);

  return (
    <div>
      <div className='chart-container'>
        <div>
          <h2 className='header'>Nikola Kovacevic, Inc. (NIK)</h2>
        </div>
        <canvas ref={chartRef} className='chart' />
      </div>
    </div>
  );
};

export default StockChart;





