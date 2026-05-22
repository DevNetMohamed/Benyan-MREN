import { Outlet, useMatch } from "react-router-dom";
import HeadreUser from "../../components/Users/HeadreUser/HeadreUser";
import SearchFilter from "../../components/Users/SearchFilter/SearchFilter";
import Tables from "../../components/Users/Tables/Tables";

export default function UsersPage() {
  const isAddPage = useMatch("/dashboard/user-management/users/add");

  return (
    <>
      <div className="m-5">
        <HeadreUser
          title={isAddPage ? "Create New User" : "Users Table"}
          discription={
            isAddPage
              ? "Provide the essential information to add a new member to the Bunyan Real Estate platform."
              : "Manage all users and their information"
          }
          but_name={"+ Add New User"}
        />

        {isAddPage ? (
          <Outlet />
        ) : (
          <>
            <SearchFilter />
            <div className="py-3">
              <Tables
                col_1={"#"}
                col_2={"First Name"}
                col_3={"Last Name"}
                col_4={"UserName"}
                col_5={"Email"}
                col_6={"Role"}
                col_7={"Actions"}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
