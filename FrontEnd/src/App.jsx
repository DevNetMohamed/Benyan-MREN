import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/shared/NotFound/NotFound";
import StatusPage from "./pages/statusPage/StatusPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Form from "./components/shared/Form/Form";
import Developers from "./pages/DevelopersPage/Developers";
import CMS from "./pages/CMS/CMS";
import LiveChat from "./pages/LiveChat/LiveChat";
import Tables from "./components/shared/Tables/Tables";

const UserForm = ["Email", "Password", "Username"];

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <StatusPage /> },
        { path: "/status", element: <StatusPage /> },
        {
          path: "/project",
          element: <ProjectsPage />,
          children: [
            {
              index: true,
              element: (
                <Tables
                  title={"Projects"}
                  discription={"Manage all Projects and their information"}
                  but_name={"+ Add New Project"}
                />
              ),
            },
            { path: "add", element: <Form /> },
          ],
        },
        {
          path: "/users",
          element: <UsersPage />,
          children: [
            {
              index: true,
              element: (
                <Tables
                  title={"Users"}
                  discription={"Manage all users and their information"}
                  but_name={"+ Add New User"}
                />
              ),
            },
            {
              path: "add",
              element: <Form title="user" lablename={UserForm} />,
            },
          ],
        },
        {
          path: "/developer",
          element: <Developers />,
          children: [
            {
              index: true,
              element: (
                <Tables
                  title={"Developer"}
                  discription={"Manage all Developer and their information"}
                  but_name={"+ Add New Developer"}
                />
              ),
            },
            {
              path: "add",
              element: <Form title="Developer" lablename={UserForm} />,
            },
          ],
        },
        { path: "/cms", element: <CMS /> },
        { path: "/live-chat", element: <LiveChat /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
