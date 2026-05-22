import { Outlet, useMatch } from "react-router-dom";
import HeaderProject from "../../components/ProjectManagement/HeaderProject/HeaderProject";
import { CiSearch } from "react-icons/ci";
import { LuTextSearch } from "react-icons/lu";
import DropDownList from "../../components/ProjectManagement/DropDownList/DropDownList";
import Tables from "../../components/Users/Tables/Tables";

export default function Developers() {
  const isAddPage = useMatch("dashboard/developer-management/developer/add");

  const developerOptions = ["Agent", "Admin", "User"];
  const statusOptions = ["Active", "Pending", "Completed"];

  return (
    <>
      <HeaderProject
        title="Developer Management"
        buttonName="+ Add New Developer"
        addLink="add"
        showButton={!isAddPage} // Hides the main button when already on the add page
        description="Manage and monitor real estate developer partnerships and their performance."
        showSaveCancel={false}
      />

      {/* Wrap in a container to line up perfectly with your HeaderProject layout */}
      <div className="container mb-4">
        {isAddPage ? (
          <Outlet />
        ) : (
          <>
            {/* FIX 2: Added 'w-100' so the search container stretches beautifully across the page */}
            <div className="d-flex align-items-center gap-3 p-2 bg-white border rounded-3 shadow-sm w-100">
              <div className="position-relative flex-grow-1">
                <span className="position-absolute top-50 translate-middle-y ms-3 text-secondary">
                  <CiSearch size={20} />
                </span>
                <input
                  type="text"
                  className="form-control ps-5 shadow-none border"
                  // FIX 3: Context updated for developers
                  placeholder="Search developers by name or company..."
                />
              </div>

              <DropDownList
                placeholder="Developer"
                options={developerOptions}
              />
              <DropDownList placeholder="Status" options={statusOptions} />

              <button
                className="btn bg-white border shadow-none d-flex align-items-center justify-content-center text-secondary"
                style={{ width: "40px", height: "38px" }}
              >
                <LuTextSearch size={18} />
              </button>
            </div>

            {/* Developer cards grid or table component goes here */}
            <div className="mt-4">
              <Tables
                col_1={"#"}
                col_2={"Developer"}
                col_3={"Projects"}
                col_4={"Units Delivered"}
                col_5={"Avg. Commission"}
                col_6={"Status"}
                col_7={"Actions"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
