import { CiLock } from "react-icons/ci";
import InputAuth from "../../ui/inputAuth/InputAuth";

export default function AddNewUser() {
  const userDetails = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "e.g. Name",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "e.g. Name",
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "UserName",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your Email",
    },
  ];

  const passwordDetails = [
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  return (
    <div className="container my-4">
      <div className="card shadow-sm border rounded-3 p-4">
        <form className="row g-4">
          {/* Loop through user details (Rows 1 & 2) */}
          {userDetails.map((field) => (
            <div className="col-md-6" key={field.id}>
              <InputAuth
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div className="col-md-6 d-flex flex-column">
            <label className="form-label mb-2">Assign Role</label>
            <select className="form-select form-select-lg fs-6 shadow-none">
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="col-md-6 d-flex align-items-end">
            <div className="d-flex align-items-center justify-content-between w-100 p-2 px-3 bg-light border rounded">
              <span className="text-muted">Status: Active</span>
              <div className="form-check form-switch m-0 p-0">
                <input
                  className="form-check-input ms-0 mt-0"
                  type="checkbox"
                  role="switch"
                  id="statusSwitch"
                  defaultChecked
                  style={{
                    width: "2.5rem",
                    height: "1.25rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Loop through password details (Row 4) */}
          {passwordDetails.map((field) => (
            <div className="col-md-6" key={field.id}>
              <InputAuth
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div className="col-12">
            <hr className="text-muted my-2" />
          </div>

          <div className="col-12 d-flex justify-content-end gap-3 mt-2">
            <button
              type="button"
              className="btn btn-outline-dark px-4 fw-medium bg-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn px-4 fw-medium text-white"
              style={{ backgroundColor: "#006b44" }}
            >
              Save User
            </button>
          </div>
        </form>
      </div>

      {/* Footer Text */}
      <div
        className="text-center mt-4 text-muted"
        style={{ fontSize: "0.85rem" }}
      >
        <span className="d-inline-flex align-items-center gap-1">
          <CiLock />
          Secure Data Encryption Enabled
        </span>
        <span className="mx-2">•</span>
        <span>Last update: Aug 12, 2026</span>
      </div>
    </div>
  );
}
