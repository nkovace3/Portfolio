import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import '../css/StockChart.css';

const StockChart = ({ currentSection }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // eslint-disable-next-line
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

  // eslint-disable-next-line
  const prices = [101.62, 198.67, 201.35, 267.09, 273.98, 273.98, 273.98];
  // eslint-disable-next-line
  const trends = [' ', '+97.05 (+95.50%)', '+2.68 (+1.35%)', '+65.74 (+32.65%)', '+6.89 (+2.58%)', '+6.89 (+2.58%)', '+6.89 (+2.58%)'];

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
            borderColor: '#0d6efd',
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
            ticks: {
              color: 'white',
              maxRotation: 0, // Set the max rotation to 0 degrees
              minRotation: 0, // Set the min rotation to 0 degrees
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
    // eslint-disable-next-line
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
    const priceElement = document.querySelector('.price');
    const trendElement = document.querySelector('.trend');
    if (currentSection === 0) {
      priceElement.textContent = ` `;
      trendElement.textContent = `${trends[currentSection]}`;
      return;
    }
    else{
      priceElement.textContent = `${prices[currentSection]}`;
      trendElement.textContent = `${trends[currentSection]}`;
      trendElement.classList.add('green');
    }
    const priceInterval = setInterval(() => {
      if (priceElement && trendElement) {
          const randPrice = (Math.random() * (1.5 - (-1.5)) + (-1.5) + prices[currentSection]).toFixed(2);
          const randTrend = `+${Math.abs(randPrice - prices[currentSection - 1]).toFixed(2)} (+${Math.abs(((randPrice / prices[currentSection - 1]) - 1) * 100).toFixed(2)}%)`

          priceElement.textContent = randPrice.toString();
          trendElement.textContent = randTrend;
      }
    }, 1000);

    return () => {
      clearInterval(priceInterval);
    };
  }, [currentSection, prices, trends]);

  return (
    <div className='chart-container'>
      <div className='chart-wrapper'>
        <h2 className='header' style = {{fontSize: '2.5vw'}}>Nikola Kovacevic, Inc. (NIK)</h2>
        <div className='price-trend-container'>
          {/* eslint-disable-next-line */}
          <h1 className='price' style = {{fontSize: '2.5vw'}}></h1>
          {/* eslint-disable-next-line */}
          <h2 className='trend' style = {{fontSize: '2.5vw'}}></h2>
        </div>
      </div>
      <canvas ref={chartRef} className='chart' />
    </div>
  );
};

export default StockChart;





