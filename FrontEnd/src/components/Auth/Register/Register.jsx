import { Link } from "react-router-dom";
import InputAuth from "../../ui/inputAuth/InputAuth";
import Style from "./register.module.css";
import "./register.module.css";
import { CiLock } from "react-icons/ci";
export default function Register() {
  return (
    <div className="w-100">
      <div className="mb-4">
        <h4 className="fw-bold mb-1">Create Account</h4>
        <p className="text-secondary small">
          Join Egypt's most exclusive real estate network.
        </p>
      </div>

      <form>
        <div className="mb-3">
          <InputAuth
            label="Full Name"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="mb-3">
          <InputAuth
            label="Email Address"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3">
          <InputAuth
            label="Phone Number"
            type="text"
            placeholder="+20xxxxxxxxxx"
          />
        </div>
        <div className="mb-4">
          <InputAuth
            label="Password"
            type="password"
            placeholder="Enter Your password"
          />
        </div>
        <div className="mb-4">
          <InputAuth
            label="Confirm Password"
            type="password"
            placeholder="Repeat Your password"
          />
        </div>
        <div
          className={`${Style.checkBoxSpan} d-flex justify-content-between align-items-center mb-4`}
        >
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label small" htmlFor="rememberMe">
              I agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>.
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 py-2 fw-semibold"
        >
          Sign Up
        </button>
        <div className="d-flex gap-2 py-2">
          Already have an account?
          <Link
            to="/login"
            className="text-success text-decoration-none small fw-medium"
          >
            Sign In
          </Link>
        </div>
        <div className="d-flex gap-2 text-black-50 text-align-center">
          <CiLock />
          Secure Institutional Access
        </div>
      </form>
    </div>
  );
}
