import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ChartBar = () => {
  let data = {
    labels: ["4월", "5월", "6월", "7월"],
    datasets: [
      {
        type: "bar",
        label: "월별 게시글 등록수 ",
        backgroundColor: "rgb(255, 99, 132)",
        data: [20, 25, 52, 98],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line type="line" data={data} options={options} />
    </div>
  );
};

export default ChartBar;
