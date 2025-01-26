import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function AreaChart() {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'Outgoing',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: 'Incoming',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true, // Show toolbar
          tools: {
            download: false, // Hide the download button
            selection: false, // Disable selection tool
            zoom: false, // Disable zooming
            zoomin: false, // Disable zoom in
            zoomout: false, // Disable zoom out
            pan: false, // Disable panning
            reset: false, // Disable reset zoom
          },
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        // colors: ['#FF5733', '#33FF57'], 
      },
      fill: {
      // colors: ['#FF5733', '#33FF57'], // Area colors
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
        tooltip: {
          enabled: false, // Disable tooltip on the x-axis
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      legend: {
        show: false, // Disable the legend
      },
    },
  });

  return (
    <div className="w-full">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default AreaChart;
