import InputAuth from "../../ui/inputAuth/InputAuth";
import DropDownList from "../DropDownList/DropDownList";
import { GiSettingsKnobs } from "react-icons/gi";

export default function SpecificationsProject() {
  const projectTypeOptions = ["Apartment", "Villa", "Townhouse", "Penthouse"];
  const Q = ["Q1", "Q2", "Q3", "Q4"];
  const Year = ["2024", "2025", "2026", "2027"];

  return (
    <div className="card shadow-sm border rounded-3 p-4 bg-white">
      <div className="d-flex align-items-center gap-2 mb-4">
        <GiSettingsKnobs size={20} style={{ color: "#006b44" }} />
        <span
          className="fw-bold text-uppercase tracking-wider"
          style={{ fontSize: "0.85rem", color: "#041e1a" }}
        >
          Specifications
        </span>
      </div>

      <div className="row g-4">
        <div className="col-12 d-flex flex-column">
          <label className="form-label text-secondary fw-medium small mb-2">
            Project Type
          </label>
          <DropDownList placeholder="Apartment" options={projectTypeOptions} />
        </div>

        <div className="col-12">
          <InputAuth label="Total Units" type="number" placeholder="e.g. 240" />
        </div>

        <div className="col-12">
          <label className="form-label text-secondary fw-medium small mb-2">
            Delivery Date
          </label>
          <div className="d-flex gap-2">
            <div className="flex-fill">
              <DropDownList placeholder={Q[0]} options={Q} />
            </div>
            <div className="flex-fill">
              <DropDownList placeholder={Year[0]} options={Year} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
