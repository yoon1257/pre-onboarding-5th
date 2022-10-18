import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["4월", "5월", "6월", "7월"],
  datasets: [
    {
      label: "월별 방문자 추이 ",
      data: [17, 28, 55, 30],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}
