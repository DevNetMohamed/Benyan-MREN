import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import NotFound from "./components/shared/NotFound/NotFound";
import StatusPage from "./pages/statusPage/StatusPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Developers from "./pages/DevelopersPage/Developers";
import CMS from "./pages/CMS/CMS";
import LiveChat from "./pages/LiveChat/LiveChat";
import AuthLayout from "./components/layout/AuthLayout/AuthLayout";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword";
import MasterLayout from "./components/layout/MasterLayout/MasterLayout";
import LeadesBot from "./pages/LeadesBot/LeadesBot";
import ReportesPage from "./pages/ReportesPage/ReportesPage";
import SettingsPages from "./pages/SettingsPages/SettingsPages";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "forget-password", element: <ForgetPassword /> },
      ],
    },
    {
      path: "/dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: "user-management/users", element: <UsersPage /> },
        { path: "project-management/project", element: <ProjectsPage /> },
        { path: "developer-management/developer", element: <Developers /> },
        { path: "website/cms", element: <CMS /> },
        { path: "reportes", element: <ReportesPage /> },
        { path: "leades-bot", element: <LeadesBot /> },
        { path: "Settings", element: <SettingsPages /> },
        { path: "live-chat", element: <LiveChat /> },
        { path: "status", element: <StatusPage /> },
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
