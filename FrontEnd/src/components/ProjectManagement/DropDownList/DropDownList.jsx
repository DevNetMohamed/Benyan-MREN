export default function DropDownList({ placeholder, options = [] }) {
  return (
    <div className="dropdown">
      <button
        className="btn bg-white border dropdown-toggle text-muted d-flex justify-content-between align-items-center shadow-none w-100"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {placeholder}
      </button>

      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
