import { Outlet, useMatch, useNavigate } from "react-router-dom";
import PageHeader from "../../components/ProjectManagement/HeaderProject/HeaderProject";
import DropDownList from "../../components/ProjectManagement/DropDownList/DropDownList";
import { CiSearch } from "react-icons/ci";
import { LuTextSearch } from "react-icons/lu";
import CartProject from "../../components/ProjectManagement/CartProject/CartProject";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const isAddPage = useMatch("dashboard/project-management/project/add");

  const developerOptions = ["Agent", "Admin", "User"];
  const statusOptions = ["Active", "Pending", "Completed"];

  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=220&fit=crop",
      status: "Active",
      title: "Skyline Heights",
      developer: "Emaar Properties",
      units: 245,
      startPrice: "$1.2M",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=220&fit=crop",
      status: "Pending",
      title: "Palm Residences",
      developer: "Damac Properties",
      units: 120,
      startPrice: "$850K",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=220&fit=crop",
      status: "Completed",
      title: "Marina Gate",
      developer: "Select Group",
      units: 380,
      startPrice: "$2.1M",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=220&fit=crop",
      status: "Active",
      title: "Skyline Heights",
      developer: "Emaar Properties",
      units: 245,
      startPrice: "$1.2M",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=220&fit=crop",
      status: "Pending",
      title: "Palm Residences",
      developer: "Damac Properties",
      units: 120,
      startPrice: "$850K",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=220&fit=crop",
      status: "Completed",
      title: "Marina Gate",
      developer: "Select Group",
      units: 380,
      startPrice: "$2.1M",
    },
  ];

  return (
    <div className="m-5">
      <PageHeader
        title={isAddPage ? "Add New Project" : "Projects Management"}
        description={
          isAddPage
            ? "Populate the fields below to list a new real estate development."
            : "Manage and track your property development portfolio."
        }
        buttonName="+ Add Project"
        showButton={!isAddPage}
        addLink="add"
        showSaveCancel={!!isAddPage}
        onCancel={() => navigate(-1)}
        onSave={() => console.log("Save clicked")}
      />

      {isAddPage ? (
        <Outlet />
      ) : (
        <>
          <div className="d-flex align-items-center gap-3 p-2 bg-white border rounded-3 shadow-sm">
            <div className="position-relative flex-grow-1">
              <span className="position-absolute top-50 translate-middle-y ms-3 text-secondary">
                <CiSearch size={20} />
              </span>
              <input
                type="text"
                className="form-control ps-5 shadow-none border"
                placeholder="Search projects by name or location..."
              />
            </div>

            <DropDownList placeholder="Developer" options={developerOptions} />
            <DropDownList placeholder="Status" options={statusOptions} />

            <button
              className="btn bg-white border shadow-none d-flex align-items-center justify-content-center text-secondary"
              style={{ width: "40px", height: "38px" }}
            >
              <LuTextSearch size={18} />
            </button>
          </div>

          <div className="mt-4">
            <div className="row g-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                  <CartProject
                    image={project.image}
                    status={project.status}
                    title={project.title}
                    developer={project.developer}
                    units={project.units}
                    startPrice={project.startPrice}
                    onEdit={() => console.log("Edit project:", project.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
