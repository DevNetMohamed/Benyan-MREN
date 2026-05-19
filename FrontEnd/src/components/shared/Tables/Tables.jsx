import { Link } from "react-router-dom";

export default function Tables({ title, discription, but_name }) {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">{title}</h2>
          <p className="text-muted mb-0">{discription}</p>
        </div>

        <Link to="add" className="btn btn-primary px-4 py-2 shadow-sm">
          {but_name}
        </Link>
      </div>

      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3">First Name</th>
                <th className="py-3">Last Name</th>
                <th className="py-3">Username</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="px-4">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td></td>
              </tr>

              <tr>
                <th className="px-4">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td></td>
              </tr>

              <tr>
                <th className="px-4">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
