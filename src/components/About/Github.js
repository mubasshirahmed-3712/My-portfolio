import React from "react";
import { Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Github() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours I Code",
        data: [4, 5, 3, 4, 5, 6, 2], // Customize coding hours for each day
        backgroundColor: "#8a2be2", // Deep purple tone
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "My Weekly Coding Routine",
        color: "#ffffff",
      },
    },
    scales: {
      x: { ticks: { color: "#ffffff" } },
      y: { ticks: { color: "#ffffff", beginAtZero: true } },
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Hours I <strong className="purple">Code</strong>
      </h1>
      <div style={{ width: "80%" }}>
        <Bar data={data} options={options} />
      </div>
    </Row>
  );
}

export default Github;
