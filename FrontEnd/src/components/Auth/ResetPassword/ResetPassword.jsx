import InputAuth from "../../ui/inputAuth/InputAuth";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Styles from "./resetPassword.module.css";

export default function ResetPassword() {
  return (
    <>
      <div className="w-100">
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Reset your password</h4>
          <p className="text-secondary small">
            Enter your email and we'll send a reset link.
          </p>
        </div>
      </div>
      <form action="">
        <div className="mb-3">
          <InputAuth
            label="Email Address"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 py-2 fw-semibold"
        >
          Send Reset Link
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
      </form>
    </>
  );
}
