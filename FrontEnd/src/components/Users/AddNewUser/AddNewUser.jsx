import { CiLock } from "react-icons/ci";
import InputAuth from "../../ui/inputAuth/InputAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUserSchema } from "../Validation/addUserSchema";

export default function AddNewUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      role: "agent",
      status: true,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const userDetails = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "e.g. John",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "e.g. Doe",
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "example@email.com",
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
        <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
          {/* User Details */}
          {userDetails.map((field) => (
            <div className="col-md-6" key={field.id}>
              <InputAuth
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                error={errors[field.id]?.message}
              />
            </div>
          ))}

          {/* Role */}
          <div className="col-md-6">
            <label className="form-label">Assign Role</label>

            <select
              className={`form-select form-select-lg ${
                errors.role ? "is-invalid" : ""
              }`}
              {...register("role")}
            >
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>

            {errors.role && (
              <div className="invalid-feedback">
                {errors.role.message}
              </div>
            )}
          </div>

          {/* Status */}
          <div className="col-md-6 d-flex align-items-end">
            <div className="d-flex align-items-center justify-content-between w-100 p-2 px-3 bg-light border rounded">
              <span>Status: Active</span>

              <div className="form-check form-switch m-0 p-0">
                <input
                  type="checkbox"
                  className="form-check-input ms-0 mt-0"
                  {...register("status")}
                  style={{
                    width: "2.5rem",
                    height: "1.25rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Passwords */}
          {passwordDetails.map((field) => (
            <div className="col-md-6" key={field.id}>
              <InputAuth
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                error={errors[field.id]?.message}
              />
            </div>
          ))}

          <div className="col-12">
            <hr />
          </div>

          <div className="col-12 d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-outline-dark"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "#006b44" }}
            >
              Save User
            </button>
          </div>
        </form>
      </div>

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