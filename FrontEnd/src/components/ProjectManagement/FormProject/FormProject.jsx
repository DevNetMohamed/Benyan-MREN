import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import InputAuth from "../../ui/inputAuth/InputAuth";
import DropDownList from "../DropDownList/DropDownList";

export default function FormProject() {
  const developerOptions = ["Emaar Properties", "DAMAC Properties", "Nakheel"];
  const statusOptions = ["Active", "Sold Out", "Coming Soon"];

  return (
    <div className="card shadow-sm border rounded-3 p-4 bg-white">
      <div className="d-flex align-items-center gap-2 mb-4">
        <AiOutlineExclamationCircle size={20} style={{ color: "#006b44" }} />
        <span
          className="fw-bold text-uppercase tracking-wider"
          style={{ fontSize: "0.85rem", color: "#041e1a" }}
        >
          Basic Information
        </span>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <InputAuth
            label="Project Name"
            type="text"
            placeholder="e.g. Skyline Residence"
          />
        </div>

        <div className="col-md-6 d-flex flex-column">
          <label className="form-label text-secondary fw-medium small mb-2">
            Developer
          </label>
          <div className="custom-dropdown-green-active">
            <DropDownList
              placeholder="Emaar Properties"
              options={developerOptions}
            />
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column">
          <label className="form-label text-secondary fw-medium small mb-2">
            Status
          </label>
          <DropDownList placeholder="Active" options={statusOptions} />
        </div>

        <div className="col-12">
          <label className="form-label text-secondary fw-medium small mb-2">
            Location (City/District)
          </label>
          <div className="position-relative">
            <span className="position-absolute top-50 translate-middle-y ms-3 text-secondary">
              <CiLocationOn size={18} />
            </span>
            <input
              type="text"
              className="form-control ps-5 py-2 shadow-none border"
              placeholder="e.g. Dubai Marina, UAE"
              style={{ borderRadius: "0.375rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
