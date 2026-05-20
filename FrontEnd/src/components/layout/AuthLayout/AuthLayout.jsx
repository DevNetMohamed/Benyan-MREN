import { Outlet } from "react-router-dom";
import AuthImage from "../../../assets/images/HomeAuth.png";
import styles from "./AuthLayout.module.css";

export default function AuthLayout() {
  return (
    <div className="container-fluid vh-100 overflow-hidden">
      <div className="row">
        <div
          className={`col-lg-6 d-none d-lg-block position-relative p-0 ${styles.HeroAuth}`}
        >
          <img src={AuthImage} alt="Auth Banner" className="w-100 h-100" />

          <div className={`position-absolute text-white ${styles.ContentAuth}`}>
            <h1 className="fw-bold mb-0">BUNYAN</h1>
            <h4 className="fw-light mb-4">Real Estate</h4>

            <p className={`text-light ${styles.Description}`}>
              Premium property management and commercial real estate solutions
              for the modern enterprise.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-12 bg-white d-flex align-items-center justify-content-center position-relative">
          <div className="w-100 px-4" style={{ maxWidth: "450px" }}>
            <Outlet />
          </div>

          {/* Footer */}
          <div
            className={`position-absolute bottom-0 start-50 translate-middle-x text-secondary small mb-4 ${styles.Footer}`}
          >
            © 2026 Bunyan Real Estate &nbsp; | &nbsp; Privacy Policy &nbsp; |
            &nbsp; Terms of Service
          </div>
        </div>
      </div>
    </div>
  );
}
