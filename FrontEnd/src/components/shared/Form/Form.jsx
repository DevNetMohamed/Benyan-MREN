export default function Form({ title, lablename }) {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50">
        {lablename.map((item, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={`input-${index}`} className="form-label">
              {item}
            </label>

            <input type="text" className="form-control" id={`input-${index}`} />
          </div>
        ))}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit {title}
        </button>
      </form>
    </div>
  );
}
