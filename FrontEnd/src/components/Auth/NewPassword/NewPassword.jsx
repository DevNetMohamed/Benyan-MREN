import InputAuth from "../../ui/inputAuth/InputAuth";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Styles from "./newPassword.module.css";

export default function NewPassword() {
  return (
    <>
      <div className="w-100">
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Create new password</h4>
          <p className="text-secondary small">
            Your new password must be different from previous passwords for
            security reasons.
          </p>
        </div>
      </div>
      <form>
        <div className="mb-3">
          <InputAuth
            label="New Password"
            type="text"
            placeholder="Min. 8 Charchter"
          />
        </div>
        <div className="mb-4">
          <InputAuth
            label="Confirm Password"
            type="password"
            placeholder="Re-entr password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 py-2 fw-semibold"
        >
          Update Password
        </button>
        <div className="d-flex justify-content-center mt-4">
          <Link
            className={`${Styles.backlogin} d-flex align-items-center gap-2 text-decoration-none text-success fw-medium`}
            to="/login"
          >
            <GoArrowLeft className={Styles.arrowicon} />
            <span>Back to Login</span>
          </Link>
        </div>
        <div className={Styles.divider}></div>
        <div className="d-flex gap-2 text-align-center">
          <p>© 2026 Bunyan Real Estate. Secure Portal.</p>
          <div className={`${Styles.Links} gap-2 d-block d-flex`}>
            <Link to="/Privacy">Privacy Policy</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </form>
    </>
  );
}
