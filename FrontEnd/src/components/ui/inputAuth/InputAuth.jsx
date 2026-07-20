export default function InputAuth({
  id,
  label,
  type,
  placeholder,
  register,
  error,
}) {
  return (
    <>
      <label className="form-label">{label}</label>

      <input
        {...register(id)}
        type={type}
        placeholder={placeholder}
        className={`form-control form-control-lg ${
          error ? "is-invalid" : ""
        }`}
      />

      {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </>
  );
}