export default function Tables() {
  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
      <div className="card-body p-0">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-secondary">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3">First Name</th>
              <th className="py-3">Last Name</th>
              <th className="py-3">Username</th>
              <th className="py-3">Email</th>
              <th className="py-3">Role</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
