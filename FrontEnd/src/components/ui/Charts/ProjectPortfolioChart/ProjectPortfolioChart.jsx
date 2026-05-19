import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProjectPortfolioChart() {
  const data = {
    labels: ["Residential", "Commercial", "Industrial"],

    datasets: [
      {
        data: [56, 32, 12],

        backgroundColor: ["#071426", "#1FA37A", "#E5EDF5"],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white border rounded-4 p-4 h-100">
      <div className="mb-3">
        <h3 className="fw-bold mb-0">Project Portfolio</h3>

        <p className="text-muted small">Asset distribution across types</p>
      </div>

      <div
        className="position-relative mx-auto"
        style={{
          width: "250px",
          height: "250px",
        }}
      >
        <Doughnut data={data} options={options} />

        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="fw-bold mb-0">124</h2>

          <small className="text-muted">TOTAL</small>
        </div>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#071426",
                display: "inline-block",
              }}
            />

            <span>Residential</span>
          </div>

          <strong>56%</strong>
        </div>

        <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#1FA37A",
                display: "inline-block",
              }}
            />

            <span>Commercial</span>
          </div>

          <strong>32%</strong>
        </div>

        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#E5EDF5",
                border: "1px solid #D1D5DB",
                display: "inline-block",
              }}
            />

            <span>Industrial</span>
          </div>

          <strong>12%</strong>
        </div>
      </div>
    </div>
  );
}
