import { Outlet, useMatch } from "react-router-dom";
import PageHeader from "../../components/ProjectManagement/HeaderProject/HeaderProject";
import SearchFilter from "../../components/Users/SearchFilter/SearchFilter";
import DropDownList from "../../components/ProjectManagement/DropDownList/DropDownList";

export default function ProjectsPage() {
  const isAddPage = useMatch("dashboard/project-management/project/add");

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
      />

      {isAddPage ? (
        <Outlet />
      ) : (
        <>
          <SearchFilter />
          <DropDownList
          feildone={"Developer"}
          feildtow={"Agent"}
          feildThree={"USer"}
          />
        </>
      )}
    </div>
  );
}
