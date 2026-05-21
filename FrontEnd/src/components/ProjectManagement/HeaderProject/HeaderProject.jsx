import { Link } from "react-router-dom";

export default function HeaderProject({
  title,
  description,
  buttonName,
  showButton = true,
  addLink = "add",
}) {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">{title}</h2>
          <p className="text-muted mb-0">{description}</p>
        </div>

        {showButton && (
          <Link to={addLink} className="btn btn-success px-4 py-2 shadow-sm">
            {buttonName}
          </Link>
        )}
      </div>
    </div>
  );
}
