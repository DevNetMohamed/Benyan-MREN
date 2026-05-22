import { Link } from "react-router-dom";
import { FiSave } from "react-icons/fi";

export default function HeaderProject({
  title,
  description,
  buttonName,
  showButton,
  addLink,
  showSaveCancel = false,
  onCancel,
  onSave,
}) {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        {/* Left: Title & Description */}
        <div>
          <h4 className="fw-bold mb-1">{title}</h4>
          <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
            {description}
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="d-flex align-items-center gap-2">
          {showButton && (
            <Link to={addLink} className="btn btn-success px-4">
              {buttonName}
            </Link>
          )}

          {showSaveCancel && (
            <>
              <button className="btn btn-light border px-4" onClick={onCancel}>
                Cancel
              </button>
              <button
                className="btn px-4 d-flex align-items-center gap-2 text-white"
                style={{ background: "#1a1a2e" }}
                onClick={onSave}
              >
                <FiSave size={15} />
                Save Project
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
