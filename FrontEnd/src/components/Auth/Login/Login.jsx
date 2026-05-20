import { Link } from "react-router-dom";
import InputAuth from "../../ui/inputAuth/InputAuth";

export default function Login() {
  return (
    <div className="w-100">
      <div className="mb-4">
        <h4 className="fw-bold mb-1">Sign In</h4>
        <p className="text-secondary small">
          Access your real estate portfolio dashboard
        </p>
      </div>

      <form>
        <div className="mb-3">
          <InputAuth
            label="Email Address"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="mb-4">
          <InputAuth
            label="Password"
            type="password"
            placeholder="Enter Your password"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label small" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <Link
            to="/reset-password"
            className="text-success text-decoration-none small fw-medium"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 py-2 fw-semibold"
        >
          Sign In
        </button>
        <div className="d-flex gap-2 py-3">
          Don't have an account?
          <Link
            to="/register"
            className="text-success text-decoration-none small fw-medium"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
