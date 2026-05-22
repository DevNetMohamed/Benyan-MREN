export default function Tables({
  col_1,
  col_2,
  col_3,
  col_4,
  col_5,
  col_6,
  col_7,
}) {
  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
      <div className="card-body p-0">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-secondary">
            <tr>
              <th className="py-3 px-4">{col_1}</th>
              <th className="py-3">{col_2}</th>
              <th className="py-3">{col_3}</th>
              <th className="py-3">{col_4}</th>
              <th className="py-3">{col_5}</th>
              <th className="py-3">{col_6}</th>
              <th className="py-3">{col_7}</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
