import { Link, useMatch } from "react-router-dom";

export default function HeadreUser({ title, discription, but_name }) {
  const isAddPage = useMatch("/dashboard/user-management/users/add");

  return (
    <>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">{title}</h2>
            <p className="text-muted mb-0">{discription}</p>
          </div>

          {!isAddPage && (
            <Link to="add" className="btn btn-success px-4 py-2 shadow-sm">
              {but_name}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
