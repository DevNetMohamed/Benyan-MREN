import { Outlet } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import AdminDashbord from "./AdminDashbord/AdminDashbord";
import DevelopersPerformanceChart from "../components/ui/Charts/DevelopersPerformanceChart/DevelopersPerformanceChart";
import ProjectPortfolioChart from "../components/ui/Charts/ProjectPortfolioChart/ProjectPortfolioChart";

function Dashboard() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column w-100">
          <div>
            <Navbar adminName="mohamed" />
          </div>

          <main className="f-grow h-100">
            <Outlet />
            <AdminDashbord />
            <section className="py-4">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-7">
                    <DevelopersPerformanceChart />
                  </div>

                  <div className="col-lg-5">
                    <ProjectPortfolioChart />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
