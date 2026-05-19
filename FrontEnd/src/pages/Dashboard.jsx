import { Outlet } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column w-100">
          <div className="bg-success w-100 py-3">DASHBOARD</div>

          <main className="f-grow">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
