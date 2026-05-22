import Financials from "../Financials/Financials";
import FormProject from "../FormProject/FormProject";
import SpecificationsProject from "../SpecificationsProject/SpecificationsProject";

export default function AddNewProject() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 d-flex gap-3">
          <FormProject />
          <SpecificationsProject />
        </div>
        <div className="col-12 mt-3 d-flex gap-3">
          <Financials />
        </div>
      </div>
    </div>
  );
}
