
export default function InputAuth({label, type, placeholder}) {
  return (
    <>
      <div>
        <label for="exampleFormControlInput1" class="form-label">
          {label}
        </label>
        <input
          type={type}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
