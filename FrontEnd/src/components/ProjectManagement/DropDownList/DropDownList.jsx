import React from "react";

export default function DropDownList({ feildone, feildtow, feildThree }) {
  return (
    <>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {feildone}
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              {feildone}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {feildtow}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {feildThree}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
