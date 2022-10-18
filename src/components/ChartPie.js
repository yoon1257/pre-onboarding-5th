import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [35, 29, 11, 10, 8, 7],
      backgroundColor: [
        "#56C1FE",
        "#04A1FF",
        "#0076BA",
        "#004D80",
        "#003462",
        "#001837",
      ],
      borderColor: [
        "#56C1FE",
        "#04A1FF",
        "#0076BA",
        "#004D80",
        "003462",
        "#001837",
      ],
      borderWidth: 1,
    },
  ],
};

export function ChartPie() {
  return (
    <>
      <Pie data={data} />
    </>
  );
}
