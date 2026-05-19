import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function DevelopersPerformanceChart() {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
    datasets: [
      {
        label: "COMMITTED",
        data: [120, 280, 200, 450, 300],
        borderColor: "#071426",
        backgroundColor: "#071426",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
      },
      {
        label: "COMPLETED",
        data: [100, 240, 180, 400, 280],
        borderColor: "#1FA37A",
        backgroundColor: "#1FA37A",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
        align: "end",

        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          boxWidth: 10,
          color: "#111827",

          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#374151",
        },
      },

      y: {
        beginAtZero: true,
        max: 600,

        ticks: {
          stepSize: 150,
          color: "#9CA3AF",
        },

        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="bg-white border rounded-4 p-4 h-100">
      <div className="mb-3">
        <h3 className="fw-bold mb-0">Developers Performance</h3>

        <p className="text-muted small">
          Developer engagement and project delivery metrics
        </p>
      </div>

      <div style={{ height: "320px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}