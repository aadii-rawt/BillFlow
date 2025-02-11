import React, { useState } from "react";
import Chart from "react-apexcharts";

function AreaChart() {
  // Function to generate all 12 months of the current year
  const getAllMonths = () => {
    const months = [];
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, i, 1);
      const month = date.toLocaleString("en-US", { month: "short" }); // "Jan", "Feb", etc.
      months.push(`${month} '${currentYear.toString().slice(-2)}`); // "Jan '24"
    }
    return months;
  };

  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: "Outgoing",
        data: [11, 32, 45, 32, 34, 52, 41, 38, 50, 60, 55, 42], // Sample data
      },
      {
        name: "Incoming",
        data: [31, 40, 28, 51, 42, 109, 100, 95, 85, 77, 88, 99], // Sample data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: getAllMonths(), // Set months dynamically
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        x: {
          format: "MMM yy", // Display format in tooltip
        },
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <div className="w-full">
      <Chart options={chartOptions.options} series={chartOptions.series} type="area" height={350} />
    </div>
  );
}

export default AreaChart;
