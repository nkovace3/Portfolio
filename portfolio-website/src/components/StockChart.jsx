import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

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

  const prices = [101.62, 198.67, 201.35, 267.09, 273.98];
  const trends = ['+0.00 (+0.00%)', '+97.05 (+95.50%)', '+2.68 (+1.35%)', '+65.74 (+32.65%)', '+6.89 (+2.58%)']

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
            borderColor: 'purple',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1, 
        scales: {
          x: {
            title: {
              display: false,
              text: 'Year',
            },
          },
          y: {
            display: false, 
            ticks: {
              stepSize: 10,
            },
            min: 90,  
            max: 360,  
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
          tooltip: {
            enabled: false, 
          },
        },
        animation: {
          duration: 0, 
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

  useEffect(() => {
    // Update the price based on the current section
    const priceElement = document.querySelector('.price');
    const trendElement = document.querySelector('.trend');
    if (priceElement&&trendElement) {
      priceElement.textContent = `${prices[currentSection]}`;
      trendElement.textContent = `${trends[currentSection]}`;
      if (currentSection === 0) {
        trendElement.classList.remove('green');
        trendElement.classList.add('grey');
      } else {
        trendElement.classList.remove('grey');
        trendElement.classList.add('green');
      }
    }
  }, [currentSection, prices, trends]);

  return (
    <div>
      <div className='chart-container'>
        <h2 className='header'>Nikola Kovacevic, Inc. (NIK)</h2>
        <div className='price-trend-container'>
          <h1 className='price'></h1>
          <h2 className='trend'></h2>
        </div>
        <canvas ref={chartRef} className='chart' />
      </div>
    </div>
  );
};

export default StockChart;





