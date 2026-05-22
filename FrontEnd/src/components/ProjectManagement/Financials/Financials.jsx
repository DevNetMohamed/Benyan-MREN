import { FaMoneyBills } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { LuCloudUpload } from "react-icons/lu";
import InputAuth from "../../ui/inputAuth/InputAuth";
import { TbCircleArrowLeft } from "react-icons/tb";

export default function Financials() {
  const priceFields = [
    { id: "startPrice", label: "Start Price (AED)" },
    { id: "totalValue", label: "Total Value (AED)" },
    { id: "commissionRate", label: "Commission Rate (%)" },
  ];

  return (
    <div className="row g-4 col-12">
      <div className="col-12 col-lg-8">
        <div className="card shadow-sm border rounded-3 p-4 bg-white h-100 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2 mb-4">
              <FaMoneyBills size={20} style={{ color: "#006b44" }} />
              <span
                className="fw-bold text-uppercase tracking-wider"
                style={{ fontSize: "0.85rem", color: "#041e1a" }}
              >
                Financials
              </span>
            </div>

            <div className="row g-3 mb-4">
              {priceFields.map((field) => (
                <div className="col-12 col-md-4" key={field.id}>
                  <InputAuth
                    label={field.label}
                    placeholder={field.id === "commissionRate" ? "3.5" : "0.00"}
                    type="number"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="form-floating mt-auto">
            <textarea
              className="form-control"
              placeholder="Enter full project details..."
              id="floatingTextarea2"
              style={{ height: "210px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2" className="text-secondary">
              Description
            </label>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <div className="card shadow-sm border rounded-3 p-4 bg-white h-100">
          <div className="d-flex align-items-center gap-2 mb-4">
            <AiOutlinePicture size={20} style={{ color: "#006b44" }} />
            <span
              className="fw-bold text-uppercase tracking-wider"
              style={{ fontSize: "0.85rem", color: "#041e1a" }}
            >
              Project Media
            </span>
          </div>

          <div className="d-flex flex-column gap-3">
            <div>
              <label className="form-label text-secondary fw-medium small mb-2">
                Primary Cover Image
              </label>

              <div
                className="border border-secondary border-dashed rounded-3 p-4 d-flex flex-column align-items-center justify-content-center text-center cursor-pointer bg-light-subtle"
                style={{ borderStyle: "dashed", minHeight: "160px" }}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="d-none"
                  id="coverImageUpload"
                />
                <label
                  htmlFor="coverImageUpload"
                  className="w-100 m-0 cursor-pointer"
                >
                  <LuCloudUpload size={28} className="text-secondary mb-2" />
                  <p className="fw-medium small mb-1 text-dark">
                    Click to upload or drag & drop
                  </p>
                  <p
                    className="text-muted extra-small mb-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    PNG, JPG up to 10MB (16:9 ratio)
                  </p>
                </label>
              </div>
            </div>

            {/* <div>
              <label className="form-label text-secondary fw-medium small mb-2">
                Project Gallery
              </label>

              <div className="d-flex flex-wrap gap-2">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center border cursor-pointer"
                  style={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#f3f0ff",
                  }}
                >
                  <FiPlus size={20} style={{ color: "#4c6ef5" }} />
                </div>

                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=150&q=80"
                    alt="Interior Gallery Thumb"
                    className="w-100 h-100 rounded-3 object-cover border"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ width: "75px", height: "75px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=150&q=80"
                    alt="Exterior Gallery Thumb"
                    className="w-100 h-100 rounded-3 object-cover border"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <button className="btn btn-success" type="submit">
          <TbCircleArrowLeft />
          Publish Project
        </button>
        <button className="btn btn-secundry" type="button">
          Discard Draft
        </button>
      </div>
    </div>
  );
}
